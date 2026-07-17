import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 1. Import it

export default defineConfig({
  build: {
    outDir: 'build',
  },
  plugins: [
    react(), 
    tailwindcss(),
  ],
})
