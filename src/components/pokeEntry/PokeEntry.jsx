import { gql, useQuery } from "@apollo/client";
import {
  Drawer,
  DrawerHeader,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { useContext } from "react";
import { PokeContext } from "../../context";
import AbilitySection from "./components/AbilitySection";
import BasicSection from "./components/BasicSection";
import MoveSection from "./components/MoveSection";
import StatSection from "./components/StatSection";
import Loading from "../Loading";
import EvolutionSection from "./components/EvolutionSection";

const GET_POKEMON = gql`
  query pokemon($id: Int!, $game: String!) {
    pokemon(id: $id) {
      id
      name
      flavorText
      genus
      height
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
      moves(game: $game) {
        name
        type
        power
        pp
        accuracy
        damage_class
        learnMethods {
          method
          level_learned_at
          game
        }
      }
      evolutionRequirement
      evolutionTrigger

      evolvesFrom {
        id
        name
        sprites {
          front_default
        }
        type {
          name
        }
        evolutionRequirement
        evolutionTrigger

        evolvesFrom {
          id
          name
          sprites {
            front_default
          }
          type {
            name
          }
          evolutionRequirement
          evolutionTrigger
        }

        evolvesTo {
          id
          name
          sprites {
            front_default
          }
          type {
            name
          }
          evolutionRequirement
          evolutionTrigger
        }
      }

      evolvesTo {
        id
        name
        sprites {
          front_default
        }
        type {
          name
        }
        evolutionRequirement
        evolutionTrigger

        evolvesFrom {
          id
          name
          sprites {
            front_default
          }
          type {
            name
          }
          evolutionRequirement
          evolutionTrigger
        }

        evolvesTo {
          id
          name
          sprites {
            front_default
          }
          type {
            name
          }
          evolutionRequirement
          evolutionTrigger
        }
      }
    }
  }
`;

const PokeEntry = (props) => {
  const { pokeId } = useContext(PokeContext);

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { 
      id: pokeId,
      game: "emerald"
    },
  });

  const drawerPosition = useBreakpointValue({ base: "bottom", lg: "right" });

  if (loading) return <Loading />;
  if (error) return <p>error: {error}</p>;
  const pokemon = data.pokemon;

  return (
    <Drawer
      isOpen={props.isOpen}
      onClose={props.onClose}
      placement={drawerPosition}
      size="full"
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton _focus={{ outline: "none", boxShadow: "none" }} />
        <DrawerHeader />
        <DrawerBody>
          <Tabs colorScheme="pink">
            <TabList justifyContent="center">
              <Tab _focus={{ outline: "none", boxShadow: "none" }}>Basic</Tab>
              <Tab _focus={{ outline: "none", boxShadow: "none" }}>
                Evolution
              </Tab>
              <Tab _focus={{ outline: "none", boxShadow: "none" }}>
                Abilities
              </Tab>
              <Tab _focus={{ outline: "none", boxShadow: "none" }}>Moves</Tab>
            </TabList>

            <TabPanels>
              <TabPanel width="100%" maxH="80vh" overflow="auto">
                <Flex flexDir="column" alignItems="center">
                  <BasicSection
                    id={pokemon.id}
                    name={pokemon.name}
                    type={pokemon.type}
                    image={pokemon.sprites.front_default}
                    flavorText={pokemon.flavorText}
                    genus={pokemon.genus}
                    height={pokemon.height}
                  />

                  <StatSection stats={pokemon.stats} />
                </Flex>
              </TabPanel>
              <TabPanel width="100%" maxH="80vh" overflow="auto">
                <Flex
                  flexDir={{ base: "column", lg: "row" }}
                  justifyContent="center"
                  align="center"
                  position="relative"
                >
                  <EvolutionSection
                    currentPoke={pokemon}
                    evolvesFrom={pokemon.evolvesFrom}
                    evolvesTo={pokemon.evolvesTo}
                  />
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
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default PokeEntry;
