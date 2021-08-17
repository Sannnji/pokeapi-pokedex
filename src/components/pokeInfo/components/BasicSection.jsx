import { Flex, Text } from "@chakra-ui/react";

const BasicSection = (props) => {
  return (
    <Flex flexDir="column">
      <Flex flexDir="row">
        <Text>No. 00{props.id}</Text>
        <Text>{props.name}</Text>
      </Flex>
      <Flex flexDir="row">
        <Text></Text>
      </Flex>
    </Flex>
  );
};

export default BasicSection;
