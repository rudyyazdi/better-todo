export type UUID = string

export type ITodoItem = {
  id: UUID;
  name: string;
  isDone: boolean;
}

export type IState = {
  todoItems: ITodoItem[]
}
