import { autoGen } from './contants';

export const cjsIconIndexTmpl = (names: string[]) =>
  `${autoGen}
${names.map((name) => `var ${name} = require('./${name}.umd.cjsx').${name}; module.exports.${name} = ${name};`).join('\n')}`;
