import { GraphQLEnumType } from "graphql";
import { TodoStatus } from "../../../modules/enums/todo-status.enum";

const values = Object.keys(TodoStatus).reduce(
  (acc, cv) => ({ ...acc, [cv]: { value: cv } }),
  {},
);

export const GraphQLTodoStatus = new GraphQLEnumType({
  name: "TodoStatusType",
  values,
});
