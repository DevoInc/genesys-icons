import { describe, test, expect } from 'vitest';

import { definitionsTmpl } from './definitionsTmpl';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('definitionsTmpl', () => {
        test('should return the right template', () => {
          expect(definitionsTmpl(['a', 'b', 'c']))
            .toBe(`// THIS FILE IS AUTO GENERATED
import { type FC } from 'react';
import { type IIcon, IconContext } from './lib.js';
export declare type IIcon = IIcon;
export declare const IconContext: typeof IconContext;
export declare const a: FC<IIcon>;
export declare const b: FC<IIcon>;
export declare const c: FC<IIcon>;`);
        });
      });
    });
  });
});
