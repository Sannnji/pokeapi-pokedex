import { useState } from "react";
import { Flex, Box } from "@chakra-ui/react";

import { Layout } from "./components/Layout";

import PokeList from "./components/PokeList";
import SearchBar from "./components/SeachBar";
import GenerationFilter from "./components/filters/GenerationFilter";
import TypeFilter from "./components/filters/TypeFilter";

function App() {
  const [gen, setGen] = useState(1);
  const [type, setType] = useState(null);

  return (
    <Layout>
      <Flex align="center" flexDir="column">
        <Box width="100%">
          <SearchBar />
          <Flex my={2}>
            <GenerationFilter setGen={setGen} />
            <TypeFilter setType={setType} />
          </Flex>

          <Box overflow="auto" height="75vh">
            <PokeList gen={gen} type={type} />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}

export default App;
