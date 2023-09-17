import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/coffeecup',
  build: {
    outDir: './build'
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  }
})
