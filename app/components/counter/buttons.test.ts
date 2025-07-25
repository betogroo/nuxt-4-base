import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { CounterButtons } from '#components'

describe('CounterButtons', () => {
  /* it('generate expect html', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    console.log(wrapper.html()) // Apenas para inspeção
  }) */
  it('render the component', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    expect(wrapper.exists()).toBe(true)
  })
  it('render three buttons', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const buttons = wrapper.findAll('button')
    expect(buttons.length).toBe(3)
  })

  it('button "-" is present and visible', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const minus = wrapper.get('[data-testid="decrement"]')
    expect(minus.text()).toBe('-')
  })

  it('button "+" is present and visible', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const plus = wrapper.get('[data-testid="increment"]')
    expect(plus.text()).toBe('+')
  })

  it('emit "increment" event on click on +', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const incrementButton = wrapper.find('[data-testid="increment"]')
    await incrementButton.trigger('click')

    expect(wrapper.emitted('increment')).toBeTruthy()
    expect(wrapper.emitted('increment')?.length).toBe(1)
  })
  it('emit "increment" event on click on -', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const incrementButton = wrapper.find('[data-testid="decrement"]')
    await incrementButton.trigger('click')

    expect(wrapper.emitted('decrement')).toBeTruthy()
    expect(wrapper.emitted('decrement')?.length).toBe(1)
  })
  it('button "reset" is present and visible', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const resetButton = wrapper.get('[data-testid="reset"]')
    expect(resetButton.text()).toBe('Reiniciar')
  })
  it('emit "reset" event on click on reset', async () => {
    const wrapper = await mountSuspended(CounterButtons)
    const resetButton = wrapper.get('[data-testid="reset"]')
    await resetButton.trigger('click')

    expect(wrapper.emitted('resetValue')).toBeTruthy()
    expect(wrapper.emitted('resetValue')?.length).toBe(1)
  })
  it('disables decrement button when "decrement" is in disabled prop', async () => {
    const wrapper = await mountSuspended(CounterButtons, {
      props: { disabled: ['decrement'] },
    })
    const decrementButton = wrapper.get('[data-testid="decrement"]')
    expect(decrementButton.attributes('disabled')).toBeDefined()
  })
})
