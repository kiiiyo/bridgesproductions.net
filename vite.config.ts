import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import path from 'path'

export default defineConfig({
  plugins: [solidPlugin()],
  server: {
    port: 8080
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    polyfillDynamicImport: false,
    target: 'esnext'
  },
  resolve: {
    alias: {
      '@/': path.join(__dirname, 'src/')
    }
  }
})
