import { useContext } from "react";
import { gql, useQuery } from "@apollo/client";
import { Image, SimpleGrid, Flex, Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

import { PokeContext } from "../context";
import Loading from "./Loading";

const GET_POKEMON_BY_FILTER = gql`
  query pokemonByFilter($gen: Int, $type: String) {
    pokemonByFilter(gen: $gen, type: $type) {
      id
      name
    }
  }
`;

const PokeList = ({ gen, type, searchValue }) => {
  const { setPokeId } = useContext(PokeContext);
  let location = useLocation();
  let searchResults;

  const PokeButton = ({ pokemon }) => {
    return (
      <Link to={`/${pokemon.id}`} state={{ backgroundLocation: location }}>
        <Button
          key={pokemon.id}
          bg="gray.200"
          style={styles.pokebox}
          height={{ base: "52px", md: "64px" }}
          width={{ base: "52px", md: "64px" }}
          onClick={() => {
            setPokeId(pokemon.id);
          }}
        >
          <Image
            src={
              process.env.PUBLIC_URL + `/images/boxSprites/${pokemon.name}.png`
            }
            opacity="100%"
          />
        </Button>
      </Link>
    );
  };

  const { loading, error, data } = useQuery(GET_POKEMON_BY_FILTER, {
    variables: { gen: gen, type: type },
    pollInterval: 500,
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
      <SimpleGrid
        columns={{ base: 4, md: 9, lg: 12, xl: 16 }}
        spacing={{ base: 3, lg: 4, xl: 5 }}
      >
        {searchValue
          ? searchResults.map((pokemon) => {
              return <PokeButton pokemon={pokemon} />;
            })
          : data.pokemonByFilter.map((pokemon) => {
              return <PokeButton pokemon={pokemon} />;
            })}
      </SimpleGrid>
    </Flex>
  );
};

const styles = {
  pokebox: {
    opacity: "80%",
    borderRadius: "lg",
    padding: "0",
  },
};

export default PokeList;
