import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import os from 'os'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: path.join(os.tmpdir(), 'vite-cache-' + Date.now()),
  optimizeDeps: {
    force: true,
    esbuildOptions: {
      target: 'es2020'
    }
  },
  server: {
    fs: {
      strict: false
    },
    host: true,
    port: 5173
  }
})
