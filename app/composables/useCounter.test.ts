import { describe, it, expect } from 'vitest'
import useCounter from '~/composables/useCounter'

describe('useCounter', () => {
  it('return 0 as default value and increment', () => {
    const { displayNumber, incrementValue } = useCounter()
    expect(displayNumber.value).toBe(0)
    incrementValue()
    expect(displayNumber.value).toBe(1)
  })
  it('return 0 as default value and decrement', () => {
    const { displayNumber, decrementValue } = useCounter()
    expect(displayNumber.value).toBe(0)
    decrementValue()
    expect(displayNumber.value).toBe(-1)
  })
  it('resets displayNumber to 0 when resetValue is called', () => {
    const { displayNumber, resetValue } = useCounter()
    displayNumber.value = 10
    resetValue()
    displayNumber.value = 0
    expect(displayNumber.value).toBe(0)
  })
  it('does not decrement if displayNumber is 0', () => {
    const { displayNumber, decrementValue } = useCounter()
    displayNumber.value = 0
    decrementValue()
    expect(displayNumber.value).toBe(0)
  })
})
