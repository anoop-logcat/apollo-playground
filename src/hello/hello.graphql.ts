import { gql } from "apollo-server-express";

const HelloGraphql = gql`
  # Queries
  type Query {
    hello: String
  }
`;

export { HelloGraphql };
