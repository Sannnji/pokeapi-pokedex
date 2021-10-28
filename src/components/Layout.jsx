import { Box, Text, Flex } from "@chakra-ui/react";
import ColorModeSwitcher from "./ColorModeSwitcher";

export const Layout = (props) => {
  return (
    <Box px={{ base: 4, md: 12 }} align="center">
      <Flex justifyContent="space-between" alignItems="center" pt={2}>
        <Text fontSize="xl" fontWeight="semibold">
          PokeAPI PokeDex
        </Text>
        <ColorModeSwitcher />
      </Flex>

      {props.children}
    </Box>
  );
};
