import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/IconBase.tsx',
  output: [
    {
      file: 'dist/IconBase.js',
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: 'dist/IconBase.esm.js',
      format: 'es',
      sourcemap: true,
    },
  ],
  plugins: [typescript(), terser()],
  external: ['react'],
};
