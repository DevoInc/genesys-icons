import { describe, test, expect } from 'vitest';

import { cjsIconTmpl } from './cjsIconTmpl';

describe('scripts', () => {
  describe('react', () => {
    describe('templates', () => {
      describe('cjsIconTmpl', () => {
        test('should return the right template', () => {
          expect(cjsIconTmpl('name', 'tag1,tag2', 'content', '0 0 64 64'))
            .toBe(`// THIS FILE IS AUTO GENERATED
var IconBase = require('../lib.cjs').IconBase; var name = (props) => <IconBase data-name="name" data-tags="tag1,tag2" title="name" viewBox="0 0 64 64" {...props}>content</IconBase>; name.tags = "tag1,tag2"; module.exports.name = name;`);
        });
      });
    });
  });
});
