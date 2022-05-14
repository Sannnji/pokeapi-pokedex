import { useParams, useSearchParams, useNavigate, Outlet } from "react-router-dom";

import { gql, useQuery } from "@apollo/client";
import {
  Image,
  SimpleGrid,
  Flex,
  Button
} from "@chakra-ui/react";

import Loading from "./Loading";

const GET_POKEMON_BY_FILTER = gql`
  query pokemonByFilter($gen: Int, $type: String) {
    pokemonByFilter(gen: $gen, type: $type) {
      id
      name
    }
  }
`;

const PokeList = () => {
  let searchResults;
  let params = useParams();
  let [searchParams] = useSearchParams();
  let navigate = useNavigate();

  const PokeButton = ({ pokemon }) => {
    return (
      <Button
        key={pokemon.id}
        bg="gray.200"
        style={styles.pokebox}
        height={{ base: "52px", md: "64px" }}
        width={{ base: "52px", md: "64px" }}
        onClick={() => {
          navigate(`/pokedex/${pokemon.id}`)
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
    variables: {
      gen: parseInt(params.genId, 10) || 1,
      type: params.pokeType === "notype" ? null : params.pokeType,
    },
    pollInterval: 500,
  });

  if (loading) return <Loading />;
  if (error) return <p>error: {error}</p>;

  // if search bar contains value, filter pokelist by name
  if (searchParams.get("filter") !== "") {
    searchResults = data.pokemonByFilter.filter(
      (pokemon) => pokemon.name.startsWith(searchParams.get("filter")) === true
    );
  }

  return (
    <Flex flexDir="column" align={{ base: "center", lg: "space-evenly" }}>
      <SimpleGrid
        columns={{ base: 4, md: 9, lg: 12, xl: 16 }}
        spacing={{ base: 3, lg: 4, xl: 5 }}
      >
        {searchParams.get("filter") == null || searchParams.get("filter") === ""
          ? data.pokemonByFilter.map((pokemon, index) => {
              return <PokeButton key={index} pokemon={pokemon} />;
            })
          : searchResults.map((pokemon, index) => {
              return <PokeButton key={index} pokemon={pokemon} />;
            })}
      </SimpleGrid>
      <Outlet />
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
