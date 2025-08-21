import { describe, it, expect } from 'vitest'
import { delay } from './delay'

describe('delay', () => {
  it('wait time', async () => {
    const start = Date.now()
    await delay(100, false, true)
    const end = Date.now()
    expect(end - start).toBeGreaterThanOrEqual(100)
  })
})
