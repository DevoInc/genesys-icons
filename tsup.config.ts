import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  sourcemap: true,
  clean: true,
  dts: true,
  minify: 'terser',
  format: ['esm', 'cjs'],
  metafile: true,
  treeshake: true,
  external: ['react'],
});
