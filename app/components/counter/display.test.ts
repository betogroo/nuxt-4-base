import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { CounterDisplay } from '#components'

describe('CounterDisplay', () => {
  it('must show number 20', async () => {
    const wrapper = await mountSuspended(CounterDisplay)
    expect(wrapper.text()).toContain('10')
  })
})
