import { Flex, Image, Text } from "@chakra-ui/react";

import { capitalize } from "../utils/capitalize";

const TypeBanner = (props) => {
  return (
    <Flex
      pl={2}
      py={0.5}
      bg={props.typeColor}
      align="center"
      boxShadow="lg"
      borderRadius="full"
      minW="100px"
      maxW="100px"
      {...props}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/typeIcons/${props.typeName}.png`}
        width={"24px"}
      />

      <Text
        textAlign="center"
        borderTopRightRadius="full"
        borderBottomRightRadius="full"
        color="white"
      >
        {capitalize(props.typeName)}
      </Text>
    </Flex>
  );
};

export default TypeBanner;
