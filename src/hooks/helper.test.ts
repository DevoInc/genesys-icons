import { describe, test, expect } from 'vitest';

import { filterUndefined } from './helper';

describe('hooks', () => {
  describe('helper', () => {
    describe('filterUndefined', () => {
      test('should remove the undefined', () => {
        expect(
          filterUndefined({ a: undefined, b: undefined, c: 1 }),
        ).toStrictEqual({ c: 1 });
      });
    });
  });
});
