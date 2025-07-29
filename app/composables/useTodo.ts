export interface TodoItem {
  id: string
  title: string
  isDone: boolean
}
const useTodo = () => {
  const todoList = ref<TodoItem[]>([])

  const addTodo = (title: string) => {
    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      title,
      isDone: false,
    }
    todoList.value.push(newTodo)
  }

  return { todoList, addTodo }
}

export default useTodo
