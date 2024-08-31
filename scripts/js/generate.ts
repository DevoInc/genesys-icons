// Stryker disable all
import fs from 'fs';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';

import { config } from '../../config';
import { getIconsInfo } from './iconExtraction';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = resolve(__dirname, '..', '..');
const pkgPath = resolve(basePath, 'dist');
const srcPath = resolve(basePath, 'dist', `${config.fontName}-variables.scss`);

// create the pkgPath dir
fs.mkdirSync(pkgPath, { recursive: true });

const raw = String(fs.readFileSync(srcPath));
const icons = getIconsInfo(raw);

// Write CJS file
const iconsCJSPath = resolve(pkgPath, 'icon-variables.cjs');
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
const iconsESMPath = resolve(pkgPath, 'icon-variables.js');
fs.writeFileSync(
  iconsESMPath,
  `
export default {
  ${icons.map((icon) => `gi_${icon.key}: '\\${icon.code}'`).join(',\n  ')},
};
`,
  { encoding: 'utf8' },
);

/* eslint-disable-next-line no-console */
console.log(
  icons.length
    ? `JS:  Generated ${icons.length} exported icon contents!`
    : 'No icon contents were generated for JS dist.',
);
