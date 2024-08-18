// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "@nuxtjs/color-mode",
  ],

  content: {
    highlight: {
      theme: "light-plus",
    },
    documentDriven: true,
    markdown: {
      remarkPlugins: [],
      rehypePlugins: [
        ['rehype-raw', { passThrough: ['i'] }]
      ]
    }
  },

  googleFonts: {
    families: {
      Merriweather: [400, 700],
      "Merriweather Sans": [400, 700],
      "Noto Serif TC": [300, 600],
    },
    download: true, // Download the fonts and serve them locally
  },

  colorMode: {
    classSuffix: "",
  },

  app: {
    head: {
      titleTemplate: '%s | Practice makes perfect',
      // title: 'Default Title', // This is the default title for pages without a specific title
    },
  },

  compatibilityDate: "2024-08-17",
})