export interface TodoItem {
  id: string
  title: string
  isDone: boolean
}
const useTodo = () => {
  const todoList = ref<TodoItem[]>([])

  const addTodo = (title: string) => {
    if (!title.trim()) return
    const newTodo: TodoItem = {
      id: crypto.randomUUID(),
      title,
      isDone: false,
    }
    todoList.value.push(newTodo)
  }

  const deleteTodo = (id: string) => {
    todoList.value = todoList.value.filter((item) => item.id !== id)
  }

  return { todoList, addTodo, deleteTodo }
}

export default useTodo
