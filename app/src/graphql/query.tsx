import { gql } from "apollo-boost";

export const GET_TODOS = gql`
  {
    todo {
      id
      status
      description
    }
  }
`;

export const GET_TODOS_NEW = gql`
  query getTodos($stauses: [TodoStatusType]) {
    todo(statuses: $stauses) {
      id
      description
      status
    }
  }
`;