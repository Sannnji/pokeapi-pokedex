import { Flex, Text } from "@chakra-ui/react";

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
      <Flex flexDir="row" ml={1}>
        <IdWithZeros />
        <Text ml={2}>{capitalize(props.name)}</Text>
      </Flex>
      <Flex flexDir="row" my={2}>
        {props.type.map((type) => {
          return (
            <TypeBanner
              typeName={type.name}
              typeColor={setTypeColor(type.name)}
              mx={1}
            />
          );
        })}
      </Flex>
    </Flex>
  );
};

export default BasicSection;
