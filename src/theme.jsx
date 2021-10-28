import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemColorMode: false,
  styles: {
    global: {
      "html, body": {
        backgroundColor: "#1A202C",
        color: "white",
      },
    },
  },
  components: {
    Button: {
      baseStyle: {
        _focus: { outline: "none", boxShadow: "none" },
      },
    },
  },
});

export default theme;
