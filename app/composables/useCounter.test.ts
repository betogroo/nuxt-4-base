import { describe, it, expect } from 'vitest'
import useCounter from '~/composables/useCounter'

describe('useCounter', () => {
  it('starts with 0 as default value', () => {
    const { displayNumber } = useCounter()
    expect(displayNumber.value).toBe(0)
  })
  it('increments and decrements the counter correctly', () => {
    const { displayNumber, incrementValue, decrementValue } = useCounter()
    expect(displayNumber.value).toBe(0)
    incrementValue()
    expect(displayNumber.value).toBe(1)
    decrementValue()
    expect(displayNumber.value).toBe(0)
  })
  it('resets displayNumber to 0 when resetValue is called', () => {
    const { displayNumber, incrementValue, resetValue } = useCounter()
    incrementValue()
    incrementValue()
    expect(displayNumber.value).toBe(2)
    resetValue()
    expect(displayNumber.value).toBe(0)
  })
  it('does not decrement if displayNumber is 0', () => {
    const { displayNumber, decrementValue } = useCounter()
    displayNumber.value = 0
    decrementValue()
    expect(displayNumber.value).toBe(0)
  })
  it('disabled receive "decrement and reset" on displayNumber is 0', () => {
    const { displayNumber, disabled } = useCounter()
    displayNumber.value = 0
    expect(disabled.value.length).toBe(2)
    expect(disabled.value).toContain('decrement')
    expect(disabled.value).toContain('reset')
  })
  it('maxValue with 10 as default value', () => {
    const { maxValue } = useCounter()
    expect(maxValue.value).toBe(10)
  })
})
