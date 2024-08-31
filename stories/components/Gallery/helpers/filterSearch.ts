import type { IGalleryIconItem } from '../../declarations';
import { prepareText } from './prepareText';

export const filterSearch =
  (search: string) =>
  ({ name, tags }: IGalleryIconItem): boolean =>
    prepareText(name).includes(search) ||
    prepareText(tags.join(',')).includes(search);
