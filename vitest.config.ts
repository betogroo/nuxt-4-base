import { defineVitestConfig } from '@nuxt/test-utils/config'

export default defineVitestConfig({
  test: {
    globals: true,
    environment: 'nuxt',
    setupFiles: ['tests/setup.ts'],
    // include: ['tests/**/*.test.ts', 'tests/**/*.spec.ts'],
  },
})
