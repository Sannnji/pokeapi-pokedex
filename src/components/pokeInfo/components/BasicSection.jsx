import { Flex, Text } from "@chakra-ui/react";

const BasicSection = (props) => {
  return (
    <Flex flexDir="column">
      <Flex flexDir="row">
        <Text>No. 00{props.id}</Text>
        <Text>{props.name}</Text>
      </Flex>
      <Flex flexDir="row">
        {props.type.map((element) => {
          return <Text>{element.name}</Text>;
        })}
        <Text>{console.log(props.type)}</Text>
      </Flex>
    </Flex>
  );
};

export default BasicSection;
