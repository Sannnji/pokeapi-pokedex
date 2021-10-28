import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";

const SearchBar = ({ setSearchValue }) => {
  return (
    <InputGroup borderColor="#CBD5E0">
      <InputLeftElement
        ml={2}
        color="white"
        children={<i className="fas fa-search" />}
      />
      <Input onChange={(event) => setSearchValue(event.target.value)} />
    </InputGroup>
  );
};

export default SearchBar;
