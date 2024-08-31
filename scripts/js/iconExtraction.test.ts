import { describe, expect, test } from 'vitest';

import { getIconsInfo, iconsSort } from './iconExtraction';

describe('scripts', () => {
  describe('js', () => {
    describe('iconExtraction', () => {
      describe('iconsSort', () => {
        test('should sort icons', () => {
          expect(
            iconsSort({ key: 'a', code: 'a' }, { key: 'b', code: 'b' }),
          ).toBe(-1);
          expect(
            iconsSort({ key: 'b', code: 'b' }, { key: 'a', code: 'a' }),
          ).toBe(1);
          expect(
            iconsSort({ key: 'a', code: 'a' }, { key: 'a', code: 'a' }),
          ).toBe(0);
        });
      });

      describe('getIconsInfo', () => {
        test('should gets empty', () => {
          expect(getIconsInfo('')).toStrictEqual([]);
          expect(getIconsInfo('gi-icon: "test";')).toStrictEqual([]);
          expect(getIconsInfo('$ig-icon: "test";')).toStrictEqual([]);
          expect(getIconsInfo('$gi-icon: test;')).toStrictEqual([]);
          expect(getIconsInfo('$gi-icon: 23;')).toStrictEqual([]);
          expect(getIconsInfo('$gi-icon: "test"')).toStrictEqual([]);
        });
        test('should gets single icon info', () => {
          expect(getIconsInfo(`$gi-icon: "test";`)).toStrictEqual([
            { key: 'icon', code: 'test' },
          ]);
        });
        test('should gets multiple icons info', () => {
          expect(
            getIconsInfo(`$gi-icon: "test";
$gi-icon3: "test3";
$gi-icon2: "test2";`),
          ).toStrictEqual([
            { key: 'icon', code: 'test' },
            { key: 'icon2', code: 'test2' },
            { key: 'icon3', code: 'test3' },
          ]);
        });
        test('should gets multiple icons ordered info', () => {
          expect(
            getIconsInfo(`$gi-icon: "test";
$gi-icon2: "test2";
$gi-icon3: "test3";`),
          ).toStrictEqual([
            { key: 'icon', code: 'test' },
            { key: 'icon2', code: 'test2' },
            { key: 'icon3', code: 'test3' },
          ]);
        });
        test('should fix fixtures', () => {
          expect(
            getIconsInfo(`$gi-table: "test";
$gi-gauge: "test2";
$gi-image: "test3";
$gi-line: "test4";`),
          ).toStrictEqual([
            { key: 'gauge', code: '\\e877' },
            { key: 'image', code: '\\e7e7' },
            { key: 'line', code: '\\ea68' },
            { key: 'table', code: '\\eab8' },
          ]);
        });
      });
    });
  });
});
