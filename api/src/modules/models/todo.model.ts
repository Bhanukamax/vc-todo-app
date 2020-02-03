import mongoose, { Schema } from "mongoose";
import { TodoStatus } from "../enums/todo-status.enum";
import { ITodo } from "../types/index.types";

export const TodoSchema: Schema = new Schema({
  description: { type: String, required: true },
  status: { type: String, required: true, default: TodoStatus.ACTIVE },
  userId: { type: String, required: false },
  isCompleted: { type: Boolean, required: true, default: false },
});

const TodoModel = mongoose.model<ITodo & mongoose.Document>(
  "todos",
  TodoSchema,
);

export default TodoModel;
