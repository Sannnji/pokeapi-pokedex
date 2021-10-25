import { Spinner, Center } from "@chakra-ui/react";

export default function Loading(props) {
  return (
    <Center position="absolute" left="48%" top="48%">
      <Spinner size="xl" thickness="4px" color="teal" {...props} />
    </Center>
  );
}
