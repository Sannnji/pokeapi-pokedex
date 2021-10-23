import React from "react";

import { Layout } from "./components/Layout";
import PokeList from "./components/pokeList/PokeList";
import { PokeProvider } from "./context";

function App() {
  return (
    <Layout>
      <PokeProvider>
        <PokeList />
      </PokeProvider>
    </Layout>
  );
}

export default App;
