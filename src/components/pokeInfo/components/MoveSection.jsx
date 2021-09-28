import { Flex, Text, Box } from "@chakra-ui/react";

import { replaceHyphon } from "../../../utils/replaceHyphen";
import { capitalize } from "../../../utils/capitalize";
import { setTypeColor } from "../../../utils/setTypeColor";
import TypeBanner from "../../TypeBanner";

const MoveSection = (props) => {
  const moves = props.moves;

  const MoveContainer = (props) => {
    return (
      <Flex
        flexDir="row"
        align="center"
        px={4}
        py={2}
        my={2}
        mx="auto"
        borderRadius="lg"
        bg="white"
      >
        <TypeBanner typeName={props.type} typeColor={props.typeColor} my={2} />
        <Text color="#646464" mx={1}>{props.name}</Text>
        <Text>{props.power}</Text>
      </Flex>
    );
  };

  return (
    <Flex flexDir="column" align="center" maxH={350} overflow="hidden">
      <Text fontSize="xl" color="white" fontWeight="semibold" mb={2}>
        Moves
      </Text>
      <Box overflow="scroll">
        {moves.map((move) => {
          if (move) {
            return (
              <MoveContainer
                type={move.type}
                typeColor={setTypeColor(move.type)}
                name={capitalize(replaceHyphon(move.name))}
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
