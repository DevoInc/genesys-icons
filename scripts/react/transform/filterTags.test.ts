import { describe, test, expect } from 'vitest';

import { filterTags } from './filterTags';

describe('scripts', () => {
  describe('react', () => {
    describe('transform', () => {
      describe('filterTags', () => {
        test('should filter tags', () => {
          const filterAB = filterTags(['a', 'b']);
          expect(
            [
              { tag: 'b', attrs: {}, children: [], text: '' },
              { tag: 'a', attrs: {}, children: [], text: '' },
              { tag: 'c', attrs: {}, children: [], text: '' },
            ].filter(filterAB),
          ).toStrictEqual([{ tag: 'c', attrs: {}, children: [], text: '' }]);
        });
      });
    });
  });
});
