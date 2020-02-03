import React from "react";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import styled from "styled-components";
import { LocationProvider } from "@reach/router";

const AppWrapper = styled.div`
  width: 425px;
  margin: 0 auto;
  padding-bottom: 100px;
`;

const Todo: React.FC = () => {
  return (
    <>
      <AppWrapper>
        <LocationProvider>
          {(context: any) => {
            return (
              <>
                <h1>Todo</h1>
                <TodoInput />

                <TodoList category={context.location.pathname} />
              </>
            );
          }}
        </LocationProvider>
      </AppWrapper>
    </>
  );
};

export default Todo;
