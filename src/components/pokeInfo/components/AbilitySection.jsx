import { Flex, Text, Heading } from "@chakra-ui/react";

const AbilitySection = (props) => {
  const abilities = props.abilities;
  return (
    <Flex flexDir="column">
      <Heading>Abilities</Heading>
      <Flex flexDir="row">
        {abilities.map((ability) => {
          return <Text>{ability.name}</Text>;
        })}
      </Flex>
    </Flex>
  );
};

export default AbilitySection;
