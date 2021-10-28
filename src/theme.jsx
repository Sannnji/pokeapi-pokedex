import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  useSystemColorMode: false,
  styles: {
    global: {
      "html, body": {
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
