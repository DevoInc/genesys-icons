// Stryker disable all
import { readdirSync } from 'node:fs';
import { resolve, dirname, basename } from 'node:path';
import { fileURLToPath } from 'node:url';
import { checkInvalidCharacter } from './validations';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const basePath = resolve(__dirname, '..', '..', '..');
const iconsPath = resolve(basePath, 'icons');

const icons = readdirSync(iconsPath);
const names = icons.map((filename) => basename(filename, '.svg'));

const errors = names.reduce(
  (prev, name) => prev.concat(checkInvalidCharacter(name)),
  [],
);

if (errors.length > 0) {
  /* eslint-disable-next-line no-console */
  console.error(
    '\x1b[31mThere is a problem with the name of the icons:\x1b[0m',
  );

  errors.forEach((wrongName) => {
    /* eslint-disable-next-line no-console */
    console.error(`\x1b[31m- "${wrongName.name}": ${wrongName.reason}\x1b[0m`);
  });

  process.exit(1);
}

/* eslint-disable-next-line no-console */
console.info('\x1b[32mEvery icon name is ok!\x1b[0m');

process.exit(0);
