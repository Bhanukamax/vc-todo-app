import React from "react";
import { Button } from "../components/Button";
import { useMutation } from "@apollo/react-hooks";
import { CLEAR_COMPLETED } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/query";

interface IAllTodos {
  todo: any;
}

export const ClearCompleted: React.FC = () => {
  const [clearCompleted] = useMutation(CLEAR_COMPLETED, {
    update(cache) {
      const todo = cache.readQuery<IAllTodos>({ query: GET_TODOS })!.todo;
      cache.writeQuery({
        query: GET_TODOS,
        data: { todo: todo.filter((item: any) => item.status === "ACTIVE") }
      });
    }
  });

  function handleClick() {
    clearCompleted();
  }

  return <Button onClick={handleClick}>Clear Completed</Button>;
};
