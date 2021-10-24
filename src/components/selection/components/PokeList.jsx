import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Image, SimpleGrid, Flex, Button } from "@chakra-ui/react";

import { PokeContext } from "../../../context";

import Loading from "../../Loading";

const PokeList = ({ gen }) => {
  const { setPokeId } = useContext(PokeContext);

  const GET_POKEMON_BY_GENERATION = gql`
    query pokemonByGeneration($gen: Int) {
      pokemonByGeneration(gen: $gen) {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POKEMON_BY_GENERATION, {
    variables: { gen: gen },
  });

  if (loading) return <Loading />;
  if (error) return <p>error: {error}</p>;
  return (
    <Flex flexDir="column" >
      <SimpleGrid columns={{ base: 5, md: 6, lg: 9, xl: 12 }}>
        {data.pokemonByGeneration.map((element) => {
          return (
            <Button
              key={element.id}
              bg="white"
              m={2}
              style={styles.pokebox}
              onClick={() => {
                setPokeId(element.id);
              }}
            >
              <Image
                src={
                  process.env.PUBLIC_URL +
                  `/images/boxSprites/${element.name}.png`
                }
                opacity="100%"
              />
            </Button>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

const styles = {
  pokebox: {
    opacity: "80%",
    height: "64px",
    width: "64px",
    borderRadius: "lg",
    padding: "0",
  },
};

export default PokeList;

// { start: idRange.start, end: idRange.end }
