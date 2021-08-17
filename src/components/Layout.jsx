import { Container, Box } from "@chakra-ui/react";

export const Layout = (props) => {
  return (
    <Box m={12} align="center" justify="center">
      {props.children}
    </Box>
  );
};
