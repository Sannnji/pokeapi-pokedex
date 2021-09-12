import { gql, useQuery } from "@apollo/client";
import {
  SimpleGrid,
  Flex,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { useContext } from "react";
import { PokeContext } from "../../context";
import AbilitySection from "./components/AbilitySection";
import BasicSection from "./components/BasicSection";
import MoveSection from "./components/MoveSection";
import StatSection from "./components/StatSection";

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
          damageClass
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { id: pokeId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;
  const pokemon = data.pokemon;

  return (
    <>
      <Modal isOpen={props.isOpen} onClose={props.onClose} size="full">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SimpleGrid
              flexDir="row"
              bg="#F1F1F1"
              borderRadius="lg"
              color="#646464"
              p={2}
              spacing={2}
              columns={2}
              overflow="hidden"
            >
              <Flex flexDr="row" align="center">
                <Image src={pokemon.sprites.front_default} />
                <BasicSection
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.type}
                />
              </Flex>
              <AbilitySection abilities={pokemon.abilities} />
              <MoveSection moves={pokemon.moves} />
              <StatSection stats={pokemon.stats} />
            </SimpleGrid>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PokeInfo;
