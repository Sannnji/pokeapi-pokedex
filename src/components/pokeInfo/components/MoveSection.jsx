import { Flex, Heading, Text } from "@chakra-ui/react";

const MoveSection = (props) => {
  const moves = props.moves;

  return (
    <Flex flexDir="column">
      <Heading>Moves By Level</Heading>
      {moves.map((move) => {
        if (move) {
          return (
            <Flex flexDiir="row">
              <Text>{move.name}</Text>
              <Text>{move.type}</Text>
              <Text>{move.power}</Text>
            </Flex>
          );
        } else return;
      })}
    </Flex>
  );
};

export default MoveSection;
