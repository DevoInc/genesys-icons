import { autoGen } from './contants';

export const esmIndexTmpl = () =>
  `${autoGen}
export { IconContext } from './lib.js';
export * from './icons/index.js';`;
