import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe } from 'vitest'
import NavBar from '../../app/components/nav-bar.vue'

describe('nav-bar', () => {
  it('component exists', async () => {
    const wrapper = await mountSuspended(NavBar)
    expect(wrapper.exists()).toBe(true)
  })
  it('must contain nav element', async () => {
    const wrapper = await mountSuspended(NavBar)
    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
  })
  it('possui dois links com os destinos corretos', async () => {
    const wrapper = await mountSuspended(NavBar)

    const links = wrapper.findAll('a')
    expect(links.length).toBe(2)

    expect(links[0].attributes('href')).toBe('/')
    expect(links[0].text()).toBe('Home')

    expect(links[1].attributes('href')).toBe('/about')
    expect(links[1].text()).toBe('About')
  })
})
