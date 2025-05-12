import { describe, test, expect } from 'vitest';

import {
  checkInvalidCharacter,
  reasonInvalidCharacter,
} from './checkInvalidCharacters';
import type { ValidationResponse } from '../../declarations';

describe('scripts', () => {
  describe('validations', () => {
    describe('iconName', () => {
      describe('validations', () => {
        describe('invalidCharacters', () => {
          const cases: [string, string, ValidationResponse[]][] = [
            [
              'invalid "-"',
              'test-middle-dash',
              [{ name: 'test-middle-dash', reason: reasonInvalidCharacter }],
            ],
            [
              'invalid start with number',
              '2test',
              [{ name: '2test', reason: reasonInvalidCharacter }],
            ],
            ['valid name', 'test_ok_42', []],
          ];

          test.each(cases)('%s', (_title, args, expected) => {
            expect(checkInvalidCharacter(args)).toEqual(expected);
          });
        });
      });
    });
  });
});
