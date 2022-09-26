import fs from 'fs';
import { config } from '../../config';
import path from 'path';
import { getIconsInfo } from '../iconExtraction';

const basePath = path.resolve(__dirname, '..', '..');
const pkgPath = path.resolve(basePath, 'dist');
const srcPath = path.resolve(
  basePath,
  'dist',
  `${config.fontName}-variables.scss`
);

// create the pkgPath dir
fs.mkdirSync(pkgPath, { recursive: true });

const raw = String(fs.readFileSync(srcPath));
const icons = getIconsInfo(raw);

// Write JS file
const iconsFilePath = path.resolve(pkgPath, 'icon-variables.js');
fs.writeFileSync(
  iconsFilePath,
  `'use strict';

module.exports = {
  ${icons.map((icon) => `${icon.key}: '\\${icon.code}'`).join(',\n  ')}
};
`,
  { encoding: 'utf8' }
);

console.log(
  icons.length
    ? `JS:  Generated ${icons.length} exported icon contents!`
    : 'No icon contents were generated for JS dist.'
);
