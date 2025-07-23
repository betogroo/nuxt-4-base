import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import CounterIndex from '../../../app/pages/counter/index.vue'

describe('CounterIndex', () => {
  it('render CounterDisplay component with displayNumber = 0', async () => {
    const wrapper = await mountSuspended(CounterIndex)
    const counterDisplay = wrapper.findComponent({ name: 'CounterDisplay' })

    expect(counterDisplay.exists()).toBe(true)

    expect(counterDisplay.props('displayNumber')).toBe(0)
  })
  it('render CounterButtons', async () => {
    const wrapper = await mountSuspended(CounterIndex)

    expect(wrapper.findComponent({ name: 'CounterButtons' }).exists()).toBe(true)
  })
})
