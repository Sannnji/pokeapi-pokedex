import { Spinner, Center } from "@chakra-ui/react";

export default function Loading(props) {
  return (
    <Center>
      <Spinner position="absolute" size="xl" thickness="4px"  {...props} />
    </Center>
  );
}
