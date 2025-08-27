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
  it('delete todo item', () => {
    const { todoList, addTodo, deleteTodo } = useTodo()
    expect(todoList.value.length).toBe(0)
    addTodo('Arrumar a Cama')
    expect(todoList.value.length).toBe(1)
    const todoId = todoList.value[0]?.id
    if (todoId) deleteTodo(todoId)
    expect(todoList.value.length).toBe(0)
  })
  it('toggle isDone', async () => {
    const { todoList, toggleIsDone } = useTodo()
    todoList.value = [
      {
        id: '1',
        title: 'Arrumar a casa',
        isDone: false,
      },
    ]
    toggleIsDone('1')
    expect(todoList.value[0]?.isDone).toBe(true)

    toggleIsDone('1')
    expect(todoList.value[0]?.isDone).toBe(false)
  })
})
