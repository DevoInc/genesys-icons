import { autoGen } from './contants';

export const cjsIndexTmpl = (names: string[]) =>
  `${autoGen}
var IconContext = require('./lib.cjs').IconContext;
module.exports.IconContext = IconContext;
${names.map((name) => `var ${name} = require('./icons/${name}.cjsx').${name}; module.exports.${name} = ${name};`).join('\n')}`;
