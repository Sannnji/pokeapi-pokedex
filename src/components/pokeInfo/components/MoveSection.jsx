import { Flex, Text, Box } from "@chakra-ui/react";

const MoveSection = (props) => {
  const moves = props.moves;

  const MoveContainer = (props) => {
    return (
      <Flex flexDir="row">
        <Text>{props.type}</Text>
        <Text mx={1}>{props.name}</Text>
        <Text>{props.power}</Text>
      </Flex>
    );
  };

  return (
    <Flex flexDir="column" align="center" maxH={350} overflow="hidden">
      <Text fontSize="xl" color="#646464" fontWeight="semibold" mb={2}>
        Moves
      </Text>
      <Box overflow="scroll">
        {moves.map((move) => {
          if (move) {
            return (
              <MoveContainer
                type={move.type}
                name={move.name}
                power={move.power}
              />
            );
          } else return null;
        })}
      </Box>
    </Flex>
  );
};

export default MoveSection;
