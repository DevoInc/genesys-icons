import * as React from 'react';

import { IconContext } from './IconContext';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export const IconBase = ({
  attr,
  size,
  title,
  className,
  color,
  style,
  children,
  ...svgProps
}: IconBaseProps & { attr?: Record<string, unknown> }): JSX.Element => {
  const {
    size: baseSize,
    color: baseColor,
    title: baseTitle,
    className: baseClassName,
    style: baseStyle,
  } = React.useContext(IconContext);
  return (
    <svg
      aria-label={title ?? baseTitle}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      {...attr}
      {...svgProps}
      className={className ?? baseClassName}
      role="img"
      style={{ color: color ?? baseColor, ...baseStyle, ...style }}
      height={size ?? baseSize ?? '1rem'}
      width={size ?? baseSize ?? '1rem'}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      {(title || baseTitle) && <title>{title ?? baseTitle}</title>}
      {children}
    </svg>
  );
};
