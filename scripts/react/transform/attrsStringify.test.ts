import { describe, test, expect } from 'vitest';

import { attrsStringify } from './attrsStringify';

describe('scripts', () => {
  describe('react', () => {
    describe('transform', () => {
      describe('attrsStringify', () => {
        test('should return attrs stringified', () => {
          expect(attrsStringify({ a: 1, b: true, c: 'aaa' })).toStrictEqual(
            'a={1} b={true} c="aaa"',
          );
          expect(attrsStringify({ a: 1, b: false, c: 'aaa' })).toStrictEqual(
            'a={1} b={false} c="aaa"',
          );
        });
      });
    });
  });
});
