/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'lib',
      fileName: 'lib',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    },
  },
  plugins: [react()],
  test: {
    environment: 'happy-dom',
    include: ['{src,scripts}/**/*.test.ts?(x)'],
  },
});
