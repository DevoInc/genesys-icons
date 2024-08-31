import { autoGen } from './contants';
import { getIconComponent } from './partials';

export const cjsIconTmpl = (
  name: string, // GIAbacus
  tags: string, // "tag1,tag2"
  content: string,
  viewBox: string,
) =>
  `${autoGen}
var IconBase = require('../lib.umd.cjs').IconBase; var ${name} = ${getIconComponent(name, tags, content, viewBox)}; ${name}.tags = "${tags}"; module.exports.${name} = ${name};`;
