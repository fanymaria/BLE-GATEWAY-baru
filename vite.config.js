import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 4050,
    proxy: {
      '/api': {
        target: 'http://36.92.47.218:14519',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '/api'),
      },
    },
  },
});
