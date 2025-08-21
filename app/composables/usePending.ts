import type { PendingState } from '~/schemas'
const usePending = () => {
  const pendingState = useState<PendingState>('pendingState', () => ({
    loading: false,
  }))

  const startPending = (action: string, item?: string) => {
    pendingState.value = { loading: true, action, item }
  }
  const stopPending = () => {
    pendingState.value = { loading: false }
  }
  const isPending = (action: string, item?: string | number) => {
    if (!pendingState.value.loading) return false
    if (pendingState.value.action !== action) return false
    if (item !== undefined && pendingState.value.item !== item) return false
    return true
  }
  return { pendingState, startPending, stopPending, isPending }
}

export default usePending
