import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { CounterDisplay } from '#components'

describe('CounterDisplay', () => {
  it('must show number 0', async () => {
    const wrapper = await mountSuspended(CounterDisplay, {
      props: { displayNumber: 0 },
    })
    expect(wrapper.text()).toContain('0')
  })
  it('must show prop number', async () => {
    const wrapper = await mountSuspended(CounterDisplay, {
      props: { displayNumber: 42 },
    })
    expect(wrapper.text()).toContain('42')
  })
})
