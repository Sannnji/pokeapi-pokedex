import { Flex, VStack } from "@chakra-ui/react";
import BasicSection from "./BasicSection";

export default function EvolutionSection({
  evolvesFrom,
  evolvesTo,
  currentPoke,
}) {
  // returns first evolution if currentPoke is a third evolution poke
  let firstEvol = evolvesFrom
    ? evolvesFrom.evolvesFrom
      ? evolvesFrom.evolvesFrom.name
      : ""
    : "";

  // returns third evolution if currentPoke is a first evolution poke
  let thirdEvol = evolvesTo
    ? evolvesTo.map((pokemon) => pokemon.evolvesTo)[0] != null
      ? evolvesTo
          .map((pokemon) => pokemon.evolvesTo)[0]
          .map((pokemon) => pokemon.name)
      : ""
    : "";

  // if first Evol exists, currentPoke must be third evol
  if (firstEvol) {
    return (
      <Flex>
        <Flex>
          {evolvesFrom ? (
            evolvesFrom.evolvesFrom ? (
              <BasicSection
                id={evolvesFrom.evolvesFrom.id}
                name={evolvesFrom.evolvesFrom.name}
                type={evolvesFrom.evolvesFrom.type}
                image={evolvesFrom.evolvesFrom.sprites.front_default}
              />
            ) : (
              ""
            )
          ) : (
            ""
          )}
        </Flex>

        <Flex mx={2}>
          {evolvesFrom ? (
            <BasicSection
              id={evolvesFrom.id}
              name={evolvesFrom.name}
              type={evolvesFrom.type}
              image={evolvesFrom.sprites.front_default}
            />
          ) : (
            ""
          )}
        </Flex>

        <Flex>
          {
            <BasicSection
              id={currentPoke.id}
              name={currentPoke.name}
              type={currentPoke.type}
              image={currentPoke.sprites.front_default}
            />
          }
        </Flex>
      </Flex>
    );
    // if third Evol exists, currentPoke must be first evol
  } else if (thirdEvol) {
    return (
      <Flex align="center">
        <Flex>
          <BasicSection
            id={currentPoke.id}
            name={currentPoke.name}
            type={currentPoke.type}
            image={currentPoke.sprites.front_default}
          />
        </Flex>

        <VStack>
          {evolvesTo
            ? evolvesTo.map((pokemon, index) => (
                <BasicSection
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.type}
                  image={pokemon.sprites.front_default}
                />
              ))
            : ""}
        </VStack>

        <VStack>
          {evolvesTo
            ? evolvesTo.map((pokemon) => pokemon.evolvesTo)[0] != null
              ? evolvesTo
                  .map((pokemon) => pokemon.evolvesTo)[0]
                  .map((pokemon, index) => (
                    <BasicSection
                      key={index}
                      id={pokemon.id}
                      name={pokemon.name}
                      type={pokemon.type}
                      image={pokemon.sprites.front_default}
                    />
                  ))
              : ""
            : ""}
        </VStack>
      </Flex>
    );
    // otherwise currentPoke must be second evol
  } else {
    return (
      <Flex align="center">
        <Flex>
          {evolvesFrom ? (
            <BasicSection
              id={evolvesFrom.id}
              name={evolvesFrom.name}
              type={evolvesFrom.type}
              image={evolvesFrom.sprites.front_default}
            />
          ) : (
            ""
          )}
        </Flex>
        <Flex mx={2}>
          <BasicSection
            id={currentPoke.id}
            name={currentPoke.name}
            type={currentPoke.type}
            image={currentPoke.sprites.front_default}
          />
        </Flex>
        <VStack>
          {evolvesTo
            ? evolvesTo.map((pokemon, index) => (
                <BasicSection
                  key={index}
                  id={pokemon.id}
                  name={pokemon.name}
                  type={pokemon.type}
                  image={pokemon.sprites.front_default}
                />
              ))
            : ""}
        </VStack>
      </Flex>
    );
  }
}
