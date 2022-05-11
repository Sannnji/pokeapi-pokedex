import { Flex, Image, Text } from "@chakra-ui/react";

import { capitalize } from "../utils/capitalize";

const TypeBanner = ({ typeName, typeColor }) => {
  return (
    <Flex
      pl={2}
      py={0.5}
      bg={typeColor}
      align="center"
      boxShadow="lg"
      borderRadius="full"
      minW="100px"
      maxW="100px"
      mx={1}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/typeIcons/${typeName}.png`}
        width={"24px"}
      />

      <Text
        textAlign="center"
        borderTopRightRadius="full"
        borderBottomRightRadius="full"
        color="white"
      >
        {capitalize(typeName)}
      </Text>
    </Flex>
  );
};

export default TypeBanner;
