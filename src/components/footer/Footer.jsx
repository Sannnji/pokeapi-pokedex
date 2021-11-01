import { Box, Stack, Text } from "@chakra-ui/react";

import Copyright from "./Copyright";
import SocialMediaLinks from "./SocialMediaLinks";

export default function Footer() {
  return (
    <Box as="footer" id="contact" role="contentinfo" py={1}>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Text>James</Text>
        <SocialMediaLinks />
      </Stack>
      <Copyright textAlign="left" />
    </Box>
  );
}
