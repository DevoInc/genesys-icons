// Stryker disable all
import fs from 'fs';
import { resolve, dirname } from 'path';
import svgtofont from 'svgtofont';
import { fileURLToPath } from 'url';

import { config } from '../../config';
import { getEditedIconClasses } from './classEdition';

// paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = resolve(__dirname, '..', '..');
const pkgPath = resolve(basePath, 'dist');
const srcPath = resolve(basePath, 'icons');

// create the pkgPath if not exists
fs.mkdirSync(pkgPath, { recursive: true });

const customCSSProps = {
  'font-weight': 'normal',
  'font-variant': 'normal',
  'text-transform': 'none',
  'line-height': '1',
};

const strProps = Object.entries(customCSSProps).reduce((prev, curr) => {
  return `${prev}\n  ${curr[0]}: ${curr[1]};`;
}, '');

// create the group font
svgtofont({
  src: srcPath,
  dist: pkgPath,
  fontName: config.fontName,
  css: {
    fileName: `${config.fontName}-styles`,
    // BEWARE: Bad practice ahead.
    // We needed to pass extra css props somehow.
    fontSize: `inherit;  ${strProps}`,
  },
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
}).then(() => {
  /* eslint-disable-next-line no-console */
  console.log('Font: Generated icons fonts!');

  const stylesFile = resolve(pkgPath, `${config.fontName}-styles.scss`);
  const allStyles = fs.readFileSync(stylesFile).toString();
  const [fontFace, classGeneric, classes, variables] = allStyles.split('\n\n');

  // Writting the SCSS variables file
  const variablesFile = resolve(pkgPath, `${config.fontName}-variables.scss`);
  fs.writeFileSync(variablesFile, variables, { encoding: 'utf8' });

  // Rewrite styles file with classes referencing to SCSS variables
  fs.writeFileSync(
    stylesFile,
    `${fontFace}\n\n${classGeneric}\n\n${getEditedIconClasses(classes)}`,
    { encoding: 'utf8' },
  );

  // Writting base SCSS file with the imports of both variables and styles
  const baseFile = resolve(pkgPath, `${config.fontName}.scss`);
  const baseContent = `// VARIABLES
@import '${config.fontName}-variables';

// ${config.fontName} FONT STYLES
@import '${config.fontName}-styles';`;
  fs.writeFileSync(baseFile, baseContent, { encoding: 'utf8' });
});
