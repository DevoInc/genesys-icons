import fs from 'fs';
import glob from 'glob-promise';
import path from 'path';
import camelCase from 'camelcase';

import { config } from '../../config';
import {
  moduleTmpl,
  commonTmpl,
  moduleFileTmpl,
  commonFileTmpl,
  definitionsTmpl,
  packageTmpl,
} from './templates';
import { parse } from './parser';
import { getTextByTag } from './traversal';

const basePath = path.resolve(__dirname, '..', '..');
const pkgPath = path.resolve(basePath, 'dist');
const srcPath = path.resolve(basePath, 'icons');

// stats
const stats = { icons: 0 };

// create the pkgPath dir
fs.mkdirSync(pkgPath, { recursive: true });

// Get all the filenames
glob(`${srcPath}/*`).then(async (filenames) => {
  // Generate both templates (common and module) for each icon
  const icons = await Promise.all(
    filenames
      // .filter((_, i) => i === 0)
      .map(async (filename) => {
        const svg = fs.readFileSync(filename, 'utf8');
        const parsedSVG = await parse(svg);
        const titleText = getTextByTag(parsedSVG, 'title');
        const tags = getTextByTag(parsedSVG, 'desc');

        const title = `${config.prefix}${camelCase(titleText, {
          pascalCase: true,
        })}`;

        const content = JSON.stringify(parsedSVG);

        return {
          title,
          module: moduleTmpl(title, content, tags),
          common: commonTmpl(title, content, tags),
        };
      })
  );

  // Write index.js file
  const outCommon = path.resolve(pkgPath, 'index.js');
  fs.writeFileSync(outCommon, commonFileTmpl(icons), { encoding: 'utf8' });

  // Write index.esm.js file
  const outModule = path.resolve(pkgPath, 'index.esm.js');
  fs.writeFileSync(outModule, moduleFileTmpl(icons), { encoding: 'utf8' });

  // Write index.d.ts file
  const outDefinitions = path.resolve(pkgPath, 'index.d.ts');
  fs.writeFileSync(outDefinitions, definitionsTmpl(icons), {
    encoding: 'utf8',
  });

  // Write package file
  const outPackage = path.resolve(pkgPath, 'package.json');
  fs.writeFileSync(outPackage, packageTmpl(), { encoding: 'utf8' });

  // Increments stats
  stats.icons += filenames.length;

  // Show stats in terminal
  console.log(`React: Generated ${stats.icons} icons!`);
});
