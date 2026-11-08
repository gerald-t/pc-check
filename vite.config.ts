import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// GitHub Pages serves this repository beneath /pc-check/.
export default defineConfig({
  plugins: [react()],
  base: '/pc-check/',
});
