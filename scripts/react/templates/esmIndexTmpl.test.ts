import { describe, test, expect } from 'vitest';

import { esmIndexTmpl } from './esmIndexTmpl';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('esmIndexTmpl', () => {
        test('should return the right template', () => {
          expect(esmIndexTmpl()).toBe(`// THIS FILE IS AUTO GENERATED
export { IconContext } from './lib.js';
export * from './icons/index.js';`);
        });
      });
    });
  });
});
