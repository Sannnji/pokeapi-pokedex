import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { PokeProvider } from "./context";
import theme from "./theme";

const client = new ApolloClient({
  uri: "http://localhost:9000/",
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
        <App />
        <ColorModeScript />
      </PokeProvider>
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
