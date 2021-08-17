import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemColorMode: false,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#B35D5D",
      },
    },
  },
});

export default theme;
