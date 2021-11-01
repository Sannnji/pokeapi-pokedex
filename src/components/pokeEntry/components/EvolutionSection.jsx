import { Flex, Text, useBreakpointValue } from "@chakra-ui/react";
import BasicSection from "./BasicSection";

import { capitalize } from "../../../utils/capitalize";
import { replaceHyphon } from "../../../utils/replaceHyphen";

import { FaArrowRight } from "react-icons/fa";

export default function EvolutionSection({
  evolvesFrom,
  evolvesTo,
  currentPoke,
}) {
  const rotate = useBreakpointValue({
    base: "rotate(90deg)",
    lg: "rotate(0deg)",
  });

  // returns first evolution if currentPoke is a third evolution poke
  let firstEvol = evolvesFrom
    ? evolvesFrom.evolvesFrom
      ? evolvesFrom.evolvesFrom
      : ""
    : "";

  // returns third evolution if currentPoke is a first evolution poke
  let thirdEvol = evolvesTo
    ? evolvesTo.map((pokemon) => pokemon.evolvesTo)[0] != null
      ? evolvesTo
          .map((pokemon) => pokemon.evolvesTo)[0]
          .map((pokemon) => pokemon)
      : ""
    : "";

  const EvolutionDetails = ({ pokemon }) => {
    if (pokemon.evolutionRequirement && pokemon.evolutionRequirement) {
      return (
        <Flex flexDir="column" width="125px" align="center" fontSize="2xl">
          <Text fontSize="xs">
            {pokemon.evolutionTrigger
              ? capitalize(replaceHyphon(pokemon.evolutionTrigger))
              : null}
          </Text>
          <Text fontSize="xs">{pokemon.evolutionRequirement}</Text>

          <FaArrowRight style={{ transform: rotate }} />
        </Flex>
      );
    } else {
      return null;
    }
  };

  const PokeWithEvolDetails = ({ pokemon, props }) => {
    return (
      <Flex
        align="center"
        flexDir={{ base: "column", lg: "row" }}
        my={{ base: 4, lg: 0 }}
        {...props}
      >
        <EvolutionDetails pokemon={pokemon} />

        <BasicSection
          id={pokemon.id}
          name={pokemon.name}
          type={pokemon.type}
          image={pokemon.sprites.front_default}
        />
      </Flex>
    );
  };

  // if first Evol exists, currentPoke must be third evol
  if (firstEvol) {
    return (
      <>
        <Flex>
          {firstEvol ? <PokeWithEvolDetails pokemon={firstEvol} /> : ""}
        </Flex>

        {evolvesFrom ? <PokeWithEvolDetails pokemon={evolvesFrom} /> : ""}

        <PokeWithEvolDetails pokemon={currentPoke} />
      </>
    );
    // if third Evol exists, currentPoke must be first evol
  } else if (thirdEvol) {
    return (
      <>
        <PokeWithEvolDetails pokemon={currentPoke} />

        <Flex>
          {evolvesTo
            ? evolvesTo.map((pokemon, index) => {
                return <PokeWithEvolDetails key={index} pokemon={pokemon} />;
              })
            : ""}
        </Flex>

        <Flex flexDir={{ base: "row", lg: "column" }}>
          {thirdEvol
            ? thirdEvol.map((pokemon, index) => {
                return <PokeWithEvolDetails key={index} pokemon={pokemon} />;
              })
            : ""}
        </Flex>
      </>
    );
    // otherwise currentPoke must be second evol
  } else {
    return (
      <>
        {evolvesFrom ? <PokeWithEvolDetails pokemon={evolvesFrom} /> : ""}

        <PokeWithEvolDetails pokemon={currentPoke} />

        <Flex flexDir={{ base: "row", lg: "column" }}>
          {evolvesTo
            ? evolvesTo.map((pokemon, index) => {
                return <PokeWithEvolDetails key={index} pokemon={pokemon} />;
              })
            : ""}
        </Flex>
      </>
    );
  }
}
