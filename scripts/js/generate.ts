import fs from 'fs';
import { config } from '../../config';
import path from 'path';
import { getIconsInfo } from '../iconExtraction';

const basePath = path.resolve(__dirname, '..', '..');
const pkgPath = path.resolve(basePath, 'dist');
const srcPath = path.resolve(
  basePath,
  'dist',
  `${config.fontName}-variables.scss`,
);

// create the pkgPath dir
fs.mkdirSync(pkgPath, { recursive: true });

const raw = String(fs.readFileSync(srcPath));
const icons = getIconsInfo(raw);

// Write CJS file
const iconsCJSPath = path.resolve(pkgPath, 'icon-variables.js');
fs.writeFileSync(
  iconsCJSPath,
  `'use strict';

module.exports = {
  ${icons.map((icon) => `gi_${icon.key}: '\\${icon.code}'`).join(',\n  ')},
};
`,
  { encoding: 'utf8' },
);

// Write ESM file
const iconsESMPath = path.resolve(pkgPath, 'icon-variables.mjs');
fs.writeFileSync(
  iconsESMPath,
  `
export default {
  ${icons.map((icon) => `gi_${icon.key}: '\\${icon.code}'`).join(',\n  ')},
};
`,
  { encoding: 'utf8' },
);

console.log(
  icons.length
    ? `JS:  Generated ${icons.length} exported icon contents!`
    : 'No icon contents were generated for JS dist.',
);
