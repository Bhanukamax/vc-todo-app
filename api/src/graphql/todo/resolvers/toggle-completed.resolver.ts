import { todoRepository } from "../../../modules/repository/todo.repository";

export async function toggleCompleted(source: any) {
  return todoRepository.toggleCompleted(source.id);
}
