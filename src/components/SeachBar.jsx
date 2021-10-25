import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement
        ml={2}
        color="white"
        children={<i className="fas fa-search" />}
      />
      <Input />
    </InputGroup>
  );
};

export default SearchBar;
