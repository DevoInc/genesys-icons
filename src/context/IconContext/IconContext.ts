import * as React from 'react';

import type { IIcon } from '../../declarations';

export interface IconContextProps
  extends Pick<IIcon, 'size' | 'color' | 'title' | 'className' | 'style'> {}

export const IconContext = React.createContext<IconContextProps>({
  size: 32,
  color: undefined,
  title: undefined,
  className: undefined,
  style: {},
});
