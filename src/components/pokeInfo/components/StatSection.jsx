import { Flex, Heading, Text } from "@chakra-ui/react";

const StatSection = (props) => {
  const stats = props.stats;

  return (
    <Flex flexDir="column">
      <Heading>Base Stats</Heading>
      <Text>{stats.hp}</Text>
      <Text>{stats.attack}</Text>
      <Text>{stats.defense}</Text>
      <Text>{stats.special_attack}</Text>
      <Text>{stats.special_defense}</Text>
      <Text>{stats.speed}</Text>
    </Flex>
  );
};

export default StatSection;
