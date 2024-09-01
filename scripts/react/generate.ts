// Stryker disable all
import fs from 'fs';
import { resolve, dirname } from 'path';
import { pascalCase } from 'pascal-case';
import { fileURLToPath } from 'url';

import { config } from '../../config';
import { parse } from './parser';
import { getTextByTag } from './traversal';
import { iconIndexTmpl, iconTmpl } from './templates';
import { tree2ReactElement } from './transform';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = resolve(__dirname, '..', '..');
const pkgPath = resolve(basePath, 'dist');
const processedIconsPath = resolve(basePath, 'src', 'icons');
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

  // create icon file
  fs.writeFileSync(
    resolve(processedIconsPath, `${name}.tsx`),
    iconTmpl(name, tags, content, parsedSVG.attrs.viewBox),
    {
      encoding: 'utf8',
    },
  );
});

// Create icon index file
fs.writeFileSync(
  resolve(processedIconsPath, 'index.ts'),
  iconIndexTmpl(names),
  {
    encoding: 'utf8',
  },
);

// Show stats in terminal
/* eslint-disable-next-line no-console */
console.log(`React: Generated ${files.length} icons!`);
