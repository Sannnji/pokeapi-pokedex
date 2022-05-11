import { useState } from "react";
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
import LearnMethodFilter from "../../filters/LearnMethodFilter";

const MoveSection = ({ moves, version }) => {
  let filteredList = [];

  // Filter moves by default learn method level-up
  // eslint-disable-next-line array-callback-return
  moves.map((move) => {
    const moveByMethodFilter = move.learnMethods.map((prop) => {
      return prop.method === "level-up" ? true : false;
    });

    if (moveByMethodFilter[0]) {
      filteredList.push(move);
    }
  });

  const MoveContainer = (moves) => {
    const bgColor = useColorModeValue("gray.200", "white");

    return (
      <AccordionItem my={4} border={0} position="relative">
        <AccordionButton p={0} _focus={{ outline: "none", boxShadow: "none" }}>
          <Flex px={4} py={4} bg={bgColor} flexDir="row" width="100%">
            <TypeBanner typeName={moves.type} typeColor={moves.typeColor} />
            <Text
              ml={{ base: 2, md: 8 }}
              color="black"
              fontSize={{ base: "small", md: "medium" }}
              alignSelf="center"
            >
              {moves.name}
            </Text>
          </Flex>
          <AccordionIcon color="black" position="absolute" right={4} />
        </AccordionButton>

        <AccordionPanel
          py={4}
          px={4}
          display="flex"
          bg="white"
          color="black"
          fontSize={{ base: "small", md: "medium" }}
        >
          <Flex flexDir="column" width="50vw">
            <Text>
              Lvl req:{" "}
              {moves.learnMethod[0].level_learned_at
                ? moves.learnMethod[0].level_learned_at
                : capitalize(moves.learnMethod[0].method)}
            </Text>
            <Text>Power: {moves.power ? moves.power : "-"}</Text>

            <Text>Accuracy: {moves.accuracy ? moves.accuracy : "-"}</Text>
          </Flex>

          <Flex flexDir="column" width="50vw">
            <Text>PP: {moves.pp}</Text>
            <Flex>
              <Text>Category: </Text>
              <Image
                src={
                  process.env.PUBLIC_URL +
                  `/images/moveClass/${moves.damage_class}.png`
                }
                width="24px"
              />
            </Flex>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    );
  };

  const [moveList, updateMoveList] = useState(filteredList);
  return (
    <Flex maxH="80vh" flexDir="column" align="center" overflow="hidden">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="semibold" mt={4} mb={2}>
          Moves
        </Text>

        <LearnMethodFilter
          version={version}
          moveList={moves}
          updateMoveList={updateMoveList}
        />
      </Flex>

      <Box width="100%" px={{ base: 2, lg: 4 }} overflow="auto">
        <Accordion allowToggle>
          {moveList.length > 0 ? (
            moveList.map((move, index) => {
              return (
                <MoveContainer
                  key={index}
                  type={move.type}
                  typeColor={setTypeColor(move.type)}
                  name={capitalize(replaceHyphon(move.name))}
                  power={move.power}
                  accuracy={move.accuracy}
                  damage_class={move.damage_class}
                  pp={move.pp}
                  learnMethod={move.learnMethods}
                />
              );
            })
          ) : (
            <Text textAlign={"center"}>No Moves Available in {version}</Text>
          )}
        </Accordion>
      </Box>
    </Flex>
  );
};

export default MoveSection;
