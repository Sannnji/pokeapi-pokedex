import { Flex, Text, Box } from "@chakra-ui/react";
import { capitalize } from "../../../utils/capitalize";
import { replaceHyphon } from "../../../utils/replaceHyphen";

const AbilitySection = ({ abilities }) => {
  return (
    <Flex maxH="80vh" flexDir="column" align="center" mt={4}>
      <Text fontSize="xl" fontWeight="semibold" mb={2}>
        Abilities
      </Text>

      <Box width="100%" px={8} overflow="auto">
        {abilities.map((ability) => {
          return (
            <Box
              my={4}
              boxShadow="lg"
              borderBottomLeftRadius="lg"
              borderBottomRightRadius="lg"
            >
              <Box
                p={2}
                bg="gray.300"
                borderTopLeftRadius="lg"
                borderTopRightRadius="lg"
              >
                <Box
                  py={1}
                  border="2px"
                  borderColor="white"
                  fontSize="lg"
                  fontWeight="semibold"
                  borderTopLeftRadius="lg"
                  borderTopRightRadius="lg"
                  textAlign="center"
                >
                  <Text>{capitalize(replaceHyphon(ability.name))}</Text>
                </Box>
              </Box>

              <Box
                p={2}
                bg="gray.300"
                borderBottomLeftRadius="lg"
                borderBottomRightRadius="lg"
              >
                <Box
                  width="100%"
                  textAlign="center"
                  border="2px"
                  borderColor="white"
                  borderBottomLeftRadius="lg"
                  borderBottomRightRadius="lg"
                >
                  <Text p={8}>{ability.effect}</Text>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Flex>
  );
};

export default AbilitySection;
