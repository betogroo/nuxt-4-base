const useCounter = () => {
  const displayNumber = ref<number>(0)

  const incrementValue = () => displayNumber.value++
  const decrementValue = () => displayNumber.value--
  return { displayNumber, incrementValue, decrementValue }
}

export default useCounter
