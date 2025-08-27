import { TaskRowSchema, z, type TaskRow } from '~/schemas'
const useTodo = () => {
  const todoList = ref<TaskRow[]>([])

  const addTodo = (title: string) => {
    if (!title.trim()) return
    const newTodo: TaskRow = {
      id: crypto.randomUUID(),
      title,
      isDone: false,
    }
    const result = TaskRowSchema.safeParse(newTodo)
    if (!result.success) {
      console.log(z.prettifyError(result.error))
      return
    }
    todoList.value.push(result.data)
  }

  const deleteTodo = (id: string) => {
    todoList.value = todoList.value.filter((item) => item.id !== id)
  }

  const toggleIsDone = (id: string) => {
    const item = todoList.value.find((item) => item.id === id)
    if (item) {
      item.isDone = !item.isDone
    }
  }
  const completedTodos = computed(() => todoList.value.filter((item) => item.isDone))
  const pendingTodos = computed(() => todoList.value.filter((item) => !item.isDone))

  return { todoList, addTodo, deleteTodo, toggleIsDone, completedTodos, pendingTodos }
}

export default useTodo
