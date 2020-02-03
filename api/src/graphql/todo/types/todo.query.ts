import { GraphQLID, GraphQLList } from "graphql";
import { todoResolver } from "../resolvers/todo.resolver";
import { GraphQLTodo } from "./todo";
import { GraphQLTodoStatus } from "./todo-status";

export const GraphQLTodoQuery = {
  type: new GraphQLList(GraphQLTodo),
  name: "TodoQuery",
  resolve: todoResolver,
  args: {
    ids: {
      type: GraphQLList(GraphQLID),
    },
    statuses: {
      type: GraphQLList(GraphQLTodoStatus),
    },
  },
};
