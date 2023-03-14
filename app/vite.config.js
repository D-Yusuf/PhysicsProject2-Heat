import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    main:resolve(__dirname, 'index.html'),
    entry: resolve(__dirname, 'main.js'),
  }
})
  