import * as React from 'react';

import { IconContext, type IconContextProps } from '../context';
import { filterUndefined } from './helper';

export const useContextProps = (props: IconContextProps) => {
  const propsFromContext = React.useContext(IconContext);
  return { ...filterUndefined(propsFromContext), ...filterUndefined(props) };
};
