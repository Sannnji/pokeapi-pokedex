import { useQuery, gql } from "@apollo/client";
import { Select } from "@chakra-ui/react";

import Loading from "../Loading";
import { replaceHyphon } from "../../utils/replaceHyphen";
import { capitalize } from "../../utils/capitalize";

const GET_VERSION_GROUPS = gql`
  query versionGroups {
    versionGroups {
      id
      name
    }
  }
`;

export default function VersionFilter({ version, setVersion }) {
  const { loading, error, data } = useQuery(GET_VERSION_GROUPS);

  if (loading) return <Loading />;
  if (error) return <p>error: {error}</p>;

  return (
    <Select
      value={version}
      onChange={(event) => {
        setVersion(event.target.value.toLowerCase().replaceAll(" ", "-"));
      }}
    >
      {data.versionGroups.map((version, index) => {
        return <option key={index}>{capitalize(replaceHyphon(version.name))}</option>;
      })}
    </Select>
  );
}
