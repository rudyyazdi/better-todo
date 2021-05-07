import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export type UUID = string

export type ITodoItem = {
  id: UUID;
  name: string;
  isDone: boolean;
}

type IState = {
  todoItems: ITodoItem[]
}

export const initialState:IState = {
  todoItems: []
}

export const store = reactive(initialState)

export function addTodoItem (todoItem: ITodoItem): void {
  store.todoItems = [todoItem].concat(store.todoItems)
}

export function toggleDone (id: UUID): void {
  const newTodoItems = store.todoItems.map((item) => {
    if (item.id === id) {
      return { ...item, isDone: !item.isDone }
    }
    return item
  })
  store.todoItems = newTodoItems
}

export function removeTodoItem (id: UUID): void {
  store.todoItems = store.todoItems.filter(item => !(item.id === id))
}
