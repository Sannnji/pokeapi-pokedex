import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";

const SearchBar = () => {
  return (
    <InputGroup>
      <InputLeftElement ml={2} children={<i className="fas fa-search" />} />
      <Input mx={2} />
    </InputGroup>
  );
};

export default SearchBar;