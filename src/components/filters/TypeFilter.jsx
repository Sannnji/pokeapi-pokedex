import { Select } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";

import Loading from "../Loading";

const GET_TYPES = gql`
  query types {
    types {
      id
      name
    }
  }
`;

export default function TypeFilter() {
  const { loading, error, data } = useQuery(GET_TYPES);

  if (loading) return <Loading />;
  if (error) return `${error}`;

  return (
    <Select width="150px" ml={4}>
      {data.types.map((type) => {
        return <option>{type.name}</option>;
      })}
    </Select>
  );
}
