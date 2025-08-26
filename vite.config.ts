import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  root: './src/main',
  build: {
    outDir: '../../dist',
    emptyOutDir: true,
  },
  plugins: [react({ jsxImportSource: '@simpreact/simpreact' })],
});
