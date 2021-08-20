import React from "react";
import { Flex } from "@chakra-ui/layout";

import { Layout } from "./components/Layout";
import PokeList from "./components/pokeList/PokeList";
import PokeInfo from "./components/pokeInfo/PokeInfo";
import PokeProvider  from "./Context";

function App() {
  return (
    <Layout>
      <Flex align="center" justify="space-between">
        <PokeProvider>
          <PokeList />
          <PokeInfo />
        </PokeProvider>
      </Flex>
    </Layout>
  );
}

export default App;
