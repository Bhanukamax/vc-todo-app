import { todoRepository } from "../../../modules/repository/todo.repository";

export async function todoMutationResolver(source, args) {
  if (args.id) {
    return todoRepository.findById(args.id);
  }
  return {};
}
