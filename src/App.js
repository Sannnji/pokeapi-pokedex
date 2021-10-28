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
  const [searchValue, setSearchValue] = useState(null);

  return (
    <Layout>
      <Flex align="center" flexDir="column">
        <Box width="100%">
          <Flex my={3} flexDir={{ base: "column", lg: "row" }}>
            <SearchBar setSearchValue={setSearchValue} />
            <Flex
              mt={{ base: 4, lg: 0 }}
              justifyContent={{ base: "center", lg: "normal" }}
            >
              <GenerationFilter setGen={setGen} />
              <TypeFilter setType={setType} />
            </Flex>
          </Flex>

          <Box
            overflow="auto"
            height="80vh"
            border="1px"
            borderColor="#CBD5E0"
            borderRadius="lg"
            p={4}
          >
            <PokeList gen={gen} type={type} searchValue={searchValue} />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}

export default App;
