import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PokeList from "./components/PokeList";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import PokeEntry from "./components/pokeEntry/PokeEntry";

const client = new ApolloClient({
  // uri: "http://localhost:9000/",
  uri: "https://pokeapi-graphql-wrapper.herokuapp.com/",
  cache: new InMemoryCache({
    resultCaching: true,
    typePolicies: {
      NameAndIds: {
        keyFields: ["name"],
      },
    },
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<PokeList />} />
            <Route path=":genId" element={<PokeList />} />
            <Route path=":genId/:pokeType" element={<PokeList />} />
            <Route
              path={"/pokedex/:pokeId"}
              element={<PokeEntry isOpen={true} />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <ColorModeScript />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
