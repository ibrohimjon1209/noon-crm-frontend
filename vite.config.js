import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    allowedHosts: [
      'ea07-213-230-72-25.ngrok-free.app'
    ]
  }
})

