import { Button } from "@chakra-ui/react";

const BackButton = (props) => {
  return (
    <Button mr={2} {...props}>
      <i class="fas fa-caret-left"></i>
    </Button>
  );
};

export default BackButton;
