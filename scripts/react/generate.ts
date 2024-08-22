import fs from 'fs';
import { resolve, dirname } from 'path';
import { pascalCase } from 'pascal-case';
import { fileURLToPath } from 'url';

import { config } from '../../config';
import {
  moduleTmpl,
  commonTmpl,
  moduleFileTmpl,
  commonFileTmpl,
  definitionsTmpl,
} from './templates';
import { parse } from './parser';
import { getTextByTag } from './traversal';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = resolve(__dirname, '..', '..');
const pkgPath = resolve(basePath, 'dist');
const srcPath = resolve(basePath, 'icons');

// create the pkgPath dir
fs.mkdirSync(pkgPath, { recursive: true });

// Get all the filenames
fs.readdir(srcPath, async (err, files) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  // Generate both templates (common and module) for each icon
  const icons = await Promise.all(
    files.map(async (file) => {
      const filename = resolve(srcPath, file);
      const svg = fs.readFileSync(filename, 'utf8');
      const parsedSVG = await parse(svg);
      const titleText = getTextByTag(parsedSVG, 'title');
      const tags = getTextByTag(parsedSVG, 'desc');

      const title = `${config.prefix}${pascalCase(titleText)}`;

      const content = JSON.stringify(parsedSVG);

      return {
        title,
        module: moduleTmpl(title, content, tags),
        common: commonTmpl(title, content, tags),
      };
    }),
  );

  // Write index.js file
  const outCommon = resolve(pkgPath, 'index.umd.cjs');
  fs.writeFileSync(outCommon, commonFileTmpl(icons), { encoding: 'utf8' });

  // Write index.esm.js file
  const outModule = resolve(pkgPath, 'index.js');
  fs.writeFileSync(outModule, moduleFileTmpl(icons), { encoding: 'utf8' });

  // Write index.d.ts file
  const outDefinitions = resolve(pkgPath, 'index.d.ts');
  fs.writeFileSync(outDefinitions, definitionsTmpl(icons), {
    encoding: 'utf8',
  });

  // Show stats in terminal
  console.log(`React: Generated ${files.length} icons!`);
});
