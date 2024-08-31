import { describe, test, expect } from 'vitest';

import { cjsIndexTmpl } from './cjsIndexTmpl';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('cjsIndexTmpl', () => {
        test('should return the right template', () => {
          expect(cjsIndexTmpl(['a', 'b', 'c']))
            .toBe(`// THIS FILE IS AUTO GENERATED
var IconContext = require('./lib.umd.cjs').IconContext;
module.exports.IconContext = IconContext;
var a = require('./icons/a.umd.cjsx').a; module.exports.a = a;
var b = require('./icons/b.umd.cjsx').b; module.exports.b = b;
var c = require('./icons/c.umd.cjsx').c; module.exports.c = c;`);
        });
      });
    });
  });
});
