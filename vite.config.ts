import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Vizart-Webdev/',
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
