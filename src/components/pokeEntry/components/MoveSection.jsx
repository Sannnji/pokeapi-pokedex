import { Flex, Text, Box, Image, useColorModeValue } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import { replaceHyphon } from "../../../utils/replaceHyphen";
import { capitalize } from "../../../utils/capitalize";
import { setTypeColor } from "../../../utils/setTypeColor";
import TypeBanner from "../../TypeBanner";

const MoveSection = (props) => {
  const moves = props.moves;

  const MoveContainer = (props) => {
    const bgColor = useColorModeValue("gray.200", "white");

    return (
      <AccordionItem my={4} border={0} position="relative">
        <AccordionButton p={0} _focus={{ outline: "none", boxShadow: "none" }}>
          <Flex
            px={4}
            py={4}
            bg={bgColor}
            flexDir="row"
            width="100%"
          >
            <TypeBanner typeName={props.type} typeColor={props.typeColor} />
            <Text ml={8} color="black">
              {props.name}
            </Text>
          </Flex>
          <AccordionIcon color="black" position="absolute" right={4} />
        </AccordionButton>

        <AccordionPanel py={4} px={4} display="flex" bg="white" color="black">
          <Flex flexDir="column" width="50vw">
            <Text>Power: {props.power ? props.power : "-"}</Text>

            <Text>Accuracy: {props.accuracy ? props.accuracy : "-"}</Text>
          </Flex>

          <Flex flexDir="column" width="50vw">
            <Text>PP: {props.pp}</Text>

            <Image
              src={
                process.env.PUBLIC_URL +
                `/images/moveClass/${props.damage_class}.png`
              }
              width="24px"
            />
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    );
  };

  return (
    <Flex maxH="80vh" flexDir="column" align="center" overflow="hidden">
      <Text fontSize="xl" fontWeight="semibold" mt={4} mb={2}>
        Moves
      </Text>

      <Box width="100%" px={{ base: 2, lg: 4 }} overflow="auto">
        <Accordion allowToggle>
          {moves.map((move) => {
            if (move) {
              return (
                <MoveContainer
                  type={move.type}
                  typeColor={setTypeColor(move.type)}
                  name={capitalize(replaceHyphon(move.name))}
                  power={move.power}
                  accuracy={move.accuracy}
                  damage_class={move.damage_class}
                  pp={move.pp}
                />
              );
            } else return null;
          })}
        </Accordion>
      </Box>
    </Flex>
  );
};

export default MoveSection;
