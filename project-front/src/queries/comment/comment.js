import gql from "graphql-tag";

const COMMENT_QUERY = gql`
  query Forums($id: ID!) {
    forum(id: $id) {
      id
      name
      body

  }
`;

export default COMMENT_QUERY;
