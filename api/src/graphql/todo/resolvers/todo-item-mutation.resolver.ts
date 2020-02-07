import { todoRepository } from "../../../modules/repository/todo.repository";

export async function todoMutationResolver(source: any, args: any) {
  if (args.id) {
    return todoRepository.findById(args.id);
  }
  return {};
}
