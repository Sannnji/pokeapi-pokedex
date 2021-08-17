import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";

const client = new ApolloClient({
  uri: "https://pokeapi-graphql-wrapper.herokuapp.com",
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ChakraProvider theme={theme}>
      <App />
      <ColorModeScript />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
