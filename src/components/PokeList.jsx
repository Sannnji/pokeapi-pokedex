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

const GET_POKEMON_BY_FILTER = gql`
  query pokemonByFilter($gen: Int, $type: String) {
    pokemonByFilter(gen: $gen, type: $type) {
      id
      name
    }
  }
`;

const PokeList = ({ gen, type, searchValue }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const { setPokeId } = useContext(PokeContext);
  let searchResults;

  const PokeButton = ({ pokemon }) => {
    return (
      <Button
        key={pokemon.id}
        bg="gray.200"
        style={styles.pokebox}
        onClick={() => {
          setPokeId(pokemon.id);
          onToggle();
        }}
      >
        <Image
          src={
            process.env.PUBLIC_URL + `/images/boxSprites/${pokemon.name}.png`
          }
          opacity="100%"
        />
      </Button>
    );
  };

  const { loading, error, data } = useQuery(GET_POKEMON_BY_FILTER, {
    variables: { gen: gen, type: type },
  });

  if (loading) return <Loading />;
  if (error) return <p>error: {error}</p>;
  // if search bar contains value, filter pokelist by name
  if (searchValue) {
    searchResults = data.pokemonByFilter.filter(
      (pokemon) => pokemon.name.startsWith(searchValue) === true
    );
  }

  return (
    <Flex flexDir="column" align={{ base: "center", lg: "space-evenly" }}>
      <SimpleGrid columns={{ base: 5, md: 9, lg: 12, xl: 16 }} spacing={2}>
        {searchValue
          ? searchResults.map((pokemon) => {
              return <PokeButton pokemon={pokemon} />;
            })
          : data.pokemonByFilter.map((pokemon) => {
              return <PokeButton pokemon={pokemon} />;
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
