import { describe, test, expect } from 'vitest';

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
    `export const myName = (props) => genIcon(myContent,"")(props);
myName.tags = "";`,
  ],
];

const casesCommonTmpl: [string, string, string, string][] = [
  [
    'Basic case',
    'myName',
    'myContent',
    `var myName = (props) => genIcon(myContent,"")(props);
myName.tags = "";
module.exports.myName = myName;`,
  ],
];

const casesCommonFileTmpl: [string, Icon[], string][] = [
  [
    'Basic case',
    [{ title: 'T', module: 'M', common: 'C' }],
    `// THIS FILE IS AUTO GENERATED
var genIcon = require('./lib.umd.cjs').genIcon;
var IconContext = require('./lib.umd.cjs').IconContext;
module.exports.IconContext = IconContext;
C`,
  ],
];

const casesModuleFileTmpl: [string, Icon[], string][] = [
  [
    'Basic case',
    [{ title: 'T', module: 'M', common: 'C' }],
    `// THIS FILE IS AUTO GENERATED
import { genIcon } from './lib.js';
export { IconContext } from './lib.js';
M`,
  ],
];

const casesDefinitionsTmpl: [string, Icon[], string][] = [
  [
    'Basic case',
    [{ title: 'T', module: 'M', common: 'C' }],
    `// THIS FILE IS AUTO GENERATED
import { type IconType, IconContext } from './lib.js';
export declare type IconType = IconType;
export declare const IconContext: typeof IconContext;
export declare const T: IconType;`,
  ],
];

describe('scripts', () => {
  describe('templates', () => {
    describe('moduleTmpl', () => {
      test.each(casesModuleTmpl)(
        '%s',
        (_title, name: string, content: string, expected: string) => {
          expect(moduleTmpl(name, content)).toEqual(expected);
        },
      );
    });

    describe('commonTmpl', () => {
      test.each(casesCommonTmpl)(
        '%s',
        (_title, name: string, content: string, expected: string) => {
          expect(commonTmpl(name, content, '')).toEqual(expected);
        },
      );
    });

    describe('commonFileTmpl', () => {
      test.each(casesCommonFileTmpl)(
        '%s',
        (_title, icons: Icon[], expected: string) => {
          expect(commonFileTmpl(icons)).toEqual(expected);
        },
      );
    });

    describe('moduleFileTmpl', () => {
      test.each(casesModuleFileTmpl)(
        '%s',
        (_title, icons: Icon[], expected: string) => {
          expect(moduleFileTmpl(icons)).toEqual(expected);
        },
      );
    });

    describe('definitionsTmpl', () => {
      test.each(casesDefinitionsTmpl)(
        '%s',
        (_title, icons: Icon[], expected: string) => {
          expect(definitionsTmpl(icons)).toEqual(expected);
        },
      );
    });
  });
});
