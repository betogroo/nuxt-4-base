import { describe, it, expect } from 'vitest'
import { useTodoStore } from '~/stores/todo'

describe('Use Todo Composable', () => {
  it('todo list exists', async () => {
    const { taskList } = useTodoStore()
    expect(taskList).toEqual([])
  })
  it('new todo is not empty', async () => {
    const { taskList, addTodo } = useTodoStore()
    expect(taskList.length).toBe(0)
    const newTodo = ''
    addTodo(newTodo)
    expect(taskList.length).toBe(0)
  })
  it('add new todo on todo list', async () => {
    const { taskList, addTodo } = useTodoStore()
    expect(taskList.length).toBe(0)
    const newTodo = 'Arrumar a Cama'
    await addTodo(newTodo)
    expect(taskList.length).toBe(1)
  })
  it('delete todo item', () => {
    const store = useTodoStore()
    expect(store.taskList.length).toBe(0)
    store.addTodo('Arrumar a Cama')
    expect(store.taskList.length).toBe(1)
    const todoId = store.taskList[0]?.id
    if (todoId) store.deleteTodo(todoId)
    expect(store.taskList.length).toBe(0)
  })
  it('toggle isDone', async () => {
    const { taskList, toggleIsDone, addTodo } = useTodoStore()
    addTodo('Arrumar a casa')
    const todoId = taskList[0]?.id
    if (todoId) toggleIsDone(todoId)
    expect(taskList[0]?.isDone).toBe(true)
    if (todoId) toggleIsDone(todoId)
    expect(taskList[0]?.isDone).toBe(false)
  })
})
