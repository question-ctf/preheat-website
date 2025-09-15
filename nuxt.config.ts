// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  
  // Static site generation configuration
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  
  // GitHub Pages deployment configuration
  app: {
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/',
    head: {
      title: '?CTF 倒计时',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '?CTF 比赛倒计时页面' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' }
      ]
    }
  },
  
  // Enable static site generation
  ssr: false
})