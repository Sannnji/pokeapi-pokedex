import { Box, Heading } from "@chakra-ui/react";

export const Layout = (props) => {
  return (
    <Box m={12} align="center">
      <Heading mb={2} ml={2} textAlign="left">
        PokeAPI PokeDex
      </Heading>
      {props.children}
    </Box>
  );
};
