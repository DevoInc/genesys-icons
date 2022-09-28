import { IconBaseProps } from '@devoinc/dali-icons';

import * as React from 'react';
import styled from 'styled-components';

import { Item } from './Item';

const StyledGallery = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(10, 1fr);
  gap: 16px;
  margin-top: 16px;
  padding: 24px;
  box-sizing: border-box;
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
