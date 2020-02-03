import React, { useState } from "react";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { GET_TODOS } from "../graphql/query";
import { ADD_TODO } from "../graphql/mutations";

interface AllTodos {
  todo: any;
}

const TodoInput: React.FC = () => {
  const [input, setInput] = useState("");

  const [addTodo] = useMutation(ADD_TODO, {
    update(cache, { data }) {
      const todo = cache.readQuery<AllTodos>({ query: GET_TODOS })!.todo;

      cache.writeQuery({
        query: GET_TODOS,
        data: { todo: [...todo, data.todo.add] }
      });
    }
  });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    addTodo({ variables: { input } });
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="What's on your mind?"
        value={input}
        onChange={(e: any) => setInput(e.target.value)}
      />
    </form>
  );
};

const Input = styled.input`
  height: 33px;
  width: 100%;
  padding: 0 20px;
  margin-bottom: 10px;
`;

export default TodoInput;
