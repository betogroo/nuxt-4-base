export const useNotificationStore = defineStore('notification', () => {
  const message = ref<string | null>(null)
  const color = ref<'error' | 'success' | 'warning' | 'info'>('error')
  const show = ref(false)

  const notify = (newMessage: string, newColor: typeof color.value = 'error') => {
    message.value = newMessage
    color.value = newColor
    show.value = true
  }

  const clear = () => {
    message.value = null
    show.value = false
  }

  return { message, color, show, notify, clear }
})
