import { useSearchParams } from "react-router-dom";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";

const SearchBar = ({ setSearchValue }) => {
  let [searchParams, setSearchParams] = useSearchParams();

  return (
    <InputGroup borderColor="#CBD5E0">
      <InputLeftElement ml={2} children={<i className="fas fa-search" />} />
      <Input
        value={searchParams.get("filter") || ""}
        onChange={(event) => {
          let filter = event.target.value;
          if (filter) {
            setSearchParams({ filter });
          } else {
            setSearchParams({});
          }
        }}
      />
    </InputGroup>
  );
};

export default SearchBar;
