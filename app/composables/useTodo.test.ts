import { describe, it, expect } from 'vitest'

describe('Use Todo Composable', () => {
  it('todo list exists', async () => {
    const { todoList } = useTodo()
    expect(todoList.value).toEqual([])
  })
  it('new todo is not empty', async () => {
    const { todoList, addTodo } = useTodo()
    expect(todoList.value.length).toBe(0)
    const newTodo = ''
    addTodo(newTodo)
    expect(todoList.value.length).toBe(0)
  })
  it('add new todo on todo list', async () => {
    const { todoList, addTodo } = useTodo()
    expect(todoList.value.length).toBe(0)
    const newTodo = 'Arrumar a Cama'
    addTodo(newTodo)
    expect(todoList.value.length).toBe(1)
  })
})
