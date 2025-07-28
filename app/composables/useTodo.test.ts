import { describe, it, expect } from 'vitest'

describe('Use Todo Composable', () => {
  it('todo list exists', async () => {
    const { todoList } = useTodo()
    expect(todoList.value).toEqual([])
  })
  it('add new todo on todo list', async () => {
    const { todoList, addTodo } = useTodo()
    expect(todoList.value.length).toBe(0)
    const newTodo = {
      id: crypto.randomUUID(),
      title: 'Arrumar a Cama',
      isDone: false,
    }
    addTodo(newTodo)
    expect(todoList.value.length).toBe(1)
  })
})
