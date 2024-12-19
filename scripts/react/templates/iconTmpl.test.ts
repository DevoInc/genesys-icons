import { describe, test, expect } from 'vitest';

import { iconTmpl } from './iconTmpl';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('iconTmpl', () => {
        test('should return the right template', () => {
          expect(iconTmpl('name', 'tag1,tag2', 'content', '0 0 32 32'))
            .toBe(`// THIS FILE IS AUTO GENERATED
import * as React from 'react';

import { IconBase } from '../components';
import type { IIcon } from '../declarations';

export const name: React.FC<IIcon> & { tags: string } = (props) => <IconBase data-name="name" data-tags="tag1,tag2" viewBox="0 0 32 32" {...props}>content</IconBase>;
name.tags = "tag1,tag2";`);
        });
      });
    });
  });
});
