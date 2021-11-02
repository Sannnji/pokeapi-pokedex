import { useState } from "react";
import { Select, useColorModeValue } from "@chakra-ui/react";
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
  const [typeColor, setColor] = useState();
  const textColor = useColorModeValue("black", "white");

  const { loading, error, data } = useQuery(GET_TYPES);

  if (loading) return <Loading />;
  if (error) return `${error}`;

  return (
    <Select
      ml={{ base: 0, lg: 4 }}
      bg={typeColor}
      borderColor="#CBD5E0"
      color={typeColor != null ? "white" : null}
      width={{ base: "100%", lg: "150px" }}
      _focus={{ outline: "none", boxShadow: "none" }}
      onChange={(event) => {
        switch (event.target.value) {
          case "No Type":
            setType(null);
            setColor(null);
            break;

          default:
            setType(event.target.value.toLowerCase());
            setColor(setTypeColor(event.target.value.toLowerCase()));
            break;
        }
      }}
    >
      <option style={{ color: textColor }}>No Type</option>
      {data.types.map((type, index) => {
        return (
          <option key={index} style={{ color: textColor }}>
            {capitalize(type.name)}
          </option>
        );
      })}
    </Select>
  );
}
