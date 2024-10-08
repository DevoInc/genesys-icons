import * as React from 'react';

import type { IIcon } from '../../declarations';
import { useContextProps } from '../../hooks';

export interface IconBaseProps extends IIcon {}

export const IconBase: React.FC<IconBaseProps> = ({
  'aria-hidden': ariaHidden = true,
  size: userSize,
  title: userTitle,
  className: userClassName,
  color: userColor,
  style: userStyle,
  role = 'img',
  children,
  ...props
}) => {
  const { size, title, className, color, style } = useContextProps({
    size: userSize,
    title: userTitle,
    className: userClassName,
    color: userColor,
    style: userStyle,
  });
  return (
    <svg
      aria-hidden={ariaHidden}
      aria-label={title}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      {...props}
      className={className}
      role={role}
      style={{ color, pointerEvents: 'none', ...style }}
      width={Array.isArray(size) ? size[0] : size}
      height={Array.isArray(size) ? size[1] : size}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};
