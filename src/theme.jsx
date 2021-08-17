import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemColorMode: false,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#B23B3B",
      },
    },
  },
});

export default theme;
