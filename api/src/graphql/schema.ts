import { graphql, GraphQLSchema } from "graphql";
import { RootMutation } from "./mutation";
import { RootQuery } from "./query";

export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: RootMutation,
});
