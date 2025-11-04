import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/o/formulari-reclamacions-tib',
  build: {
    
    commonjsOptions: {
      include: [], // evita transformar node_modules
    },

    target: 'esnext',
    outDir: './vite-build',
    modulePreload: true,
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    }
    
  },
  
  optimizeDeps: {
    exclude: ['react'],//, 'react-dom'], --> Si poses react-dom com exclude no
  },

  plugins: [
    react(),
  ]
})