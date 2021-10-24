import { Select } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";

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

  if (loading) return "...loading";
  if (error) return `${error}`;

  return (
    <Select variant="unstyled">
      {data.types.map((type) => {
        return <option>{type.name}</option>;
      })}
    </Select>
  );
}
