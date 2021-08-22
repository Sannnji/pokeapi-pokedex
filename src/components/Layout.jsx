import { Box, Text } from "@chakra-ui/react";

export const Layout = (props) => {
  return (
    <Box m={12} align="center">
      <Text mb={12} mt={-8} ml={2} fontSize="xl" textAlign="left" color="white">
        PokeAPI PokeDex
      </Text>
      {props.children}
    </Box>
  );
};
