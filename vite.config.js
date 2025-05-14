import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.', // make sure this is present
  build: {
    rollupOptions: {
      input: 'public/index.html' // <-- THIS IS THE KEY FIX
    },
    outDir: 'dist'
  }
})
