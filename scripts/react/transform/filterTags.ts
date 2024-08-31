import { IParsedElement } from '../declarations';

export const filterTags = (tags: string[]) => (node: IParsedElement) =>
  !tags.includes(node.tag);
