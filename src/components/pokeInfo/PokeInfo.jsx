import { gql, useQuery } from "@apollo/client";
import { Box, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

import { useContext } from "react";
import { PokeContext } from "../../context";
import AbilitySection from "./components/AbilitySection";
import BasicSection from "./components/BasicSection";

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
    <Box bg="white" borderRadius="lg" color="#646464">
      <Flex flexdir="row">
        <Image src={pokemon.sprites.front_default} />
        <BasicSection
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
        />
        <AbilitySection />
      </Flex>
    </Box>
  );
};

export default PokeInfo;
