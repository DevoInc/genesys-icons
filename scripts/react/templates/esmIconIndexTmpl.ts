import { autoGen } from './contants';

export const esmIconIndexTmpl = (names: string[]) =>
  `${autoGen}
${names.map((name) => `export * from './${name}.jsx';`).join('\n')}`;
