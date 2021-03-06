export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: 6060, // default: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Jonathan Thuayre',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          "Intégrateur et développeur front-end spécialisé en vue.js, j'accompagne les agences et les DA dans leurs projet web. Bienvenue dans mon portfolio !",
      },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/favicon.png' },
    ],
  },

  generate: {
    fallback: true,
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@assets/css/index.css', '@assets/css/transition.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      sass: {
        implementation: require('sass'),
      },
      scss: {
        implementation: require('sass'),
      },
    },
  },
}
