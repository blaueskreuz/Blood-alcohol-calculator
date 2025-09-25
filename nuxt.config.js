export default defineNuxtConfig({
  css: ['@/assets/scss/app.scss'],
  plugins: [
    '~/plugins/globals.client.js',
    '~/plugins/globals',
    '~/plugins/i18n'
  ],
  app: {
    head: {
      title: 'Alkohol-Rechner | Blaues Kreuz',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: 'Blaues Kreuz' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Raleway:400,500,600,700&display=swap'
        }
      ],
      script: [
        {
          src: '/js/hotjar.js'
        }
      ]
    }
  },

  loadingIndicator: {
    color: '#fff'
  },

  build: {
    transpile: ['vue-countup-v3']
  },

  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss']
})
