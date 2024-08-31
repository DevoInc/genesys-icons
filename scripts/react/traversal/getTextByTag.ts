import { IParsedElement } from '../declarations';

export const getTextByTag = (node: IParsedElement, tag: string): string =>
  node.tag === tag
    ? node.text
    : node.children
        .map((child) => getTextByTag(child, tag))
        .filter((x) => x.trim() !== '')
        .join(',');
