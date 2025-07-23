import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import CounterIndex from '../../../app/pages/counter/index.vue'

describe('CounterIndex', () => {
  it('render CounterButtons and CounterDisplay components', async () => {
    const wrapper = await mountSuspended(CounterIndex)
    expect(wrapper.findComponent({ name: 'CounterDisplay' }).exists()).toBe(true)
    expect(wrapper.findComponent({ name: 'CounterButtons' }).exists()).toBe(true)
  })
})
