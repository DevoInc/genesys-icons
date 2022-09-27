import { IconBaseProps } from '@devoinc/dali-icons';

import * as React from 'react';
import styled from 'styled-components';

import { Item } from './Item';

const StyledGallery = styled.div`
  width: 100%;
  display: grid;
  gap: 16px;
  margin: 16px 0;
  grid-template-columns: repeat(6, 1fr);
`;

interface GalleryProps {
  icons: {
    key: [string, string];
    tags: string[];
    Component: React.FC<IconBaseProps>;
  }[];
  search: string;
}

export const Gallery: React.FC<GalleryProps> = ({ icons, search }) => {
  return (
    <StyledGallery>
      {icons.map(({ key, tags, Component }) => (
        <Item match={search} name={key} key={key} tags={tags}>
          <Component key={key} title={key} size={32} />
        </Item>
      ))}
    </StyledGallery>
  );
};
