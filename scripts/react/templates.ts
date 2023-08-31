import { Icon } from './declarations';

const autoGen = '// THIS FILE IS AUTO GENERATED';

export const moduleTmpl = (name: string, content: string, tags = '') =>
  `export const ${name} = (props) => genIcon(${content},"${tags}")(props);`;

export const commonTmpl = (name: string, content: string, tags = '') =>
  `module.exports.${name} = (props) => genIcon(${content},"${tags}")(props);`;

export const commonFileTmpl = (icons: Icon[]) => `${autoGen}
var genIcon = require('./IconBase.umd.js').genIcon;
${icons.map((icon) => icon.common).join('\n')}`;

export const moduleFileTmpl = (icons: Icon[]) => `${autoGen}
import { genIcon } from './IconBase.mjs';
${icons.map((icon) => icon.module).join('\n')}`;

export const definitionsTmpl = (icons: Icon[]) => `${autoGen}
import { IconType } from './IconBase.mjs';
export declare type IconType = IconType;
${icons
  .map((icon) => `export declare const ${icon.title}: IconType;`)
  .join('\n')}`;

export const packageTmpl = () => `{
  "sideEffects": false,
  "module": "./index.esm.js"
}`;
