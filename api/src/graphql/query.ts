import { GraphQLList, GraphQLObjectType, GraphQLString } from "graphql";
import { GraphQLTodoQuery } from "./todo/types/todo.query";

export const RootQuery = new GraphQLObjectType({
  name: "Query",
  fields: () => ({
    todo: GraphQLTodoQuery,
  }),
});
