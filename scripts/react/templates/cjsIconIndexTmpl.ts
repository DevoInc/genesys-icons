import { autoGen } from './contants';

export const cjsIconIndexTmpl = (names: string[]) =>
  `${autoGen}
${names.map((name) => `var ${name} = require('./${name}.cjsx').${name}; module.exports.${name} = ${name};`).join('\n')}`;
