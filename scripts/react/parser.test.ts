import { describe, test, expect } from 'vitest';

import { parse } from './parser';
import { ParsedElement } from './declarations';

describe('parse', () => {
  const cases: [string, string, ParsedElement][] = [
    [
      'nested',
      '<svg><title>hello</title></svg>',
      {
        tag: 'svg',
        attrs: {},
        text: '',
        children: [{ tag: 'title', attrs: {}, text: 'hello', children: [] }],
      },
    ],
    [
      'attributes',
      '<svg version="1.1"></svg>',
      { tag: 'svg', attrs: { version: '1.1' }, text: '', children: [] },
    ],
    [
      'filtered tag',
      '<svg><style /></svg>',
      { tag: 'svg', attrs: {}, text: '', children: [] },
    ],
  ];

  test.each(cases)('%s', (_title, svg, expected) => {
    expect.assertions(1);
    return expect(parse(svg)).resolves.toEqual(expected);
  });
});
