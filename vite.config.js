import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path';

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    allowedHosts: ['2fd7-202-79-186-222.ngrok-free.app']
  },
})
