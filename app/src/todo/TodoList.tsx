import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_TODOS } from "../graphql/query";
import { TodoItem } from "./TodoItem";

interface IProps {
  category?: any;
}

const TodoList: React.FC<IProps> = (props: any) => {
  const { loading, error, data } = useQuery(GET_TODOS, {
    variables: {
      stauses: ["ACTIVE"]
    }
  });

  if (loading) return <>Loading...</>;

  if (error) return <>Error... ${error.message}</>;

  return (
    <div>
      {data.todo
        .filter((item: any) => {
          if (props.category !== "/") {
            return (
              (props.category === "/active" && item.status === "ACTIVE") ||
              (props.category === "/completed" && item.status === "COMPLETED")
            );
          }

          return true;
        })
        .map((item: any) => (
          <TodoItem
            text={item.description}
            id={item.id}
            key={item.id}
            checked={item.status === "COMPLETED"}
          ></TodoItem>
        ))}
    </div>
  );
};

export default TodoList;
