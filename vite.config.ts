import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5341,
    strictPort: false,
  },
  build: {
    target: 'es2020',
    cssCodeSplit: true,
  },
})
