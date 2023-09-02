import * as React from 'react';

import { IconTree } from './declarations';

const hiddenTags = ['desc', 'title'];

export const Tree2Element = (tree: IconTree[]): React.ReactElement[] =>
  tree &&
  tree
    .filter((node) => !hiddenTags.includes(node.tag))
    .map((node, i) =>
      React.createElement(
        node.tag,
        { key: i, ...node.attrs },
        Tree2Element(node.children),
      ),
    );
