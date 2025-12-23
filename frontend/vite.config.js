import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true, // Crucial: tricks backend into thinking request comes from port 5000
        secure: false,      // Crucial: allows proxying even if https/certs aren't perfect
      },
    },
  }
})