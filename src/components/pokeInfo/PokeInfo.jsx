import { gql, useQuery } from "@apollo/client";
import { Box, Flex } from "@chakra-ui/react";
import { VStack, Image } from "@chakra-ui/react";

import { useContext } from "react";
import { PokeContext } from "../../Context";
import AbilitySection from "./components/AbilitySection";
import BasicSection from "./components/BasicSection";
import MoveSection from "./components/MoveSection";
import StatSection from "./components/StatSection";

const PokeInfo = () => {
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
    <Flex
      flexDir="row"
      bg="white"
      borderRadius="lg"
      color="#646464"
      maxH={525}
      py={2}
      px={2}
    >
      <VStack flexdir="column" align="center">
        <Flex flexDr="row">
          <Image src={pokemon.sprites.front_default} />
          <BasicSection
            id={pokemon.id}
            name={pokemon.name}
            type={pokemon.type}
          />
        </Flex>
        <MoveSection moves={pokemon.moves} />
      </VStack>

      <VStack maxH={400} overflow={"hidden"}>
        <AbilitySection abilities={pokemon.abilities} />
        <StatSection stats={pokemon.stats} />
      </VStack>
    </Flex>
  );
};

export default PokeInfo;
