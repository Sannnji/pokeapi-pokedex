import { Flex, Text, Box } from "@chakra-ui/react";
import { capitalize } from "../../../utils/capitalize";
import { replaceHyphon } from "../../../utils/replaceHyphen";

const AbilitySection = ({ abilities }) => {
  return (
    <Flex flexDir="column" align="center" mt={4} minW="260px">
      <Text fontSize="xl" fontWeight="semibold" mb={2}>
        Abilities
      </Text>

      {abilities.map((ability) => {
        return (
          <Box
            my={2}
            bg="white"
            color="#646464"
            borderRadius="lg"
            align="center"
            boxShadow="lg"
          >
            <Box fontSize="lg" fontWeight="semibold" boxShadow="lg" py={1} >
              <Text>
                {capitalize(replaceHyphon(ability.name))}
              </Text>
            </Box>
            <Text my={8}>{ability.effect}</Text>
          </Box>
        );
      })}
    </Flex>
  );
};

export default AbilitySection;
