import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'
import TodoIndex from '~/pages/todo/index.vue'

describe('Todo Index Page', () => {
  it('render component correctly', async () => {
    const wrapper = await mountSuspended(TodoIndex)
    expect(wrapper.exists()).toBe(true)
  })
  it('renders a todo list', async () => {
    const wrapper = await mountSuspended(TodoIndex)
    const todo = wrapper.get('[data-testid="todo-list"]')
    expect(todo.text()).toBe('Arrumar a Cama')
  })
  it('add new todo', async () => {
    const wrapper = await mountSuspended(TodoIndex)
    expect(wrapper.findAll('[data-testid="todo-list"]')).toHaveLength(1)
    const textfield = wrapper.get('[data-testid="title"] input')
    const submit = wrapper.get('[data-testid="submit"]')
    await textfield.setValue('Descongelar a Carne')
    await submit.trigger('submit')
    expect(wrapper.findAll('[data-testid="todo-list"]')).toHaveLength(2)
  })
})
