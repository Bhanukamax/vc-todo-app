import { todoRepository } from "../../../modules/repository/todo.repository";

export async function toggleAll(source: any, args: any) {
  return todoRepository.toggleAllTodos(args.status);
}
