import { describe, it, expect } from 'vitest'

describe('Use Todo Composable', () => {
  it('todo list exists', async () => {
    const { todoList } = useTodo()
    expect(todoList).toBe([])
  })
})
