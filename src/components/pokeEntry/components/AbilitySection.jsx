import { Flex, Text, Box } from "@chakra-ui/react";
import { capitalize } from "../../../utils/capitalize";
import { replaceHyphon } from "../../../utils/replaceHyphen";

const AbilitySection = ({ abilities }) => {
  return (
    <Flex flexDir="column" align="center" mt={4}>
      <Text fontSize="xl" fontWeight="semibold" mb={2}>
        Abilities
      </Text>

      {abilities.map((ability) => {
        return (
          <Box
            my={3}
            width="100%"
            bg="gray.200"
            color="#646464"
            borderRadius="lg"
            align="center"
            boxShadow="lg"
          >
            <Box
              py={1}
              bg="white"
              fontSize="lg"
              fontWeight="semibold"
              borderTopLeftRadius="lg"
              borderTopRightRadius="lg"
              boxShadow="lg"
            >
              <Text>{capitalize(replaceHyphon(ability.name))}</Text>
            </Box>
            <Text p={8}>{ability.effect}</Text>
          </Box>
        );
      })}
    </Flex>
  );
};

export default AbilitySection;
