import { TaskRowSchema, z, type TaskRow } from '~/schemas'
export const useTodoStore = defineStore('todo', () => {
  const taskList = ref<TaskRow[]>([])

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
    taskList.value.push(result.data)
  }

  const deleteTodo = (id: string) => {
    taskList.value = taskList.value.filter((item) => item.id !== id)
  }

  const toggleIsDone = (id: string) => {
    const item = taskList.value.find((item) => item.id === id)
    if (item) {
      item.isDone = !item.isDone
    }
  }
  const $reset = () => (taskList.value = [])
  const completedTodos = computed(() => taskList.value.filter((item) => item.isDone))
  const pendingTodos = computed(() => taskList.value.filter((item) => !item.isDone))

  return { taskList, addTodo, deleteTodo, completedTodos, pendingTodos, toggleIsDone, $reset }
})
