import { todoRepository } from "../../../modules/repository/todo.repository";
import { ITodo } from "../../../modules/types/index.types";

interface IArgs {
  ids: string[];
  statuses: string[];
}

export async function todoResolver(source: any, args: IArgs) {
  return todoRepository.queryTodos(args);
}
