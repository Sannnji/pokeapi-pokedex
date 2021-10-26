import { useState } from "react";
import { Select } from "@chakra-ui/react";
import { useQuery, gql } from "@apollo/client";

import Loading from "../Loading";
import { capitalize } from "../../utils/capitalize";
import { setTypeColor } from "../../utils/setTypeColor";

const GET_TYPES = gql`
  query types {
    types {
      id
      name
    }
  }
`;

export default function TypeFilter({ setType }) {
  const [typeColor, setColor] = useState(null);
  const { loading, error, data } = useQuery(GET_TYPES);

  if (loading) return <Loading />;
  if (error) return `${error}`;

  return (
    <Select width="150px" ml={4} bg={typeColor}>
      <option onClick={() => setType(null)}>None</option>
      {data.types.map((type) => {
        return (
          <option
            onClick={() => {
              setType(type.name);
              setColor(setTypeColor(type.name));
            }}
          >
            {capitalize(type.name)}
          </option>
        );
      })}
    </Select>
  );
}
