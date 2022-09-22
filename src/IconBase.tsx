import * as React from 'react';

export interface IconBaseProps extends React.SVGAttributes<SVGElement> {
  children?: React.ReactNode;
  size?: string | number;
  color?: string;
  title?: string;
}

export type IconType = (props: IconBaseProps) => JSX.Element;
export interface IconTree {
  tag: string;
  attrs: { [key: string]: string };
  children: IconTree[];
  text: string;
}

const hiddenTags = ['desc', 'title'];
const Tree2Element = (tree: IconTree[]): React.ReactElement[] =>
  tree &&
  tree
    .filter((node) => !hiddenTags.includes(node.tag))
    .map((node, i) =>
      React.createElement(
        node.tag,
        { key: i, ...node.attrs },
        Tree2Element(node.children)
      )
    );

export const genIcon = (data: IconTree, tags: string) => {
  const Icon = (props: IconBaseProps) => (
    <IconBase attr={{ ...data.attrs }} data-tags={tags} {...props}>
      {Tree2Element(data.children)}
    </IconBase>
  );
  return Icon;
};

export const IconBase = ({
  attr,
  size = 32,
  title,
  className,
  color,
  style,
  children,
  ...svgProps
}: IconBaseProps & { attr?: Record<string, unknown> }): JSX.Element => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      {...attr}
      {...svgProps}
      className={className}
      style={{ color, ...style }}
      height={size}
      width={size}
      xmlns={'http://www.w3.org/2000/svg'}
    >
      {title && <title>{title}</title>}
      {children}
    </svg>
  );
};
