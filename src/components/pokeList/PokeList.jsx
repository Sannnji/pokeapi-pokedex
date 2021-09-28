import { useContext, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import {
  Image,
  SimpleGrid,
  Flex,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { PokeContext } from "../../context";
import SearchBar from "./components/SeachBar";
import PokeInfo from "../pokeInfo/PokeInfo";
import NextButton from "./components/NextButton";
import BackButton from "./components/BackButton";

const PokeList = () => {
  const { setPokeId } = useContext(PokeContext);
  const [idRange, setIdRange] = useState({ start: 0 });
  const { isOpen, onToggle, onClose } = useDisclosure();

  const GET_POKEMON_NAMES_AND_IDS = gql`
    query pokemonNamesAndIds($start: Int, $end: Int) {
      pokemonNamesAndIds(start: $start, end: $end) {
        id
        name
      }
    }
  `;

  const { loading, error, data, fetchMore } = useQuery(
    GET_POKEMON_NAMES_AND_IDS,
    {
      variables: { start: idRange.start, end: 30 },
      pollInterval: 100,
    }
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;
  return (
    <Flex flexDir="column">
      <SearchBar />
      <SimpleGrid columns={{ base: 5, md: 6 }} spacing={2} mt={4}>
        {data.pokemonNamesAndIds.map((element) => {
          return (
            <Button
              key={element.id}
              bg="white"
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

      <PokeInfo onClose={onClose} isOpen={isOpen} />

      <Flex justifyContent="center" mt={4}>
        <BackButton
          onClick={() => {
            if (idRange.start === 0) {
              return;
            } else {
              setIdRange({ start: idRange.start - 30 });
            }
          }}
        />
        <NextButton
          onClick={() => {
            setIdRange({ start: idRange.start + 30 });
            fetchMore({
              variables: {
                start: data.pokemonNamesAndIds.length,
              },
            });
          }}
        />
      </Flex>
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
