import { describe, test, expect } from 'vitest';

import { getClassName } from './className';

describe('stories', () => {
  describe('components', () => {
    describe('GalleryItem', () => {
      describe('helpers', () => {
        describe('className', () => {
          describe('getClassName', () => {
            test('should decamelize name', () => {
              expect(getClassName('GIArrow')).toBe('gi-arrow');
              expect(getClassName('GIArrowRight')).toBe('gi-arrow_right');
            });
          });
        });
      });
    });
  });
});
