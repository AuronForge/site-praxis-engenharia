import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@pages': path.resolve(__dirname, './src/pages'),
      '@core': path.resolve(__dirname, './src/core'),
      '@ui-components': path.resolve(__dirname, './src/ui-components'),
      '@services': path.resolve(__dirname, './src/services'),
    },
  },
  define: {
    'process.env': {},
  },
  server: {
    port: 4200,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
        },
      },
    },
  },
});
