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
  ],
  app: {
    head: {
      title: 'Nuxt 4 Base',
    },
  },
  supabase: {
    redirectOptions: {
      exclude: ['/about'],
      callback: '/confirm',
      login: '/',
      saveRedirectToCookie: true,
    },

    redirect: true,
  },
})
