import { type TodoList } from '../types'

// const API_URL = 'https://api.jsonbin.io/v3/b/63ff3a52ebd26539d087639c'
// const API_URL = 'https://api.jsonbin.io/v3/b/64eaaba18e4aa6225ed5ccb8'
const API_URL = 'https://api.jsonbin.io/v3/b/64eabe0db89b1e2299d67d2b'

interface Todo {
  id: string
  title: string
  completed: boolean
  order: number
}

export const fetchTodos = async (): Promise<Todo[]> => {
  // console.log(import.meta.env.VITE_API_BIN_KEY)

  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': import.meta.env.VITE_API_BIN_KEY,
      'X-ACCESS-KEY': import.meta.env.VITE_API_ACCESS_KEY
    }
  })
  if (!res.ok) {
    console.error('Error fetching todos')
    return []
  }

  const { record: todos } = await res.json() as { record: Todo[] }
  // console.log(todos)
  return todos
}

export const updateTodos = async ({ todos }: { todos: TodoList }): Promise<boolean> => {
  // console.log(import.meta.env.VITE_API_BIN_KEY)
  // console.log(todos)
  const res = await fetch(API_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'X-Master-Key': import.meta.env.VITE_API_BIN_KEY,
      'X-ACCESS-KEY': import.meta.env.VITE_API_ACCESS_KEY
    },
    body: JSON.stringify(todos)
  })

  return res.ok
}
