// Stryker disable all
import fs from 'fs';
import { resolve, dirname } from 'path';
import svgtofont from 'svgtofont';
import { fileURLToPath } from 'url';

import { config } from '../../config';
import { getEditedIconClasses } from './classEdition';
import { getPreviousCharCodes } from './utils';

// paths
const iconsLockFileName = 'icons-lock.json';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = resolve(__dirname, '..', '..');
const pkgPath = resolve(basePath, 'dist');
const srcPath = resolve(basePath, 'icons');
const infoCodesPath = resolve(basePath, 'scripts', 'font', iconsLockFileName);
const updateInfoData = process.argv.includes('--ci');

let counter = 0;
const newIcons = {};
const previousCharCodes = getPreviousCharCodes(infoCodesPath);

const getNextFreeNumber = () => {
  counter += 1;
  return Math.max(...Object.values(previousCharCodes)) + counter;
};

const getIconUnicode = (name: string): [string, number] => {
  if (previousCharCodes[name]) {
    const number = previousCharCodes[name];
    const cssHexadecimal = String.fromCharCode(number);
    return [cssHexadecimal, number];
  }
  // eslint-disable-next-line no-console
  console.log('New icon', name);
  const nextNumber = getNextFreeNumber();
  const cssHexadecimal = String.fromCharCode(nextNumber);
  newIcons[name] = nextNumber;
  return [cssHexadecimal, nextNumber];
};

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
  fontName: `${config.fontName}`,
  css: {
    fileName: `${config.fontName}-styles`,
    // BEWARE: Bad practice ahead.
    // We needed to pass extra css props somehow.
    fontSize: `inherit;  ${strProps}`,
  },
  svgicons2svgfont: { fontHeight: 1000, normalize: true },
  getIconUnicode: getIconUnicode, // Custom function to get the unicode of the icon
})
  .then(() => {
    /* eslint-disable-next-line no-console */
    console.log('Font: Generated icons fonts!');

    const stylesFile = resolve(pkgPath, `${config.fontName}-styles.scss`);
    const allStyles = fs.readFileSync(stylesFile).toString();
    const [fontFace, classGeneric, classes, variables] =
      allStyles.split('\n\n');

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
  })
  .then(() => {
    if (Object.keys(newIcons).length > 0 && !updateInfoData) {
      throw new Error(
        `There are new icons not included in ${iconsLockFileName} file. Run the generate:font:ci script to update the file and commit the changes.`,
      );
    }

    if (updateInfoData) {
      // eslint-disable-next-line no-console
      console.log(`Updating ${iconsLockFileName} file`);
      fs.writeFileSync(
        infoCodesPath,
        JSON.stringify({ ...previousCharCodes, ...newIcons }, null, 2),
      );
    }
  });
