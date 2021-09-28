import React from "react";
import { Flex } from "@chakra-ui/layout";

import { Layout } from "./components/Layout";
import PokeList from "./components/pokeList/PokeList";
import { PokeProvider } from "./context";

function App() {
  return (
    <Layout>
      <Flex align="center" justify="center">
        <PokeProvider>
          <PokeList />
        </PokeProvider>
      </Flex>
    </Layout>
  );
}

export default App;
