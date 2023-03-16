import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        game: 'src/game.html',
        calculator: 'src/js/calculator.js',
        // entry: 'main.js',
        // Add additional entries for each HTML file you want to include
      }
    }
    
  }
})
  