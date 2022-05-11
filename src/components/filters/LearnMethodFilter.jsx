import { gql, useQuery } from "@apollo/client";
import { Select } from "@chakra-ui/react";

import Loading from "../Loading";

const GET_LEARN_METHODS_BY_GAME = gql`
  query learnMethodsByGame($game: String!) {
    learnMethodsByGame(game: $game)
  }
`;

export default function LearnMethodFilter({
  version,
  updateMoveList,
  moveList,
}) {
  const { loading, error, data } = useQuery(GET_LEARN_METHODS_BY_GAME, {
    variables: {
      game: version,
    },
  });

  if (loading) return <Loading />;
  if (error) return <p>error: {error}</p>;

  const handleChange = (value) => {
    let filteredList = [];

    // eslint-disable-next-line array-callback-return
    moveList.map((move) => {
      const moveByMethodFilter = move.learnMethods.filter((prop) => {
        return prop.method === value ? true : false;
      });
      
      if (moveByMethodFilter[0]) {
        filteredList.push(move);
      }
    });

    updateMoveList(filteredList);
  };

  return (
    <Select
      size="sm"
      ml={4}
      onChange={(event) => {
        handleChange(event.target.value);
      }}
    >
      {data.learnMethodsByGame.map((method, index) => {
        return <option key={index}>{method}</option>;
      })}
    </Select>
  );
}
