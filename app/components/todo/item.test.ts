import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'
import TodoItem from '~/components/todo/item.vue'

describe('Todo Item', () => {
  it('renders component with required prop', async () => {
    const wrapper = await mountSuspended(TodoItem, {
      props: {
        item: {
          id: '',
          title: 'Arrumar a Cama',
          isDone: false,
        },
      },
    })
    expect(wrapper.text()).toBe('Arrumar a Cama')
  })
})
