import * as React from 'react';

import { IconBase, IconBaseProps } from './IconBase';
import { IconTree } from './declarations';
import { Tree2Element } from './Tree2Element';

export const genIcon =
  (data: IconTree, tags: string) => (props: IconBaseProps) => (
    <IconBase attr={{ ...data.attrs }} data-tags={tags} {...props}>
      {Tree2Element(data.children)}
    </IconBase>
  );
