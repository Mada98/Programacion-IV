/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Permite usar 'describe', 'it', 'expect' globalmente sin importar
    environment: 'jsdom', // Simula un entorno de navegador para renderizar componentes
    setupFiles: './src/setupTests.ts',
  },
})
