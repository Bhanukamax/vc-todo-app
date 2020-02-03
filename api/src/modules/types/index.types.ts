export interface ITodoQueryInput {
  ids: string[];
  statuses: string[];
}

export interface ITodoQuery {
  _id?: {};
  status?: {};
}

export interface ITodo {
  id?: string;
  description: string;
  status: string;
  userId: string;
  isCompleted: boolean;
}
