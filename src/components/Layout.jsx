import { Box, Text } from "@chakra-ui/react";

export const Layout = (props) => {
  return (
    <Box px={{ base: 4, md: 12 }} align="center">
      <Text py={4} fontSize="xl" color="white">
        PokeAPI PokeDex
      </Text>
      {props.children}
    </Box>
  );
};
