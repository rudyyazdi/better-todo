import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid'

export type ITodoItem = {
  id: string;
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

export function toggleDone (id: string): void {
  const newTodoItems = store.todoItems.map((item) => {
    if (item.id === id) {
      return { ...item, isDone: !item.isDone }
    }
    return item
  })
  store.todoItems = newTodoItems
}
