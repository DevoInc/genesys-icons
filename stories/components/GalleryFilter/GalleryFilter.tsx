import * as React from 'react';

import { StyledGalleryFilter } from './StyledGalleryFilter';

interface GalleryFilterProps {
  value: string;
  onChange: (value: string) => void;
  count: number;
  total: number;
}

export const GalleryFilter: React.FC<GalleryFilterProps> = ({
  value,
  onChange,
  count = 10,
  total = 100,
}) => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <StyledGalleryFilter>
      <input
        ref={ref}
        type={'search'}
        value={value}
        onChange={(event) => {
          onChange?.(event.target.value);
        }}
        placeholder={'Search icon...'}
      />
      <div className={'counter'}>
        {count}/{total}
      </div>
    </StyledGalleryFilter>
  );
};
