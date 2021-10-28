import { IconButton, useColorModeValue, useColorMode } from "@chakra-ui/react";

import { FaMoon, FaSun } from "react-icons/fa";

export default function ColorModeSwitcher(props) {
  const { toggleColorMode } = useColorMode();
  const IconSwitcher = useColorModeValue(FaMoon, FaSun);

  return <IconButton {...props} onClick={toggleColorMode} icon={<IconSwitcher />} />;
}
