import { describe, expect, test } from 'vitest';

import { getEditedIconClasses } from './classEdition';

describe('scripts', () => {
  describe('font', () => {
    describe('classEdition', () => {
      describe('getEditedIconClasses', () => {
        test('should get empty', () => {
          expect(getEditedIconClasses('')).toBe('');
        });
        test('should get edited icon classes', () => {
          expect(
            getEditedIconClasses('.gi-icon:before { content: whatever; }'),
          ).toBe('.gi-icon:before { content: $gi-icon; }');
        });
      });
    });
  });
});
