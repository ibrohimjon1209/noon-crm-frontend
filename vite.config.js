import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from "vite-tsconfig-paths"
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  base: "/",
  server: {
<<<<<<< HEAD
    allowedHosts: [
      '2fd7-202-79-186-222.ngrok-free.app'
    ]
  }
  
=======
    allowedHosts: ['2fd7-202-79-186-222.ngrok-free.app']
  },
>>>>>>> 7264d81a4ca739d5a18757cd8157c5809447edc2
})
