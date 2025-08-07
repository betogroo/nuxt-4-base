import { TodoItemDelete } from '#components'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, it, expect } from 'vitest'

const testTodo = {
  id: '',
  title: 'Arrumar a Cama',
  isDone: false,
}
const testCancelIcon = '[data-testid="cancel-icon"]'
const testDeleteIcon = '[data-testid="delete-icon"]'

describe('TodoItemDelete', () => {
  it('renders component correctly', async () => {
    const wrapper = await mountSuspended(TodoItemDelete, {
      props: {
        item: testTodo,
      },
    })
    expect(wrapper.text()).toContain('Deseja realmente excluir?')
    expect(wrapper.find(testCancelIcon).exists()).toBe(true)
    expect(wrapper.find(testDeleteIcon).exists()).toBe(true)
  })
  it('emits "cancel" event on close icon click', async () => {
    const wrapper = await mountSuspended(TodoItemDelete, {
      props: {
        item: testTodo,
      },
    })
    const cancelIcon = wrapper.find(testCancelIcon)
    await cancelIcon.trigger('click')
    expect(wrapper.emitted('cancel')).toBeTruthy()
    expect(wrapper.emitted('cancel')?.length).toBe(1)
  })
  it('emits "delete" event on delete icon click', async () => {
    const wrapper = await mountSuspended(TodoItemDelete, {
      props: {
        item: testTodo,
      },
    })
    const deleteIcon = wrapper.find(testDeleteIcon)
    await deleteIcon.trigger('click')
    expect(wrapper.emitted('delete')).toBeTruthy()
    expect(wrapper.emitted('delete')?.length).toBe(1)
  })
  it('alert renders with icon and message', async () => {
    const wrapper = await mountSuspended(TodoItemDelete, {
      props: {
        item: testTodo,
      },
    })
    const alert = wrapper.findComponent('[data-testid="alert"]')
    expect(alert.text()).toContain('Deseja realmente excluir?')
  })
})
