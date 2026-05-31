import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Local dev — proxy to local backend
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  define: {
    // Production backend URL — update after Render deploy
    __API_URL__: JSON.stringify(
      process.env.VITE_API_URL || 'http://localhost:5000'
    )
  }
})
