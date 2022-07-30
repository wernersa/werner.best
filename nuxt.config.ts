import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  app: {
    baseURL: '/werner.best/',
    //    cdnURL: 'https://wernersa.github.io/werner.best/',
  },
  ssr: 'false',
  target: 'static',
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt'
    // TODO: Consider adding store: '@pinia/nuxt',
    // TODO: Consider privacy oriented analytics tools, i.e. Plausible ('vue-plausible') or Umami
  ],
  css: [
    '@/assets/css/main.css'
    // https://color-mode.nuxtjs.org
  ],
  colorMode: {
    classSuffix: ''
  },
  // https://content.nuxtjs.org
  content: {
    navigation: {
      fields: ['navTitle', 'navigation']
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: 'dracula'
    }
  }
})
