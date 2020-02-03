import { todoRepository } from "../../../modules/repository/todo.repository";

export async function clearCompleted(source: any) {
  await todoRepository.deleteCompleted();

  return "cleared all completed";
}
