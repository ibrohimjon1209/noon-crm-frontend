import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  server: {

    allowedHosts: [
      '2fd7-202-79-186-222.ngrok-free.app'
    ]
  },
})

