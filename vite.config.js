import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer'

export default defineConfig({
  plugins: [react(), ViteImageOptimizer({
    test: /\.(jpe?g|png)$/,
    include: 'src/**/*',
    limit: 102400,
    deleteOriginalAssets: false,
    favicons: false,
    webp: {
      encodeOptions: {
        quality: 80
      }
    }
  })],
  base: './',
  server: {
    host: true,
    port: 5176
  }
})
