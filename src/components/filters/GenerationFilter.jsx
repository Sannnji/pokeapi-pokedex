import { Select } from "@chakra-ui/react";
import { gql, useQuery } from "@apollo/client";

import Loading from "../Loading";

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
    <Select width="150px">
      {data.generations.map((gen) => {
        return <option onClick={() => setGen(gen.id)}>{gen.name}</option>;
      })}
    </Select>
  );
}

export default GenerationFilter;
