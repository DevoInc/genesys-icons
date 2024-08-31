import { describe, test, expect } from 'vitest';

import { parse } from '../parser/parser';
import { IParsedElement } from '../declarations';

describe('scripts', () => {
  describe('react', () => {
    describe('parser', () => {
      describe('parse', () => {
        const cases: [string, string, IParsedElement][] = [
          [
            'nested',
            '<svg><title>hello</title></svg>',
            {
              tag: 'svg',
              attrs: {},
              text: '',
              children: [
                { tag: 'title', attrs: {}, text: 'hello', children: [] },
              ],
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
          [
            'trim content',
            '<svg>    test    </svg>',
            { tag: 'svg', attrs: {}, text: 'test', children: [] },
          ],
        ];

        test.each(cases)('%s', (_title, svg, expected) => {
          return expect(parse(svg)).toEqual(expected);
        });
      });
    });
  });
});
