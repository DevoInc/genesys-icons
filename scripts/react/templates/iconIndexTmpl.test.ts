import { describe, test, expect } from 'vitest';

import { iconIndexTmpl } from './iconIndexTmpl';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('iconIndexTmpl', () => {
        test('should return the right template', () => {
          expect(iconIndexTmpl(['a', 'b', 'c']))
            .toBe(`// THIS FILE IS AUTO GENERATED
export * from './a';
export * from './b';
export * from './c';`);
        });
      });
    });
  });
});
