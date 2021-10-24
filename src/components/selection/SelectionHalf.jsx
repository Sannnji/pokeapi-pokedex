import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import SearchBar from "./components/SeachBar";
import GenerationMenu from "./components/generationFilter";
import PokeList from "./components/PokeList";

export default function SelectionHalf() {
  const [gen, setGen] = useState(1);

  return (
    <Flex width="100vh" align="center" flexDir="column">
      <SearchBar />
      <GenerationMenu setGen={setGen} />
      
      <Box overflow="auto" height="75vh" width="100vh">
        <PokeList gen={gen} />
      </Box>
    </Flex>
  );
}
