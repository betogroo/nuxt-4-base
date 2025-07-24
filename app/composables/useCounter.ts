const useCounter = () => {
  const displayNumber = ref<number>(0)

  const incrementValue = () => displayNumber.value++
  return { displayNumber, incrementValue }
}

export default useCounter
