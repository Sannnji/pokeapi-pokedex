import { Flex, Image, Text } from "@chakra-ui/react";

const TypeBanner = (props) => {
  return (
    <Flex
      pl={2}
      py={0.5}
      bg={props.typeColor}
      align="center"
      textAlign="center"
      boxShadow="lg"
      borderRadius="full"
      {...props}
    >
      <Image
        src={process.env.PUBLIC_URL + `/images/typeIcons/${props.typeName}.png`}
        width={"24px"}
      />
      <Text
        pl={1}
        pr={4}
        borderTopRightRadius="full"
        borderBottomRightRadius="full"
        color="white"
      >
        {props.typeName}
      </Text>
    </Flex>
  );
};

export default TypeBanner;
