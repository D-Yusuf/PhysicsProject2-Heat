import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        credits: 'src/credits.html',
        code: 'src/code.html',
        calculator: 'src/js/calculator.js',
        // entry: 'main.js',
        // Add additional entries for each HTML file you want to include
      }
    }
    
  }
})
  