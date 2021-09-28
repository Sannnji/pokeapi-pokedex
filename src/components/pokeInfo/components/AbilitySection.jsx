import { Flex, Text, SimpleGrid } from "@chakra-ui/react";
import { capitalize } from "../../../utils/capitalize";

const AbilitySection = (props) => {
  const abilities = props.abilities;
  return (
    <Flex flexDir="column" align="center" mt={4} minW="260px">
      <Text fontSize="xl" fontWeight="semibold" mb={2}>
        Abilities
      </Text>
      <SimpleGrid
        columns={2}
        spacing={2}
        align="center"
        justify="center"
      >
        {abilities.map((ability) => {
          return (
            <Text
              color="white"
              bg="#646464"
              fontSize="md"
              boxShadow="lg"
              borderRadius="full"
              px={4}
              mx={2}
            >
              {capitalize(ability.name)}
            </Text>
          );
        })}
      </SimpleGrid>
    </Flex>
  );
};

export default AbilitySection;
