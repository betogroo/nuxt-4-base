import { TaskRowSchema, z, type TaskRow } from '~/schemas'
export const useTodoStore = defineStore('todo', () => {
  const taskList = ref<TaskRow[]>([])
  const isPending = ref(false)

  const addTodo = async (title: string) => {
    if (!title.trim()) return
    isPending.value = true
    const newTodo: TaskRow = {
      id: crypto.randomUUID(),
      title,
      isDone: false,
    }
    try {
      if (import.meta.env.MODE !== 'test') await delay(5000)
      const result = TaskRowSchema.safeParse(newTodo)
      if (!result.success) {
        throw new Error(z.prettifyError(result.error))
      }
      taskList.value.push(result.data)
    } catch (error) {
      console.log(error)
    } finally {
      isPending.value = false
    }
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

  return {
    taskList,
    addTodo,
    deleteTodo,
    completedTodos,
    pendingTodos,
    toggleIsDone,
    $reset,
    isPending,
  }
})
