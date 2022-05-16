import { useNavigate, useParams } from "react-router-dom";
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

export default function TypeFilter() {
  const textColor = useColorModeValue("black", "white");
  let navigate = useNavigate();
  let params = useParams();

  const { loading, error, data } = useQuery(GET_TYPES);

  if (loading) return <Loading />;
  if (error) return `${error}`;

  return (
    <Select
      value={
        params.pokeType !== undefined ? capitalize(params.pokeType) : "No Type"
      }
      ml={{ base: 0, lg: 4 }}
      bg={setTypeColor(params.pokeType)}
      borderColor="#CBD5E0"
      color={
        params.pokeType === "notype" ||
        (params.pokeType === undefined && textColor === "black")
          ? "black"
          : "white"
      }
      width={{ base: "100%", lg: "150px" }}
      _focus={{ outline: "none", boxShadow: "none" }}
      onChange={(event) => {
        let type = event.target.value;
        let genParam = params.genId;
        switch (type) {
          case "No Type":
            navigate(`${genParam === undefined ? 1 : genParam}/notype`);
            break;

          default:
            navigate(
              `${genParam === undefined ? 1 : genParam}/${
                type === null ? "notype" : type.toLowerCase()
              }`
            );
            break;
        }
      }}
    >
      <option>No Type</option>
      {data.types.map((type, index) => {
        return <option key={index}>{capitalize(type.name)}</option>;
      })}
    </Select>
  );
}
