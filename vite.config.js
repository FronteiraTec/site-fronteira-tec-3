import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "https://github.com/FronteiraTec/site-fronteira-tec-2.git",
  plugins: [react()]
})
