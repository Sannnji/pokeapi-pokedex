import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Image, Box, SimpleGrid, Flex, Button } from "@chakra-ui/react";

import { PokeContext } from "../../context";
import SearchBar from "./components/SeachBar";

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
    <Flex flexDir="column">
      <SearchBar />
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
                  process.env.PUBLIC_URL +
                  `/images/boxSprites/${element.name}.png`
                }
                opacity="100%"
              />
            </Box>
          );
        })}
      </SimpleGrid>
      <Flex justifyContent="center">
        <Button>
          <i class="fas fa-caret-left"></i>
        </Button>
        <Button>
          <i class="fas fa-caret-right"></i>
        </Button>
      </Flex>
    </Flex>
  );
};

export default PokeList;
