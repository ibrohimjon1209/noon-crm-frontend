import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    allowedHosts: [
      '9549-202-79-188-194.ngrok-free.app'
    ]
  }
})

