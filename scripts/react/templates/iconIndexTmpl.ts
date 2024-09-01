import { autoGen } from './contants';

export const iconIndexTmpl = (names: string[]) =>
  `${autoGen}
${names.map((name) => `export * from './${name}';`).join('\n')}`;
