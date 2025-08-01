import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config
export default defineConfig({
  plugins: [react()],
  root: resolve(__dirname, 'renderer'),
  build: {
    outDir: resolve(__dirname, '.vite/renderer'),
    emptyOutDir: true
  }
});
