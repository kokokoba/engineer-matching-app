module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'src',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config) {
      if (process.server && process.browser) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa'
  ],
  axios: {
    // proxyHeaders: false
  },
  manifest: {
    name: "ema",
    short_name: "ema",
    lang: 'ja',
    icons: [
      {
        "src": "/img/icons/android-chrome-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/img/icons/android-chrome-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ],
    background_color: "#000000",
    theme_color: "#4DBA87"
  },
  workbox: {
    dev: true,
  },
}

