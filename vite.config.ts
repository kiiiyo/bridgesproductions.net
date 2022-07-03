import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin()],
  build: {
    outDir: 'public',
    polyfillDynamicImport: false,
    target: 'esnext'
  }
})
