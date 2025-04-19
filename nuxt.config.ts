// nuxt.config.js
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
    }
  },
  app: {
    head: {
      title: 'Travagir - Vols, Hôtels, Hajj & Omra en Tunisie',
      meta: [
        { name: 'description', content: 'Travagir est votre partenaire de confiance en Tunisie pour réserver des vols, hôtels, séjours Hajj et Omra facilement et en toute sécurité.' },
        { name: 'keywords', content: 'Travagir, Tunisie, réservation vol, hôtel, voyage, Hajj, Omra, vacances, billets d\'avion' },
        { name: 'author', content: 'Travagir' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { charset: 'utf-8' }
      ],
      link: [
        { rel: 'icon', type:'image/png', href: '/favicon.png' } // 👈 Your custom favicon
      ]
    }
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  // Add the required modules
  modules: [
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/scripts',
    '@nuxt/image',
    '@pinia/nuxt'
  ],
  plugins: ['~/plugins/element-plus.js']

})
