import { useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { Flex, Image, Box, Button } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { motion } from "framer-motion";

import { useContext } from "react";
import { PokeContext } from "../../context";
import AbilitySection from "./components/AbilitySection";
import BasicSection from "./components/BasicSection";
import MoveSection from "./components/MoveSection";
import StatSection from "./components/StatSection";
import Loading from "../Loading";

const MotionBox = motion(Box);

const PokeEntry = (props) => {
  const [show, setShow] = useState(false);
  const { pokeId } = useContext(PokeContext);

  const GET_POKEMON = gql`
    query pokemon($id: Int!) {
      pokemon(id: $id) {
        id
        name
        sprites {
          front_default
        }
        type {
          name
        }
        abilities {
          name
          effect
        }
        stats {
          hp
          attack
          defense
          special_attack
          special_defense
          speed
        }
        moves {
          name
          type
          power
          pp
          accuracy
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { id: pokeId },
  });

  if (loading)
    return <Loading bottom="40%" color="teal" emptyColor="gray.200" />;
  if (error) return <p>error: {error}</p>;
  const pokemon = data.pokemon;

  const variants = {
    open: { x: 0 },
    close: { x: 300 },
  };

  return (
    <MotionBox
      position="fixed"
      top={0}
      right={0}
      pl={4}
      bg="grey"
      height="100vh"
      initial={{ x: 300 }}
      animate={show ? variants.open : variants.close}
      transition={{ type: "smooth", duration: "1" }}
    >
      <Flex align="center">
        <Button onClick={() => setShow(!show)} mr={8}>
          open
        </Button>
        <Tabs>
          <TabList justifyContent="center">
            <Tab>Basic</Tab>
            <Tab>Abilities</Tab>
            <Tab>Moves</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Flex flexDir="column" alignItems="center">
                <Image src={pokemon.sprites.front_default} />
                <BasicSection
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.type}
                />
                <StatSection stats={pokemon.stats} />
              </Flex>
            </TabPanel>
            <TabPanel>
              <AbilitySection abilities={pokemon.abilities} />
            </TabPanel>
            <TabPanel>
              <MoveSection moves={pokemon.moves} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </MotionBox>
  );
};

export default PokeEntry;
