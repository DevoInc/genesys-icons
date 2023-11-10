import * as React from 'react';

export type IconContextProps = {
  size: number | string;
  color: string;
  title: string;
  className: string;
  style: React.CSSProperties;
};

export const IconContext = React.createContext<IconContextProps>({
  size: 32,
  color: null,
  title: null,
  className: null,
  style: {},
});
