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
  return { pendingState, startPending, stopPending }
}

export default usePending
