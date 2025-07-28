const useTodo = () => {
  interface TodoItem {
    id: string
    title: string
    isDone: boolean
  }
  const todoList = ref<TodoItem[]>([])

  const addTodo = (todo: TodoItem) => {
    todoList.value.push(todo)
  }

  return { todoList, addTodo }
}

export default useTodo
