import { gql, useQuery } from "@apollo/client";

function App() {
  const GET_HELLO = gql`
    query hello {
      hello
    }
  `;

  const { loading, error, data } = useQuery(GET_HELLO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error: {error}</p>;
  return <p>{data.hello}</p>;
}

export default App;
