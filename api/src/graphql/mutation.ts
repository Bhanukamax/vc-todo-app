import { GraphQLID, GraphQLObjectType } from "graphql";
import { todoMutationResolver } from "./todo/resolvers/todo-item-mutation.resolver";
import { GraphQLTodoItemMutations } from "./todo/types/todo-item.mutations";
import { GraphQLTodoMutations } from "./todo/types/todos.mutations";

export const RootMutation = new GraphQLObjectType({
  name: "Mutation",
  fields: () => ({
    todo: {
      type: GraphQLTodoItemMutations,
      description: "Mutations for a todo item",
      resolve: todoMutationResolver,
      args: {
        id: {
          description: "Id of the todo",
          type: GraphQLID,
        },
      },
    },
    todos: {
      description: "Mutations for all todo items",
      type: GraphQLTodoMutations,
      resolve: () => ({}),
    },
  }),
});
