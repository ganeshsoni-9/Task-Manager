import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,   // mobile pe same WiFi se open karne ke liye
    port: 5173
  },
})