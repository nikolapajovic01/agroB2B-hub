// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    // port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        // Ako u server.ts piše: app.use('/api/company', ...)
        // OVA LINIJA MORA POSTOJATI:
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});


