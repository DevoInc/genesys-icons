import { parse } from './parser';
import { ParsedElement } from './declarations';

describe('parse', () => {
  const cases: [string, string, ParsedElement][] = [
    [
      'nested',
      '<svg><title>hello</title></svg>',
      {
        tag: 'SVG',
        attrs: {},
        text: '',
        children: [{ tag: 'TITLE', attrs: {}, text: 'hello', children: [] }],
      },
    ],
    [
      'attributes',
      '<svg version="1.1"></svg>',
      { tag: 'SVG', attrs: { version: '1.1' }, text: '', children: [] },
    ],
    [
      'filtered tag',
      '<svg><style /></svg>',
      { tag: 'SVG', attrs: {}, text: '', children: [] },
    ],
  ];

  it.each(cases)('%s', (_title, svg, expected) => {
    expect.assertions(1);
    return expect(parse(svg)).resolves.toEqual(expected);
  });
});
