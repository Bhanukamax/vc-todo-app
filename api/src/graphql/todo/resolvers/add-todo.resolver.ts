import { todoRepository } from "../../../modules/repository/todo.repository";

interface IArgs {
  description: string;
}

export async function addTodoResolver(source: any, args: IArgs) {
  return todoRepository.addTodo(args.description);
}
