import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { Tree2Element } from './Tree2Element';

describe('Tree2Element', () => {
  test('should omit desc and title', () => {
    expect(
      Tree2Element([
        {
          tag: 'svg',
          attrs: {},
          children: [
            { tag: 'title', attrs: {}, children: [], text: 'test' },
            { tag: 'desc', attrs: {}, children: [], text: 'test' },
          ],
          text: '',
        },
      ]),
    ).toStrictEqual([React.createElement('svg', { key: 0 }, [])]);
  });
});
