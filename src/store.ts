import { reactive } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import { getTodos, updateTodos } from './api'
import { UUID, IState, ITodoItem } from './types'

export const initialState:IState = {
  todoItems: []
}

export const store = reactive(initialState)

export function addTodoItem (todoItem: ITodoItem): void {
  store.todoItems = [todoItem].concat(store.todoItems)
  save()
}

export function toggleDone (id: UUID): void {
  const newTodoItems = store.todoItems.map((item) => {
    if (item.id === id) {
      return { ...item, isDone: !item.isDone }
    }
    return item
  })
  store.todoItems = newTodoItems
  save()
}

export function removeTodoItem (id: UUID): void {
  store.todoItems = store.todoItems.filter(item => !(item.id === id))
  save()
}

export async function load (): Promise<void> {
  const { todoItems } = await getTodos()
  if (todoItems) store.todoItems = todoItems
}

export async function save (): Promise<void> {
  updateTodos(store)
}
