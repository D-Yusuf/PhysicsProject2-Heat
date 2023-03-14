import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        game: 'src/game.html',
        // entry: 'main.js',
        // Add additional entries for each HTML file you want to include
      }
    }
    
  }
})
  