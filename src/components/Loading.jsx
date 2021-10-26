import { Spinner, Center } from "@chakra-ui/react";

export default function Loading(props) {
  return (
    <Center position="absolute" left="47.6%" top="47.6%">
      <Spinner size="xl" thickness="6px" color="teal" {...props} />
    </Center>
  );
}
