import * as React from 'react';

import { IconType } from '@devoinc/genesys-icons';

import { config } from '../../../config';
import { SingleItem } from '../../utils';

import { Gallery } from '../Gallery';
import { Search } from '../Search';

type IconItem = {
  name: string;
  tags: string;
  Cmp: React.ReactNode;
};

const buildFilterSearch =
  (search: string) =>
  ({ name, tags }: IconItem): boolean => {
    return search.trim() !== ''
      ? name.toLowerCase().includes(search.toLowerCase().trim()) ||
          tags.toLowerCase().includes(search.toLowerCase().trim())
      : true;
  };

interface FilteredGallery {
  icons: Record<string, IconType>;
}

export const FilteredGallery: React.FC<FilteredGallery> = ({ icons }) => {
  const [searchText, setSearchText] = React.useState('');
  const filterSearch = buildFilterSearch(searchText);

  const filteredIcons = icons.filter(filterSearch);

  return (
    <>
      <Search
        value={searchText}
        onChange={(value: string) => {
          setSearchText(value);
        }}
        count={filteredIcons.length}
        total={icons.length}
      />
      <Gallery
        icons={filteredIcons.map(
          (icon: IconItem) =>
            new SingleItem(
              [config.prefix, icon.name.replace(config.prefix, '')],
              searchText,
              icon.tags === '' ? [] : icon.tags.split(','),
              icon.Cmp,
            ),
        )}
      />
    </>
  );
};
