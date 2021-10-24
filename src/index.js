import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
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
      <App />
      <ColorModeScript />
    </ChakraProvider>
  </ApolloProvider>,
  document.getElementById("root")
);
