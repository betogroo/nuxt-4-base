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

  it('delete icon is visible if task is not done', async () => {
    const wrapper = await mountSuspended(TodoItem, {
      props: {
        item: {
          id: '',
          title: 'Arrumar a Cama',
          isDone: false,
        },
      },
    })
    const deleteIcon = wrapper.findComponent('[data-testid="trash-icon"]')
    expect(deleteIcon.exists()).toBe(false)
  })
  it('renders delete icon on task is done', async () => {
    const wrapper = await mountSuspended(TodoItem, {
      props: {
        item: {
          id: '',
          title: 'Arrumar a Cama',
          isDone: true,
        },
      },
    })
    const deleteIcon = wrapper.findComponent('[data-testid="trash-icon"]')
    expect(deleteIcon.exists()).toBe(true)
  })
  it('emit "trash-icon" event on click on trash icon', async () => {
    const wrapper = await mountSuspended(TodoItem, {
      props: {
        item: {
          id: '',
          title: 'Arrumar a Cama',
          isDone: true,
        },
      },
    })
    const trashIcon = wrapper.find('[data-testid="trash-icon"]')
    await trashIcon.trigger('click')

    expect(wrapper.emitted('delete-item')).toBeTruthy()
    expect(wrapper.emitted('delete-item')?.length).toBe(1)
  })
})
