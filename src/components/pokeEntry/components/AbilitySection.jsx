import { Flex, Text, Box } from "@chakra-ui/react";
import { capitalize } from "../../../utils/capitalize";
import { replaceHyphon } from "../../../utils/replaceHyphen";

const AbilitySection = ({ abilities }) => {
  return (
    <Flex maxH="80vh" flexDir="column" align="center" mt={4}>
      <Text fontSize="xl" fontWeight="semibold" mb={2}>
        Abilities
      </Text>

      <Box width="100%" px={{ base: 4, lg: 8 }} overflow="auto">
        {abilities.map((ability) => {
          return (
            <Box
              my={8}
              bg="#E2E8F0"
              boxShadow="lg"
              p={{ base: 4, lg: 8 }}
              borderRadius="lg"
            >
              <Box
                mb={{ base: 4, lg: 8 }}
                fontSize="lg"
                fontWeight="semibold"
                textAlign="center"
              >
                <Text>{capitalize(replaceHyphon(ability.name))}</Text>
              </Box>

              <Box width="100%" textAlign="center">
                <Text>{ability.effect}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
};

export default AbilitySection;
