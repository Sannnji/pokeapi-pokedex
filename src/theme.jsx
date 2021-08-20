import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemColorMode: false,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#1A202C",
      },
    },
  },
});

export default theme;
