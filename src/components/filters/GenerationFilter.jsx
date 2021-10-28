import { Select } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";

import Loading from "../Loading";
import { capitalizeGeneration } from "../../utils/capitalize";
import { replaceHyphon } from "../../utils/replaceHyphen";

const GET_GENERATIONS = gql`
  query generations {
    generations {
      id
      name
    }
  }
`;

function GenerationFilter({ setGen }) {
  const { loading, error, data } = useQuery(GET_GENERATIONS);

  if (loading) return <Loading />;
  if (error) return <p>error: {error}</p>;

  return (
    <Select
      ml={{ base: 0, lg: 4 }}
      mr={{ base: 4, lg: 0 }}
      borderColor="#CBD5E0"
      width={{ base: "100%", lg: "150px" }}
      _focus={{ outline: "none", boxShadow: "none" }}
    >
      {data.generations.map((gen) => {
        return (
          <option onClick={() => setGen(gen.id)}>
            {capitalizeGeneration(replaceHyphon(gen.name))}
          </option>
        );
      })}
    </Select>
  );
}

export default GenerationFilter;
