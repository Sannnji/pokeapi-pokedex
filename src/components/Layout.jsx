import { Box, Text } from "@chakra-ui/react";

export const Layout = (props) => {
  return (
    <Box m={{ base: 4, md: 12 }} align="center">
      <Text my={8} fontSize="xl" color="white">
        PokeAPI PokeDex
      </Text>
      {props.children}
    </Box>
  );
};
