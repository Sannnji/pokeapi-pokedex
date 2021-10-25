import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

import { Layout } from "./components/Layout";

import SearchBar from "./components/SeachBar";
import GenerationFilter from "./components/filters/GenerationFilter";
import TypeFilter from "./components/filters/TypeFilter";
import PokeList from "./components/PokeList";

function App() {
  const [gen, setGen] = useState(1);

  return (
    <Layout>
      <Flex align="center" flexDir="column">
        <Box>
          <SearchBar />
          <Flex my={2} >
            <GenerationFilter setGen={setGen} />
            <TypeFilter />
          </Flex>

          <Box overflow="auto" height="75vh">
            <PokeList gen={gen} />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}

export default App;
