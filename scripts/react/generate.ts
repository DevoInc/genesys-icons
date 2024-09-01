// Stryker disable all
import fs from 'fs';
import { resolve, dirname } from 'path';
import { pascalCase } from 'pascal-case';
import { fileURLToPath } from 'url';

import { config } from '../../config';
import { parse } from './parser';
import { getTextByTag } from './traversal';
import {
  cjsIconIndexTmpl,
  cjsIconTmpl,
  cjsIndexTmpl,
  definitionsTmpl,
  esmIconIndexTmpl,
  esmIconTmpl,
  esmIndexTmpl,
} from './templates';
import { tree2ReactElement } from './transform';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = resolve(__dirname, '..', '..');
const pkgPath = resolve(basePath, 'dist');
const processedIconsPath = resolve(pkgPath, 'icons');
const srcPath = resolve(basePath, 'icons');

// create the pkgPath dir
fs.mkdirSync(pkgPath, { recursive: true });
fs.mkdirSync(processedIconsPath, { recursive: true });

// Get all the filenames
const files = fs.readdirSync(srcPath);

// For store the name of each component
const names = [];

// Generate both templates (common and module) for each icon
files.forEach((file) => {
  const filename = resolve(srcPath, file);
  const svg = fs.readFileSync(filename, 'utf8');
  const parsedSVG = parse(svg);

  const titleText = getTextByTag(parsedSVG, 'title'); // abacus
  const name = `${config.prefix}${pascalCase(titleText)}`; // GIAbacus
  const tags = getTextByTag(parsedSVG, 'desc');
  const content = tree2ReactElement(parsedSVG.children);
  names.push(name);

  // create icon file for esm
  fs.writeFileSync(
    resolve(processedIconsPath, `${name}.jsx`),
    esmIconTmpl(name, tags, content, parsedSVG.attrs.viewBox),
    {
      encoding: 'utf8',
    },
  );

  // create icon file for cjs
  fs.writeFileSync(
    resolve(processedIconsPath, `${name}.cjsx`),
    cjsIconTmpl(name, tags, content, parsedSVG.attrs.viewBox),
    {
      encoding: 'utf8',
    },
  );
});

// Write icons/index.js file
fs.writeFileSync(
  resolve(processedIconsPath, 'index.js'),
  esmIconIndexTmpl(names),
  {
    encoding: 'utf8',
  },
);

// Write icons/index.umd.cjs file
fs.writeFileSync(
  resolve(processedIconsPath, 'index.cjs'),
  cjsIconIndexTmpl(names),
  {
    encoding: 'utf8',
  },
);

// Write index.js file
fs.writeFileSync(resolve(pkgPath, 'index.js'), esmIndexTmpl(), {
  encoding: 'utf8',
});

// Write index.cjs file
fs.writeFileSync(resolve(pkgPath, 'index.cjs'), cjsIndexTmpl(names), {
  encoding: 'utf8',
});

// Write index.d.ts file
fs.writeFileSync(resolve(pkgPath, 'index.d.ts'), definitionsTmpl(names), {
  encoding: 'utf8',
});

// Show stats in terminal
/* eslint-disable-next-line no-console */
console.log(`React: Generated ${files.length} icons!`);
