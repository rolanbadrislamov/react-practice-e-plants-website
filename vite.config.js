import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://rolanbadrislamov.github.io/react-practice-e-plants-website/",
  plugins: [react()],
})
