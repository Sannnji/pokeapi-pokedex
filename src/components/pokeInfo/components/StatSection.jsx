import { Flex,  Text } from "@chakra-ui/react";

const StatSection = (props) => {
  const stats = props.stats;

  return (
    <Flex flexDir="column">
      <Text>Base Stats</Text>
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
