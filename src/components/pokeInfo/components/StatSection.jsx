import { Flex, Text, Box, Grid } from "@chakra-ui/react";

const StatSection = (props) => {
  const stats = props.stats;

  const StatName = (props) => {
    return <Text fontWeight="semibold">{props.name}</Text>;
  };

  const StatBar = (props) => {
    return (
      <Box bg="white" h={2} width="160px" align="left" ml={4} my={2}>
        <Box bg="#95FFBC" width={`${(props.stat / 255) * 100}%`} h={2} />
      </Box>
    );
  };
  return (
    <Flex flexDir="column" align="center">
      <Text fontSize="xl" color="#646464" fontWeight="semibold" mb={2}>
        Base Stats
      </Text>
      <Flex
        flexDir="row"
        bg="#646464"
        color="white"
        borderRadius="lg"
        p={4}
        align="center"
      >
        <Flex
          flexDir="column"
          align="center"
          h="100%"
          justifyContent="space-between"
        >
          <StatName name="HP" />
          <StatName name="ATK" />
          <StatName name="DEF" />
          <StatName name="SPATK" />
          <StatName name="SPDEF" />
          <StatName name="SPD" />
        </Flex>
        <Flex flexDir="column" align="center">
          <StatBar stat={stats.hp} />
          <StatBar stat={stats.attack} />
          <StatBar stat={stats.defense} />
          <StatBar stat={stats.special_attack} />
          <StatBar stat={stats.special_defense} />
          <StatBar stat={stats.speed} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default StatSection;
