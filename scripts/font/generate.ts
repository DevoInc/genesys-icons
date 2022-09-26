import fs from 'fs';
import path from 'path';
import svgtofont from 'svgtofont';
import { config } from '../../config';
import { getEditedIconClasses } from './classEdition';

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
  css: {
    fileName: `${config.fontName}-styles`,
  },
  svgicons2svgfont: {
    fontHeight: 1000,
    normalize: true,
  },
}).then(() => {
  console.log('Font: Generated icons fonts!');

  const stylesFile = path.resolve(pkgPath, `${config.fontName}-styles.scss`);
  const allStyles = fs.readFileSync(stylesFile).toString();
  const [fontFace, classGeneric, classes, variables] = allStyles.split('\n\n');

  // Writting the SCSS variables file
  const variablesFile = path.resolve(
    pkgPath,
    `${config.fontName}-variables.scss`
  );
  fs.writeFileSync(variablesFile, variables, { encoding: 'utf8' });

  // Rewrite styles file with classes referencing to SCSS variables
  fs.writeFileSync(
    stylesFile,
    `${fontFace}\n\n${classGeneric}\n\n${getEditedIconClasses(classes)}`,
    { encoding: 'utf8' }
  );

  // Writting base SCSS file with the imports of both variables and styles
  const baseFile = path.resolve(pkgPath, `${config.fontName}.scss`);
  const baseContent = `// VARIABLES
@import '${config.fontName}-variables';

// ${config.fontName} FONT STYLES
@import '${config.fontName}-styles';`;
  fs.writeFileSync(baseFile, baseContent, { encoding: 'utf8' });
});
