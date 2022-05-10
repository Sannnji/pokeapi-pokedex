import { Flex, Text, Image } from "@chakra-ui/react";

import { capitalize } from "../../../utils/capitalize";
import { setTypeColor } from "../../../utils/setTypeColor";
import TypeBanner from "../../TypeBanner";

const BasicSection = (props) => {
  const id = props.id.toString();

  const IdWithZeros = () => {
    switch (id.length) {
      case 1:
        return <Text>No. 00{id}</Text>;
      case 2:
        return <Text>No. 0{id}</Text>;
      default:
        return <Text>{`No. ${id}`}</Text>;
    }
  };

  return (
    <Flex mt={4} flexDir="column" align="center">
      <Image src={props.image} />
      <Flex flexDir="row" ml={1}>
        <IdWithZeros />
        <Text ml={2}>{capitalize(props.name)}</Text>
      </Flex>

      <Flex flexDir="row" my={2}>
        {props.type.map((type, index) => {
          return (
            <TypeBanner
              key={index}
              typeName={type.name}
              typeColor={setTypeColor(type.name)}
              mx={1}
            />
          );
        })}
      </Flex>

      {props.height ? (
        <Flex flexDir="column" textAlign="center" my={8}>
          <Text>Height: {props.height}m</Text>
          <Text>Genus: {props.genus}</Text>
          <Text
            p={4}
            mt={2}
            bg="#E2E8F0"
            color="black"
            borderRadius="lg"
            maxW="380px"
          >
            {props.flavorText}
          </Text>
        </Flex>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default BasicSection;
