const useTodo = () => {
  interface TodoItem {
    id: string
    title: string
    isDone: boolean
  }
  const todoList = ref<TodoItem[]>([])

  return { todoList }
}

export default useTodo
