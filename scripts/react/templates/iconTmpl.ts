import { autoGen } from './contants';

export const iconTmpl = (
  name: string, // GIAbacus
  tags: string, // "tag1,tag2"
  content: string,
  viewBox: string,
) =>
  `${autoGen}
import * as React from 'react';

import { IconBase } from '../components';
import type { IIcon } from '../declarations';

export const ${name}: React.FC<IIcon> & { tags: string } = (props) => <IconBase data-name="${name}" data-tags="${tags}" title="${name}" viewBox="${viewBox}" {...props}>${content}</IconBase>;
${name}.tags = "${tags}";`;
