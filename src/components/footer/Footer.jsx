import { Box, Stack, Text, Link } from "@chakra-ui/react";

import Copyright from "./Copyright";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
  return (
    <Box as="footer" fontSize="sm" id="contact" role="contentinfo" py={1}>
      <Stack direction="row" spacing="4" align="center" textAlign="left" justify="space-between">
        <Text>
          {"Made by "}
          <Link href="https://www.linkedin.com/in/jamesji98/" color="cyan.400">
            James Ji
          </Link>
          {", using "}
          <Link href="https://pokeapi.co/" color="cyan.400">
            PokeApi
          </Link>
        </Text>
        <SocialMediaLinks />
      </Stack>
      <Copyright textAlign="left" />
    </Box>
  );
}
