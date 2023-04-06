import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        calculator: 'src/js/calculator.js',
        entry: 'main.js',
        projectileMotion: 'src/js/projectileMotion.js'
        // code: 'src/code.html',
        // credits: 'src/credits.html',
        // Add additional entries for each HTML file you want to include
      }
    }
    
  }
})
  