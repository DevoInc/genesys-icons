import { ParsedElement } from './declarations';

export const getTextByTag = (node: ParsedElement, tag: string): string =>
  node.tag === tag
    ? node.text
    : node.children.length > 0
    ? node.children
        .map((child) => getTextByTag(child, tag))
        .filter((x) => x.trim() !== '')
        .join(',')
    : '';
