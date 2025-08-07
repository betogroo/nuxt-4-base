import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'nuxt',
    // include: ['tests/**/*.test.ts', 'tests/**/*.spec.ts'],
  },
})
