import { Flex, Text, Heading } from "@chakra-ui/react";

const AbilitySection = (props) => {
  return (
    <Flex flexDir="column">
      <Heading>Abilities</Heading>
      <Flex flexDir="row">
        <Text>No. 00{props.id}</Text>
        <Text>{props.name}</Text>
      </Flex>
    </Flex>
  );
};

export default AbilitySection;
