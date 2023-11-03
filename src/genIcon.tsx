import * as React from 'react';

import { IconBase, IconBaseProps } from './IconBase';
import { IconTree } from './declarations';
import { Tree2Element } from './Tree2Element';

export const genIcon = (data: IconTree, tags: string) => {
  const Icon = (props: IconBaseProps) => (
    <IconBase attr={{ ...data.attrs }} data-tags={tags} {...props}>
      {Tree2Element(data.children)}
    </IconBase>
  );
  // Find 'title' children and get its text
  const iconName = data.children.find((child) => child.tag === 'title')?.text;
  Icon.displayName = `gi-${iconName}`;
  return Icon;
};
