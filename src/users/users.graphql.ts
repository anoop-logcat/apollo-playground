import { gql } from "apollo-server-express";

const UsersGraphql = gql`
  #Definitions
  type User {
    id: String
    display_name: String
    email: String
  }
  input UserInput {
    display_name: String
    email: String
  }

  #Queries
  type Query {
    getAllUsers: [User]
    getOneUser(id: String!): User
  }

  # Mutations
  type Mutation {
    insertOneUser(object: UserInput): User
  }
`;

export { UsersGraphql };
