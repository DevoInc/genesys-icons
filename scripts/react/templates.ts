import { Icon } from './declarations';

const autoGen = '// THIS FILE IS AUTO GENERATED';

export const moduleTmpl = (name: string, content: string, tags = '') =>
  `export const ${name} = (props) => genIcon(${content},"${tags}")(props);
${name}.tags = "${tags}";`;

export const commonTmpl = (name: string, content: string, tags = '') =>
  `var ${name} = (props) => genIcon(${content},"${tags}")(props);
${name}.tags = "${tags}";
module.exports.${name} = ${name};`;

export const commonFileTmpl = (icons: Icon[]) => `${autoGen}
var genIcon = require('./lib.umd.js').genIcon;
var IconContext = require('./lib.umd.js').IconContext;
module.exports.IconContext = IconContext;
${icons.map((icon) => icon.common).join('\n')}`;

export const moduleFileTmpl = (icons: Icon[]) => `${autoGen}
import { genIcon } from './lib.mjs';
export { IconContext } from './lib.mjs';
${icons.map((icon) => icon.module).join('\n')}`;

export const definitionsTmpl = (icons: Icon[]) => `${autoGen}
import { type IconType, IconContext } from './lib.mjs';
export declare type IconType = IconType;
export declare const IconContext: typeof IconContext;
${icons
  .map((icon) => `export declare const ${icon.title}: IconType;`)
  .join('\n')}`;
