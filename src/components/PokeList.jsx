import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Image,
  SimpleGrid,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { PokeContext } from "../context";
import Loading from "./Loading";
import PokeEntry from "./pokeEntry/PokeEntry";

const PokeList = ({ gen, type }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { setPokeId } = useContext(PokeContext);

  const GET_POKEMON_BY_FILTER = gql`
    query pokemonByFilter($gen: Int, $type: String) {
      pokemonByFilter(gen: $gen, type: $type) {
        id
        name
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POKEMON_BY_FILTER, {
    variables: { gen: gen, type: type },
  });

  if (loading) return <Loading />;
  if (error) return <p>error: {error}</p>;
  return (
    <Flex flexDir="column">
      <SimpleGrid columns={{ base: 5, md: 9, lg: 12, xl: 15 }}>
        {data.pokemonByFilter.map((element) => {
          return (
            <Button
              key={element.id}
              bg="white"
              m={2}
              style={styles.pokebox}
              onClick={() => {
                setPokeId(element.id);
                onToggle();
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
      <PokeEntry isOpen={isOpen} onClose={onClose} />
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
