import { Flex, Image, Text } from "@chakra-ui/react";

import { capitalize } from "../../../utils/capitalize";

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
    <Flex flexDir="column" minW="250px">
      <Flex flexDir="row">
        <IdWithZeros />
        <Text  ml={2}>{capitalize(props.name)}</Text>
      </Flex>
      <Flex flexDir="row">
        {props.type.map((element) => {
          return (
            <Flex align="center" textAlign="center">
              <Image
                src={
                  process.env.PUBLIC_URL +
                  `/images/typeIcons/${element.name}.png`
                }
                width={"32px"}
              />
              <Text>{element.name}</Text>
            </Flex>
          );
        })}
      </Flex>
    </Flex>
  );
};

export default BasicSection;
