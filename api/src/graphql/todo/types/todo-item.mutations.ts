import { GraphQLObjectType, GraphQLString } from "graphql";
import { addTodoResolver } from "../resolvers/add-todo.resolver";
import { toggleCompleted } from "../resolvers/toggle-completed.resolver";
import { GraphQLTodo } from "./todo";

export const GraphQLTodoItemMutations = new GraphQLObjectType({
  name: "TodoItemMutation",
  fields: () => {
    return {
      add: {
        type: GraphQLTodo,
        resolve: addTodoResolver,
        args: {
          description: {
            type: GraphQLString,
          },
        },
      },
      toggleCompleted: {
        type: GraphQLTodo,
        resolve: toggleCompleted,
      },
    };
  },
});
