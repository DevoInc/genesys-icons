import { describe, test, expect } from 'vitest';

import { getTextByTag } from './traversal';
import { ParsedElement } from './declarations';

describe('getTextByTag', () => {
  const cases: [string, ParsedElement, string, string][] = [
    ['direct', { tag: 'A', text: 'a', children: [], attrs: {} }, 'A', 'a'],
    [
      'nested',
      {
        tag: 'A',
        text: '',
        children: [{ tag: 'B', text: 'b', children: [], attrs: {} }],
        attrs: {},
      },
      'B',
      'b',
    ],
    ['not found', { tag: 'A', text: 'a', children: [], attrs: {} }, 'B', ''],
    [
      'no invalid strings',
      {
        tag: 'A',
        text: '',
        children: [
          { tag: 'B', text: 'b', children: [], attrs: {} },
          { tag: 'C', text: 'c', children: [], attrs: {} },
          { tag: 'D', text: 'd', children: [], attrs: {} },
        ],
        attrs: {},
      },
      'X',
      '',
    ],
  ];

  test.each(cases)('%s', (_title, node, tag, expected) => {
    expect(getTextByTag(node, tag)).toEqual(expected);
  });
});
