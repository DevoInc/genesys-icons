import { Icon } from './declarations';
import {
  commonFileTmpl,
  commonTmpl,
  definitionsTmpl,
  moduleFileTmpl,
  moduleTmpl,
} from './templates';

const casesModuleTmpl: [string, string, string, string][] = [
  [
    'Basic case',
    'myName',
    'myContent',
    'export const myName = (props) => genIcon(myContent,"")(props);',
  ],
];

const casesCommonTmpl: [string, string, string, string][] = [
  [
    'Basic case',
    'myName',
    'myContent',
    'module.exports.myName = (props) => genIcon(myContent,"")(props);',
  ],
];

const casesCommonFileTmpl: [string, Icon[], string][] = [
  [
    'Basic case',
    [{ title: 'T', module: 'M', common: 'C' }],
    `// THIS FILE IS AUTO GENERATED
var genIcon = require('./IconBase.umd.js').genIcon;
C`,
  ],
];

const casesModuleFileTmpl: [string, Icon[], string][] = [
  [
    'Basic case',
    [{ title: 'T', module: 'M', common: 'C' }],
    `// THIS FILE IS AUTO GENERATED
import { genIcon } from './IconBase.mjs';
M`,
  ],
];

const casesDefinitionsTmpl: [string, Icon[], string][] = [
  [
    'Basic case',
    [{ title: 'T', module: 'M', common: 'C' }],
    `// THIS FILE IS AUTO GENERATED
import { IconType } from './IconBase.esm.js';
export declare type IconType = IconType;
export declare const T: IconType;`,
  ],
];

describe('scripts', () => {
  describe('templates', () => {
    describe('moduleTmpl', () => {
      it.each(casesModuleTmpl)(
        '%s',
        (_title, name: string, content: string, expected: string) => {
          expect(moduleTmpl(name, content)).toEqual(expected);
        },
      );
    });

    describe('commonTmpl', () => {
      it.each(casesCommonTmpl)(
        '%s',
        (_title, name: string, content: string, expected: string) => {
          expect(commonTmpl(name, content, '')).toEqual(expected);
        },
      );
    });

    describe('commonFileTmpl', () => {
      it.each(casesCommonFileTmpl)(
        '%s',
        (_title, icons: Icon[], expected: string) => {
          expect(commonFileTmpl(icons)).toEqual(expected);
        },
      );
    });

    describe('moduleFileTmpl', () => {
      it.each(casesModuleFileTmpl)(
        '%s',
        (_title, icons: Icon[], expected: string) => {
          expect(moduleFileTmpl(icons)).toEqual(expected);
        },
      );
    });

    describe('definitionsTmpl', () => {
      it.each(casesDefinitionsTmpl)(
        '%s',
        (_title, icons: Icon[], expected: string) => {
          expect(definitionsTmpl(icons)).toEqual(expected);
        },
      );
    });
  });
});
