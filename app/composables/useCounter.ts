const useCounter = () => {
  const displayNumber = ref<number>(0)
  const maxValue = ref<number>(10)

  const incrementValue = () => {
    if (displayNumber.value === maxValue.value) return
    displayNumber.value++
  }
  const decrementValue = () => {
    if (displayNumber.value === 0) return
    displayNumber.value--
  }
  const resetValue = () => {
    displayNumber.value = 0
  }
  const disabled = computed(() => {
    if (displayNumber.value === 0) return ['decrement', 'reset']
    else if (displayNumber.value === maxValue.value) return ['increment']
    else return []
  })
  return { displayNumber, maxValue, incrementValue, decrementValue, resetValue, disabled }
}

export default useCounter
