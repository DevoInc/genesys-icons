import { describe, test, expect } from 'vitest';

import { getIconComponent } from './getIconComponent';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('partials', () => {
        describe('getIconComponent', () => {
          test('should return the right template', () => {
            expect(
              getIconComponent('name', 'tag1,tag2', 'content', '0 0 64 64'),
            ).toBe(
              `(props) => <IconBase data-name="name" data-tags="tag1,tag2" title="name" viewBox="0 0 64 64" {...props}>content</IconBase>`,
            );
            expect(getIconComponent('name', 'tag1,tag2', 'content')).toBe(
              `(props) => <IconBase data-name="name" data-tags="tag1,tag2" title="name" viewBox="0 0 32 32" {...props}>content</IconBase>`,
            );
          });
        });
      });
    });
  });
});
