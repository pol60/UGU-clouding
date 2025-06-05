import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          echarts: ['echarts'],
        },
      },
    },
  },
  server: {
    open: true,
  },
  base: '/UGU-clouding/', // <--- ВАЖНО для GitHub Pages
});
