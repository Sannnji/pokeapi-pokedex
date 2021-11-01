import { Text } from "@chakra-ui/layout";

export default function Copyright(props) {
  return (
    <Text fontSize="sm" {...props}>
      &copy; {new Date().getFullYear()} NotReal, Inc. All rights reserved.
    </Text>
  );
}
