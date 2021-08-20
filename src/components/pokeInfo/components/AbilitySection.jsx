import { Flex, Text } from "@chakra-ui/react";
import { capitalize } from "../../../utils/capitalize";

const AbilitySection = (props) => {
  const abilities = props.abilities;
  return (
    <Flex flexDir="column" align="center" mt={4}>
      <Text fontSize="xl" color="#646464" fontWeight="semibold" >Abilities</Text>
      <Flex flexDir="row">
        {abilities.map((ability) => {
          return (
            <Text color="white" bg="#646464" fontSize="xl" boxShadow="lg" borderRadius="full" px={4} mx={2}>
              {capitalize(ability.name)}
            </Text>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default AbilitySection;
