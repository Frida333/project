import gql from "graphql-tag";

const COMMENTS_QUERY = gql`
  query Forums {
    forums {
      id
      name
      body
      email
      category
    }
  }
`;

export default COMMENTS_QUERY;
