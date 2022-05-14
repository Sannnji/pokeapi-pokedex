import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import PokeList from "./components/PokeList";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { PokeProvider } from "./context";
import theme from "./theme";

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
      <PokeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />}>
              <Route index element={<PokeList />} />
              <Route path=":genId" element={<PokeList />} />
              <Route path=":genId/:pokeType" element={<PokeList />} />
            </Route>
          </Routes>
        </BrowserRouter>
        <ColorModeScript />
      </PokeProvider>
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
