import { describe, test, expect } from 'vitest';

import { cjsIconIndexTmpl } from './cjsIconIndexTmpl';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('cjsIconIndexTmpl', () => {
        test('should return the right template', () => {
          expect(cjsIconIndexTmpl(['a', 'b', 'c']))
            .toBe(`// THIS FILE IS AUTO GENERATED
var a = require('./a.umd.cjsx').a; module.exports.a = a;
var b = require('./b.umd.cjsx').b; module.exports.b = b;
var c = require('./c.umd.cjsx').c; module.exports.c = c;`);
        });
      });
    });
  });
});
