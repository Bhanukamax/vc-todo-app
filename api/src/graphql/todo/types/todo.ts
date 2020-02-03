import {
  GraphQLBoolean,
  GraphQLID,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { GraphQLTodoStatus } from "./todo-status";

export const GraphQLTodo = new GraphQLObjectType({
  name: "Todo",
  fields: () => ({
    id: {
      type: GraphQLID,
    },
    description: {
      type: GraphQLString,
    },
    status: {
      type: GraphQLTodoStatus,
    },
    isCompleted: {
      type: GraphQLBoolean,
    },
  }),
});
