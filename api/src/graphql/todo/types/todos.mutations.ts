import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { clearCompleted } from "../resolvers/clear-completed.resolver";
import { toggleAll } from "../resolvers/toggle-all.resolver";
import { GraphQLTodoStatus } from "./todo-status";

export const GraphQLTodoMutations = new GraphQLObjectType({
  name: "TodoMutation",
  fields: () => {
    return {
      clearCompleted: {
        type: GraphQLString,
        resolve: clearCompleted,
      },
      toggleAll: {
        type: GraphQLString,
        resolve: toggleAll,
        args: {
          status: {
            type: GraphQLNonNull(GraphQLTodoStatus),
          },
        },
      },
    };
  },
});
