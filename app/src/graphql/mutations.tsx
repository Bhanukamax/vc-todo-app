import { gql } from "apollo-boost";

export const ADD_TODO = gql`
  mutation addTodo($input: String!) {
    todo {
      add(description: $input) {
        id
        description
        status
      }
    }
  }
`;

export const TOGGLE_COMPLETE = gql`
  mutation toggleComplete($id: ID) {
    todo(id: $id) {
      toggleCompleted {
        id
        status
        description
      }
    }
  }
`;

export const CLEAR_COMPLETED = gql`
  mutation clearCompleted {
    todos {
      clearCompleted
    }
  }
`;

export const TOGGLE_ALL = gql`
  mutation toggleAll($status: TodoStatusType!) {
    todos {
      toggleAll(status: $status)
    }
  }
`;
