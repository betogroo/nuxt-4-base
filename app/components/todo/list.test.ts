import { describe, it, expect } from 'vitest'
import { TodoList } from '#components'
import { mountSuspended } from '@nuxt/test-utils/runtime'
describe('TodoList', () => {
  it('render component with props', async () => {
    const wrapper = await mountSuspended(TodoList, {
      props: {
        completedTodos: [],
        pendingTodos: [],
      },
    })

    expect(wrapper.exists()).toBe(true)
  })
})
