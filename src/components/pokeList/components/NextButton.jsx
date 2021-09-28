import { Button } from "@chakra-ui/react";

const NextButton = (props) => {
  return (
    <Button ml={2} {...props}>
      <i class="fas fa-caret-right"></i>
    </Button>
  );
};

export default NextButton;
