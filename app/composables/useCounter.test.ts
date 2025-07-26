import { describe, it, expect } from 'vitest'
import useCounter from '~/composables/useCounter'

describe('useCounter', () => {
  it('increments and decrements the counter correctly', () => {
    const { displayNumber, incrementValue, decrementValue } = useCounter()
    expect(displayNumber.value).toBe(0)
    incrementValue()
    expect(displayNumber.value).toBe(1)
    decrementValue()
    expect(displayNumber.value).toBe(0)
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
