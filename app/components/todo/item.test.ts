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
    expect(wrapper.text()).toContain('Arrumar a Cama')
  })
  it('emit "toggle-icon" event on click on is done icon', async () => {
    const wrapper = await mountSuspended(TodoItem, {
      props: {
        item: {
          id: '',
          title: 'Arrumar a Cama',
          isDone: false,
        },
      },
    })
    const isDoneIcon = wrapper.find('[data-testid="is-done-icon"]')
    await isDoneIcon.trigger('click')

    expect(wrapper.emitted('toggle-item')).toBeTruthy()
    expect(wrapper.emitted('toggle-item')?.length).toBe(1)
  })
})
