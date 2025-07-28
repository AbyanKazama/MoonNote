import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: 'dist',
  },
  // ⬇️ ini bagian penting biar routing client-side Vite bisa jalan di Netlify/Vercel
  server: {
    fs: {
      strict: false
    }
  },
  base: '/',
})
