const useCounter = () => {
  const displayNumber = ref<number>(0)
  const maxValue = ref<number>(10)

  const incrementValue = () => displayNumber.value++
  const decrementValue = () => {
    if (displayNumber.value === 0) return
    displayNumber.value--
  }
  const resetValue = () => {
    displayNumber.value = 0
  }
  const disabled = computed(() => (displayNumber.value === 0 ? ['decrement', 'reset'] : []))
  return { displayNumber, maxValue, incrementValue, decrementValue, resetValue, disabled }
}

export default useCounter
