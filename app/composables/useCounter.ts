const useCounter = () => {
  const displayNumber = ref<number>(0)

  const incrementValue = () => displayNumber.value++
  const decrementValue = () => displayNumber.value--
  const resetValue = () => {
    displayNumber.value = 0
  }
  return { displayNumber, incrementValue, decrementValue, resetValue }
}

export default useCounter
