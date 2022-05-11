import { Flex, Text, Box } from "@chakra-ui/react";

const StatSection = (props) => {
  const stats = props.stats;

  const StatRow = (props) => {
    return (
      <Flex align="center" maxW={{base: "240px", md: "345px"}}>
        <Text fontWeight="semibold" width="25vw">
          {props.name}
        </Text>

        <Box bg="white" width="75vw" align="left" ml={4} my={2}>
          <Box bg="#89d6a4" width={`${(props.stat / 255) * 100}%`}>
            <Text fontSize="x-small" fontWeight="bold" pl={1} pb={.5}>
              {props.stat}
            </Text>
          </Box>
        </Box>
      </Flex>
    );
  };

  return (

      <Flex
        flexDir="row"
        bg="#646464"
        color="white"
        borderRadius="lg"
        p={4}
        align="center"
      >
        <Flex flexDir="column" align="center">
          <StatRow name={"HP"} stat={stats.hp} />
          <StatRow name={"ATK"} stat={stats.attack} />
          <StatRow name={"DEF"} stat={stats.defense} />
          <StatRow name={"SPATK"} stat={stats.special_attack} />
          <StatRow name={"SPDEF"} stat={stats.special_defense} />
          <StatRow name={"SPD"} stat={stats.speed} />
        </Flex>
      </Flex>

  );
};

export default StatSection;
