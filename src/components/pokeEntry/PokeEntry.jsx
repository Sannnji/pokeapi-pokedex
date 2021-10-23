import { gql, useQuery } from "@apollo/client";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { Flex, Image } from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import { useContext } from "react";
import { PokeContext } from "../../context";
import AbilitySection from "./components/AbilitySection";
import BasicSection from "./components/BasicSection";
import MoveSection from "./components/MoveSection";
import StatSection from "./components/StatSection";
import Loading from "../Loading";

const PokeInfo = (props) => {
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

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Dex Entry</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
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
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokeInfo;
