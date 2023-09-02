import * as React from 'react';

export const IconContext = React.createContext<{
  size: number | string;
  color: string;
  title: string;
  className: string;
  style: React.CSSProperties;
}>({
  size: 32,
  color: null,
  title: null,
  className: null,
  style: {},
});
