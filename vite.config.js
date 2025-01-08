import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
//dddddddddddddddddddddddddd
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
})
