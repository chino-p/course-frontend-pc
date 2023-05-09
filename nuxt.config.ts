import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

const date = new Date();
date.setDate(date.getDate() + 7);

export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  experimental: {
    reactivityTransform: true
  },
  modules: [
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
  ],
  piniaPersistedstate: {
    cookieOptions: {
      expires: new Date(),
      maxAge: 3600 * 24 * 7,
      sameSite: 'strict',
    },
    storage: 'cookies'
  },
  vite: {
    plugins: [
      Components({
        resolvers: [
          AntDesignVueResolver(),
        ],
      })
    ]
  }
})
