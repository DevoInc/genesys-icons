import { describe, test, expect } from 'vitest';

import { getTextByTag } from './getTextByTag';
import { IParsedElement } from '../declarations';

describe('scripts', () => {
  describe('react', () => {
    describe('traversal', () => {
      describe('getTextByTag', () => {
        const cases: [string, IParsedElement, string, string][] = [
          [
            'direct',
            { tag: 'A', text: 'a', children: [], attrs: {} },
            'A',
            'a',
          ],
          [
            'nested',
            {
              tag: 'A',
              text: '',
              children: [
                { tag: 'B', text: 'b', children: [], attrs: {} },
                { tag: 'B', text: '     ', children: [], attrs: {} },
              ],
              attrs: {},
            },
            'B',
            'b',
          ],
          [
            'nested multiple',
            {
              tag: 'B',
              text: '',
              children: [
                { tag: 'A', text: 'b', children: [], attrs: {} },
                { tag: 'A', text: 'c', children: [], attrs: {} },
              ],
              attrs: {},
            },
            'A',
            'b,c',
          ],
          [
            'not found',
            { tag: 'A', text: 'a', children: [], attrs: {} },
            'B',
            '',
          ],
          [
            'not found with children',
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
    });
  });
});
