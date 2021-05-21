import { IState } from './store'

const headers = {
  'X-Master-Key': '$2b$10$X9W.su7FvQhpv207K5MBkuzilHT9snkzbnKJXeUbGaNuTAyf7LFgW',
  'Content-Type': 'application/json'
}

const url = 'https://api.jsonbin.io/v3/b/60a734c780239f150dcf7003'

export const getTodos = async (): Promise<IState> => {
  const response = await fetch(url, { headers })
  const results = await response.json()
  return results.record
}

export const updateTodos = async (state: IState) => {
  const body = JSON.stringify(state)
  await fetch(url, { method: 'PUT', headers, body })
}
