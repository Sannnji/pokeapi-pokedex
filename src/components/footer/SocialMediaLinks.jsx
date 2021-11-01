import { ButtonGroup, IconButton } from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialMediaLinks(props) {
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/jamesji98/"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="20px" />}
      />
      <IconButton
        as="a"
        href="https://github.com/Sannnji"
        aria-label="GitHub"
        icon={<FaGithub fontSize="20px" />}
      />
    </ButtonGroup>
  );
}
