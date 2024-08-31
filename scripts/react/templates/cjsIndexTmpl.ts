import { autoGen } from './contants';

export const cjsIndexTmpl = (names: string[]) =>
  `${autoGen}
var IconContext = require('./lib.umd.cjs').IconContext;
module.exports.IconContext = IconContext;
${names.map((name) => `var ${name} = require('./icons/${name}.umd.cjsx').${name}; module.exports.${name} = ${name};`).join('\n')}`;
