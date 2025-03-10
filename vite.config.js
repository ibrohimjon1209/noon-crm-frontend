// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import tsconfigPaths from 'vite-tsconfig-paths'

// export default defineConfig({
//   plugins: [react(), tsconfigPaths()],
//   base: "/",
//   server: {
//     allowedHosts: [
//       '2fd7-202-79-186-222.ngrok-free.app'
//     ]
//   },
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  base: "/",
  server: {
    allowedHosts: [
      '2fd7-202-79-186-222.ngrok-free.app'
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
