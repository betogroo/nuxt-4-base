import { describe, it, expect } from 'vitest'
import useCounter from '~/composables/useCounter'

describe('useCounter', () => {
  it('return 0 as default value', () => {
    const { displayNumber } = useCounter()
    expect(displayNumber.value).toBe(0)
  })
})
