import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'
import TodoIndex from '~/pages/todo/index.vue'

describe('Todo Index Page', () => {
  it('render component correctly', async () => {
    const wrapper = await mountSuspended(TodoIndex)

    expect(wrapper.exists()).toBe(true)
  })
})
