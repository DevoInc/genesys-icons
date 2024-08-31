import type { IParsedElement } from '../declarations';
import { filterTags } from './filterTags';
import { attrsStringify } from './attrsStringify';

const forbiddenTags = ['desc', 'title'];

export const tree2ReactElement = (tree: IParsedElement[]): string =>
  tree
    .filter(filterTags(forbiddenTags))
    .map(
      (node, i) =>
        `<${node.tag} key={${i}} ${attrsStringify(node.attrs)}>${tree2ReactElement(node.children)}</${node.tag}>`,
    )
    .join('');
