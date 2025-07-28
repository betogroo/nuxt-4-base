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
})
