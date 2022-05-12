import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import mkcert from 'vite-plugin-mkcert'
import ViteImages from 'vite-plugin-vue-images'

// https://vitejs.dev/config/
export default defineConfig({
  server: { https: true },
  plugins: [vue() ,mkcert() ,ViteImages()],
  css: {
    preprocessorOptions: {
      sass: {
        additionalData: `
        @import "./src/sass/_variables.sass"
        `,
      },
    }
  },
  
})
