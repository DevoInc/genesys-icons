import { autoGen } from './contants';
import { getIconComponent } from './partials';

export const esmIconTmpl = (
  name: string, // GIAbacus
  tags: string, // "tag1,tag2"
  content: string,
  viewBox: string,
) =>
  `${autoGen}
import { IconBase } from '../lib.js'; export const ${name} = ${getIconComponent(name, tags, content, viewBox)}; ${name}.tags = "${tags}";`;
