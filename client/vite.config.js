import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/api": {
        target: 'http://localhost:9000',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '/api/v1'),
      },
    },
  },
  plugins: [
    react(),    
    tailwindcss(), 
  ],
  base: "/",
});