import { CounterMaxValueDisplay } from '#components'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'

describe('Max Value Display', () => {
  it('render the component', async () => {
    const wrapper = await mountSuspended(CounterMaxValueDisplay)
    expect(wrapper.exists()).toBe(true)
  })
  it('renders the value prop correctly', async () => {
    const wrapper = await mountSuspended(CounterMaxValueDisplay, {
      props: { value: 10 },
    })
    expect(wrapper.find('h3').text()).toBe(`Max: 10`)
  })
})
