import * as React from 'react';

import { IconBase, IconBaseProps } from './IconBase';
import { IconTree } from './declarations';
import { Tree2Element } from './Tree2Element';

export const genIcon = (data: IconTree, tags: string) => {
  // Find 'title' children and get its text
  const title = data.children.find((child) => child.tag === 'title');
  const iconName = title?.text ?? null;
  const Icon = (props: IconBaseProps) => (
    <IconBase
      attr={{ ...data.attrs }}
      data-name={`gi-${iconName}`}
      data-tags={tags}
      title={iconName}
      {...props}
    >
      {Tree2Element(data.children)}
    </IconBase>
  );
  Icon.displayName = `gi-${iconName}`;
  return Icon;
};
