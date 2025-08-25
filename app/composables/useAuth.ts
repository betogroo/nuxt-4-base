//import type { Database } from '~/schemas'
import { delay } from '#imports'
const useAuth = () => {
  const { startPending, stopPending } = usePending()

  const errorMessage = ref<string | null>(null)
  // const supabase = useSupabaseClient<Database>()
  const login = async (email: string, password: string) => {
    startPending('login')
    errorMessage.value = null
    await delay(2000, 'Testing Login')
    console.log(email, password)
    stopPending()
  }
  return { login }
}

export default useAuth
