// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    '@nuxt/eslint',
    'vuetify-nuxt-module',
    '@nuxt/test-utils/module',
    '@vueuse/nuxt',
    '@nuxtjs/supabase',
    '@pinia/nuxt',
    '@nuxt/icon',
  ],
  app: {
    head: {
      title: 'Nuxt 4 Base',
    },
  },
  supabase: {
    redirectOptions: {
      include: ['/iirgd'],
      callback: '/confirm',
      login: '/auth/login',
      saveRedirectToCookie: true,
    },

    redirect: true,
  },
  imports: {
    dirs: ['utils/**'],
  },
})
