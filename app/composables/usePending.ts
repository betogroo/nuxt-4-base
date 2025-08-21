import type { PendingState } from '~/schemas'
const usePending = () => {
  const pendingState = ref<PendingState>()
  return { pendingState }
}

export default usePending
