import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'


export default defineNuxtConfig({
  typescript: {
    shim: false
  },
  experimental: {
    reactivityTransform: true
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