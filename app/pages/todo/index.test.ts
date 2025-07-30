import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'
import TodoIndex from '~/pages/todo/index.vue'

describe('Todo Index Page', () => {
  it('render component correctly', async () => {
    const wrapper = await mountSuspended(TodoIndex)
    expect(wrapper.exists()).toBe(true)
  })
  it('button must disable if no value on textfield', async () => {
    const wrapper = await mountSuspended(TodoIndex)
    const textfield = wrapper.get('[data-testid="title"] input')
    await textfield.setValue('')
    expect(wrapper.get('[data-testid="submit"]').attributes('disabled')).toBeDefined()
  })
  it('add new todo and clear input text', async () => {
    const wrapper = await mountSuspended(TodoIndex)
    expect(wrapper.findAll('[data-testid="todo-list"]')).toHaveLength(0)
    const textfield = wrapper.get('[data-testid="title"] input')
    const submit = wrapper.get('[data-testid="submit"]')
    await textfield.setValue('Descongelar a Carne')
    await submit.trigger('submit')
    expect(wrapper.findAll('[data-testid="todo-list"]')).toHaveLength(1)
    expect((textfield.element as HTMLInputElement).value).toBe('')
  })
})
