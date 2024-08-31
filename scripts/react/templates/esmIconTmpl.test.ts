import { describe, test, expect } from 'vitest';

import { esmIconTmpl } from './esmIconTmpl';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('esmIconTmpl', () => {
        test('should return the right template', () => {
          expect(esmIconTmpl('name', 'tag1,tag2', 'content', '0 0 32 32'))
            .toBe(`// THIS FILE IS AUTO GENERATED
import { IconBase } from '../lib.js'; export const name = (props) => <IconBase data-name="name" data-tags="tag1,tag2" title="name" viewBox="0 0 32 32" {...props}>content</IconBase>; name.tags = "tag1,tag2";`);
        });
      });
    });
  });
});
