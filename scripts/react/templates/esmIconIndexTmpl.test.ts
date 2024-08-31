import { describe, test, expect } from 'vitest';

import { esmIconIndexTmpl } from './esmIconIndexTmpl';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('esmIconIndexTmpl', () => {
        test('should return the right template', () => {
          expect(esmIconIndexTmpl(['a', 'b', 'c']))
            .toBe(`// THIS FILE IS AUTO GENERATED
export * from './a.jsx';
export * from './b.jsx';
export * from './c.jsx';`);
        });
      });
    });
  });
});
