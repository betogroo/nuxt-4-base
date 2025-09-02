import { mountSuspended } from '@nuxt/test-utils/runtime'
import { it, expect, describe, beforeEach } from 'vitest'
import { NavBar } from '#components'

describe('nav-bar', () => {
  let wrapper: ReturnType<typeof mountSuspended>

  beforeEach(async () => {
    wrapper = await mountSuspended(NavBar)
  })
  it('component exists', async () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('must contain nav element', async () => {
    const nav = wrapper.find('nav')
    expect(nav.exists()).toBe(true)
  })
  it('possui três links', async () => {
    const links = wrapper.findAll('a')
    expect(links.length).toBe(3)
  })
  it('link home exists', async () => {
    const home = wrapper.get('[data-testid="link-home"]')
    expect(home.attributes('href')).toBe('/')
    expect(home.text()).toBe('Home')
  })
  it('link IIRGD exists', async () => {
    const iirgd = wrapper.get('[data-testid="link-iirgd"]')
    expect(iirgd.attributes('href')).toBe('/iirgd')
    expect(iirgd.text()).toBe('IIRGD')
  })

  it('link about exists', async () => {
    const about = wrapper.get('[data-testid="link-about"]')
    expect(about.attributes('href')).toBe('/about')
    expect(about.text()).toBe('About')
  })
})
