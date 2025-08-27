import type { Database } from '~/schemas'
import { delay } from '#imports'
const useAuth = () => {
  const { startPending, stopPending } = usePending()

  const errorMessage = ref<string | null>(null)
  const supabase = useSupabaseClient<Database>()
  const login = async (email: string, password: string) => {
    startPending('login')
    try {
      errorMessage.value = null
      await delay(2000, 'Testing Login')
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
    } catch (err) {
      console.log(err)
    } finally {
      stopPending()
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }
  return { login, logout }
}

export default useAuth
