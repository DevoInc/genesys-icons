import fs from 'fs';
import path from 'path';
import svgtofont from 'svgtofont';
import { config } from '../../config';

// paths
const basePath = path.resolve(__dirname, '..', '..');
const pkgPath = path.resolve(basePath, 'dist');
const srcPath = path.resolve(basePath, 'icons');

// create the pkgPath if not exists
fs.mkdirSync(pkgPath, { recursive: true });

// create the group font
svgtofont({
  src: srcPath,
  dist: pkgPath,
  fontName: config.fontName,
  css: true,
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
}).then(() => {
  console.log('Font: Generated dali-icons font!');
});
