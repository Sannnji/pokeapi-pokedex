import React from "react";
import { Flex } from "@chakra-ui/react";

import { Layout } from "./components/Layout";
import PokeEntry from "./components/pokeEntry/PokeEntry";
import SelectionHalf from "./components/selection/SelectionHalf";
import { PokeProvider } from "./context";

function App() {
  return (
    <Layout>
      <PokeProvider>
        <Flex flexDir={{ base: "column", lg: "row" }}>
          <SelectionHalf />

          <PokeEntry />
        </Flex>
      </PokeProvider>
    </Layout>
  );
}

export default App;
