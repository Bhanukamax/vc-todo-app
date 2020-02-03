import React from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { useMutation } from "@apollo/react-hooks";
import { TOGGLE_ALL } from "../graphql/mutations";
import { GET_TODOS } from "../graphql/query";

interface IAllTodos {
  todo: any;
}

export const MarkAll: React.FC = () => {
  const [toggle] = useMutation(TOGGLE_ALL, {
    update(cache, { data }) {
      const todo = cache.readQuery<IAllTodos>({ query: GET_TODOS })!.todo;
      cache.writeQuery({
        query: GET_TODOS,
        data: {
          todo: todo.map((item: any) => ({
            ...item,
            status: data.todos.toggleAll
          }))
        }
      });
    }
  });

  function handleClick(status: any) {
    toggle({ variables: { status } });
  }
  return (
    <Container>
      <p>Toggle all:</p>
      <Button onClick={() => handleClick("ACTIVE")}>Active</Button>
      <Button onClick={() => handleClick("COMPLETED")}>Completed</Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  > * {
    padding: 10px;
  }
`;
