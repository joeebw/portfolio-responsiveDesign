// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        blog: resolve(__dirname, '/pages/blog.html'),
        works: resolve(__dirname, '/pages/works.html'),
        workDetail: resolve(__dirname, '/pages/work/work-detail.html')
      },
    },
  },
})
