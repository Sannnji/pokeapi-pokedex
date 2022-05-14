import { Outlet } from "react-router-dom";
import { Flex, Box } from "@chakra-ui/react";

import { Layout } from "./components/Layout";

import SearchBar from "./components/SeachBar";
import GenerationFilter from "./components/filters/GenerationFilter";
import TypeFilter from "./components/filters/TypeFilter";

function App() {
  return (
    <Layout>
      <Flex align="center" flexDir="column">
        <Box width="100%">
          <Flex my={3} flexDir={{ base: "column", lg: "row" }}>
            <SearchBar />
            <Flex
              mt={{ base: 4, lg: 0 }}
              justifyContent={{ base: "center", lg: "normal" }}
            >
              <GenerationFilter />
              <TypeFilter/>
            </Flex>
          </Flex>

          <Box
            overflow="auto"
            height={{ base: "65vh", md: "72vh", lg: "80vh" }}
            border="1px"
            borderColor="#CBD5E0"
            borderRadius="lg"
            p={4}
          >
            <Outlet />
          </Box>
        </Box>
      </Flex>
    </Layout>
  );
}

export default App;
