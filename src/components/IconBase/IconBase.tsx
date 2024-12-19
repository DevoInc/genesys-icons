import * as React from 'react';

import type { IIcon } from '../../declarations';
import { IconContext } from '../../context';

export interface IconBaseProps extends IIcon {}

export const IconBase: React.FC<IconBaseProps> = ({
  'aria-hidden': ariaHidden = true,
  size: localSize,
  title: localTitle,
  className,
  color,
  style,
  role = 'img',
  children,
  'data-name': dataName,
  ...props
}) => {
  const ctxProps = React.useContext(IconContext);
  const size = localSize ?? ctxProps?.size ?? undefined;
  const title = localTitle ?? ctxProps?.title ?? dataName ?? undefined;
  return (
    <svg
      data-name={dataName}
      aria-hidden={ariaHidden}
      aria-label={title}
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      {...props}
      className={className ?? ctxProps?.className}
      role={role}
      style={{
        color: color ?? ctxProps.color,
        pointerEvents: 'none',
        ...(style ?? ctxProps?.style),
      }}
      width={Array.isArray(size) ? size[0] : size}
      height={Array.isArray(size) ? size[1] : size}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};
