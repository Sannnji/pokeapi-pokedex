import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Image, Box, SimpleGrid } from "@chakra-ui/react";

import { PokeContext } from "../context";

const PokeList = () => {
  const { setPokeId } = useContext(PokeContext);

  const GET_POKEMON_NAMES_AND_IDS = gql`
    query pokemonNamesAndIds($start: Int, $end: Int) {
      pokemonNamesAndIds(start: $start, end: $end) {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POKEMON_NAMES_AND_IDS, {
    variables: { start: 0, end: 30 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;
  return (
    <SimpleGrid columns={6}>
      {data.pokemonNamesAndIds.map((element) => {
        return (
          <Box
            key={element.id}
            bg="white"
            opacity="80%"
            h="64px"
            w="64px"
            borderRadius={"lg"}
            margin={2}
            onClick={() => setPokeId(element.id)}
          >
            <Image
              src={
                process.env.PUBLIC_URL + `/images/regular/${element.name}.png`
              }
              opacity="100%"
            />
          </Box>
        );
      })}
    </SimpleGrid>
  );
};

export default PokeList;
