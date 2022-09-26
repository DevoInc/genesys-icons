import { IconType } from '@devoinc/dali-icons';
import * as React from 'react';

import { Gallery } from '../Gallery';
import { Search } from '../Search';

const buildFilterSearch =
  (search: string) =>
  (str: string, tags: string): boolean => {
    return search.trim() !== ''
      ? str.toLowerCase().includes(search.toLowerCase().trim()) ||
          tags.toLowerCase().includes(search.toLowerCase().trim())
      : true;
  };

interface FilteredGallery {
  icons: Record<string, IconType>;
}

export const FilteredGallery: React.FC<FilteredGallery> = ({ icons }) => {
  const [searchText, setSearchText] = React.useState('');
  const filterSearch = buildFilterSearch(searchText);
  const iconNames = Object.keys(icons);

  const tags = React.useMemo(
    () =>
      iconNames.reduce((acc, iconName) => {
        const genIcon = icons[iconName];
        const tags = genIcon().props['data-tags'];
        return { ...acc, [iconName]: tags };
      }, {}),
    [icons]
  );

  const filteredIcons = iconNames.filter((icon) =>
    filterSearch(icon, tags[icon] || '')
  );

  return (
    <>
      <Search
        value={searchText}
        onChange={(value: string) => {
          setSearchText(value);
        }}
        count={filteredIcons.length}
        total={iconNames.length}
      />
      <Gallery
        search={searchText}
        icons={filteredIcons.map((key) => ({
          key,
          tags: tags[key] === '' ? [] : tags[key].split(','),
          Component: icons[key],
        }))}
      />
    </>
  );
};
