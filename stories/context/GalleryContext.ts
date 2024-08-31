import * as React from 'react';

export const GalleryContext = React.createContext<{
  selection: string | null;
  setSelection: (name: string) => void;
  searchText: string;
}>({
  selection: null,
  setSelection: () => null,
  searchText: '',
});
