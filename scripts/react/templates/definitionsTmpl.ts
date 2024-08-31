import { autoGen } from './contants';

export const definitionsTmpl = (names: string[]) => `${autoGen}
import { type FC } from 'react';
import { type IIcon, IconContext } from './lib.js';
export declare type IIcon = IIcon;
export declare const IconContext: typeof IconContext;
${names.map((name) => `export declare const ${name}: FC<IIcon>;`).join('\n')}`;
