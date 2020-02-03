import { TodoStatus } from "../enums/todo-status.enum";
import TodoModel from "../models/todo.model";
import { ITodoQuery, ITodoQueryInput } from "../types/index.types";

export interface ITodoRepository {
  queryTodos(args: ITodoQueryInput): Promise<any>;
  toggleAllTodos(status: TodoStatus): Promise<any>;
  addTodo(description: string): Promise<any>;
  findById(id: string): Promise<any>;
  deleteCompleted(): Promise<any>;
  toggleCompleted(id: string): Promise<any>;
}

export default class TodoRepository implements ITodoRepository {
  private _model: any;
  constructor(model: any) {
    this._model = model;
  }
  public async queryTodos(args: ITodoQueryInput) {
    const query: ITodoQuery = {};
    if (args.ids) {
      query._id = { $in: args.ids };
    }

    if (args.statuses) {
      query.status = { $in: args.statuses };
    }

    return await this._model.find(query);
  }

  public async toggleAllTodos(status: TodoStatus) {
    await this._model.updateMany({}, { $set: { status } });
    return status;
  }

  public async addTodo(description: string) {
    const todo = new this._model({ description });
    await todo.save();

    return todo;
  }

  public async findById(id: string) {
    return this._model.findById(id);
  }

  public async deleteCompleted() {
    await this._model.remove({ status: TodoStatus.COMPLETED });
  }

  public async toggleCompleted(id: string) {
    const todo = await this._model.findOne({ _id: id });

    if (todo) {
      todo.status =
        todo.status === TodoStatus.ACTIVE
          ? TodoStatus.COMPLETED
          : TodoStatus.ACTIVE;
      await todo.save();
    }

    return todo;
  }
}

export const todoRepository = new TodoRepository(TodoModel);
