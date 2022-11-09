import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/example-wc-lit-vite.ts',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/
    }
  }
})
