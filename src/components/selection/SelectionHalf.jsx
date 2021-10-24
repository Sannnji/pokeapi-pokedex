import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import SearchBar from "./components/SeachBar";
import GenerationFilter from "./components/GenerationFilter";
import TypeFilter from "./components/TypeFilter";
import PokeList from "./components/PokeList";

export default function SelectionHalf() {
  const [gen, setGen] = useState(1);

  return (
    <Flex width={{ base: "90vw", lg: "75vw" }} align="center" flexDir="column">
      <SearchBar />
      <Flex my={2}>
        <GenerationFilter setGen={setGen} />
        <TypeFilter />
      </Flex>

      <Box overflow="auto" height={{ base: "65vh", lg: "75vh" }}>
        <PokeList gen={gen} />
      </Box>
    </Flex>
  );
}
