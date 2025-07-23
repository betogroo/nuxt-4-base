import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import HomePage from '~/pages/index.vue'

describe('Home Page', () => {
  it('must render Page with prop title', async () => {
    const wrapper = await mountSuspended(HomePage)
    const pageTitle = wrapper.findComponent({ name: 'PageTitle' })

    expect(pageTitle.exists()).toBe(true)
    expect(pageTitle.props('title')).toBe('Home Page')
  })
})
