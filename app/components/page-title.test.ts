import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe } from 'vitest'
import { PageTitle } from '#components'

describe('page-title', () => {
  it('component exists', async () => {
    const wrapper = await mountSuspended(PageTitle)
    expect(wrapper.exists()).toBe(true)
  })
  it('must contain h1 element', async () => {
    const wrapper = await mountSuspended(PageTitle)
    const h1 = wrapper.find('h1')
    expect(h1.exists()).toBe(true)
  })
  it('renders the title prop correctly', async () => {
    const wrapper = await mountSuspended(PageTitle, {
      props: { title: 'Title' },
    })
    expect(wrapper.find('h1').text()).toBe('Title')
  })
})
