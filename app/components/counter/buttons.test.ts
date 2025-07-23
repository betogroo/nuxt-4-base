import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { CounterButtons } from '#components'

describe('CounterButtons', () => {
  it('generate expect html', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    console.log(wrapper.html()) // Apenas para inspeção
  })
  it('render the component', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    expect(wrapper.exists()).toBe(true)
  })

  it('have two buttons', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(2)
  })

  it('button "-" is present and visible', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const minus = wrapper.find('button:first-child')
    expect(minus.text()).toBe('-')
  })

  it('button "+" is present and visible', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const plus = wrapper.find('button:last-child')
    expect(plus.text()).toBe('+')
  })
})
