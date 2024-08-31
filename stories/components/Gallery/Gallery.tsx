import * as React from 'react';

import { StyledGallery } from './StyledGallery';
import type { IGalleryIconItem } from '../declarations';
import { GalleryContext } from '../../context';
import { GalleryItem } from '../GalleryItem';
import { filterSearch, prepareText } from './helpers';
import { GalleryFilter } from '../GalleryFilter';

interface GalleryProps {
  icons: IGalleryIconItem[];
}

export const Gallery: React.FC<GalleryProps> = ({ icons }) => {
  const [searchText, setSearchText] = React.useState('');

  const filteredIcons: IGalleryIconItem[] =
    searchText.trim() !== ''
      ? icons.filter(filterSearch(prepareText(searchText)))
      : icons;

  const [selection, setSelection] = React.useState<string | null>(null);
  const ref = React.useRef(null);

  return (
    <GalleryContext.Provider value={{ selection, setSelection, searchText }}>
      <GalleryFilter
        value={searchText}
        onChange={(value: string) => {
          setSearchText(value);
        }}
        count={filteredIcons.length}
        total={icons.length}
      />
      <StyledGallery ref={ref}>
        {filteredIcons.map((icon) => (
          <GalleryItem
            key={icon.name}
            name={icon.name}
            Icon={icon.Cmp}
            tags={icon.tags}
          />
        ))}
      </StyledGallery>
    </GalleryContext.Provider>
  );
};
