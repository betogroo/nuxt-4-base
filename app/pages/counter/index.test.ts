import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import CounterIndex from '~/pages/counter/index.vue'

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
  it('increment number on click on button +', async () => {
    const wrapper = await mountSuspended(CounterIndex)
    const counterDisplay = wrapper.findComponent({ name: 'CounterDisplay' })
    const incrementButton = wrapper.find('[data-testid="increment"]')

    expect(counterDisplay.props('displayNumber')).toBe(0)
    await incrementButton.trigger('click')

    expect(counterDisplay.props('displayNumber')).toBe(1)
    expect(wrapper.text()).toContain('1')
  })
  it('decrement number on click on button -', async () => {
    const wrapper = await mountSuspended(CounterIndex)
    const counterDisplay = wrapper.findComponent({ name: 'CounterDisplay' })
    const decrementButton = wrapper.find('[data-testid="decrement"]')

    expect(counterDisplay.props('displayNumber')).toBe(0)
    await decrementButton.trigger('click')

    expect(counterDisplay.props('displayNumber')).toBe(-1)
    expect(wrapper.text()).toContain('-1')
  })
  it('resets number on click on button reset', async () => {
    const wrapper = await mountSuspended(CounterIndex)
    const counterDisplay = wrapper.findComponent({ name: 'CounterDisplay' })
    const incrementButton = wrapper.find('[data-testid="decrement"]')
    const resetButton = wrapper.find('[data-testid="reset"]')
    expect(counterDisplay.props('displayNumber')).toBe(0)
    await incrementButton.trigger('click')
    expect(wrapper.text()).toContain('1')
    await resetButton.trigger('click')
    expect(wrapper.text()).toContain('0')
  })
})
