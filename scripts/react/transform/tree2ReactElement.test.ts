import { describe, test, expect } from 'vitest';

import { tree2ReactElement } from './tree2ReactElement';

describe('scripts', () => {
  describe('react', () => {
    describe('transform', () => {
      describe('tree2ReactElement', () => {
        test('should return a ReactElement as string', () => {
          expect(
            tree2ReactElement([
              {
                tag: 'svg',
                attrs: { viewBox: '0 0 32 32' },
                children: [
                  {
                    tag: 'title',
                    attrs: {},
                    children: [],
                    text: 'test',
                  },
                  {
                    tag: 'path',
                    attrs: { d: 'M10.10 10' },
                    children: [],
                    text: null,
                  },
                ],
                text: null,
              },
            ]),
          ).toBe(
            '<svg key={0} viewBox="0 0 32 32"><path key={0} d="M10.10 10"></path></svg>',
          );
        });

        test('should return a two ReactElement as string', () => {
          expect(
            tree2ReactElement([
              {
                tag: 'svg',
                attrs: { viewBox: '0 0 32 32' },
                children: [
                  {
                    tag: 'title',
                    attrs: {},
                    children: [],
                    text: 'test',
                  },
                  {
                    tag: 'path',
                    attrs: { d: 'M10.10 10' },
                    children: [],
                    text: null,
                  },
                ],
                text: null,
              },
              {
                tag: 'svg',
                attrs: { viewBox: '0 0 32 32' },
                children: [
                  {
                    tag: 'title',
                    attrs: {},
                    children: [],
                    text: 'test',
                  },
                  {
                    tag: 'path',
                    attrs: { d: 'M10.10 10' },
                    children: [],
                    text: null,
                  },
                ],
                text: null,
              },
            ]),
          ).toBe(
            '<svg key={0} viewBox="0 0 32 32"><path key={0} d="M10.10 10"></path></svg><svg key={1} viewBox="0 0 32 32"><path key={0} d="M10.10 10"></path></svg>',
          );
        });

        test('should return empty', () => {
          expect(tree2ReactElement([])).toBe('');
        });
      });
    });
  });
});
