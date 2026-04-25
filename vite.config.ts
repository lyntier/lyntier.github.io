import vue from '@vitejs/plugin-vue'
import unocss from 'unocss/vite'
import { defineConfig } from 'vite'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [vue(), unocss(), nodePolyfills({
    include: ['buffer'],
    globals: {
      Buffer: true,
    },
  })],
})
