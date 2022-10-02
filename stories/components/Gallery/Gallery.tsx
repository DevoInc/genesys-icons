import { IconBaseProps } from '@devoinc/dali-icons';
import { useState, useRef } from 'react';
import { usePopper } from 'react-popper';
import { useOnEventOutside } from '../../hooks/useOnEventOutside';

import * as React from 'react';
import styled from 'styled-components';

import { Item } from './Item';
import { Popper, PopperStyles } from '../Popper';
import { SingleItem } from './types';

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
const getItemDOMCoords = (clickedItem: SingleItem | undefined) => {
  const selectedIconElement: HTMLDivElement | null = document.querySelector(
    `.icon-${clickedItem?.name[1]}`
  );
  const coords = selectedIconElement?.getBoundingClientRect();
  return coords;
};

export const Gallery: React.FC<GalleryProps> = ({ icons, search }) => {
  const popperElement = useRef(null);
  const [selectedItem, setSelectedItem] = useState<SingleItem | undefined>(
    undefined
  );
  const [popperStyles, setPopperStyles] = useState<PopperStyles>({
    position: 'absolute',
    top: 0,
    left: 0,
  });

  const { styles, attributes } = usePopper(
    selectedItem
      ? document.querySelector(`icon-${selectedItem.name[1]}`)
      : null,
    popperElement.current,
    {
      placement: 'bottom-start',
    }
  );

  const deselect = () => setSelectedItem(undefined);

  useOnEventOutside({
    references: [
      ...document.querySelectorAll('.icon-container'),
      popperElement.current,
    ],
    handler: deselect,
  });

  const handleItemClick = (name, tags) => {
    const clickedItem =
      selectedItem && selectedItem.name[1] === name[1]
        ? undefined
        : new SingleItem(name, search, tags);
    setSelectedItem(clickedItem);
    const coords = getItemDOMCoords(clickedItem);
    setPopperStyles({
      ...popperStyles,
      left: clickedItem && coords ? coords.left : 0,
      top: clickedItem && coords ? coords.top : 0,
    });
  };

  return (
    <StyledGallery>
      {icons.map(({ key, tags, Component }) => (
        <Item
          key={key[1]}
          item={new SingleItem(key, search, tags)}
          handleClick={handleItemClick}
        >
          <Component key={key} title={key} size={32} />
        </Item>
      ))}
      {selectedItem && (
        <Popper
          item={selectedItem}
          ref={popperElement}
          styles={styles}
          attributes={attributes}
          popperStyles={popperStyles}
        />
      )}
    </StyledGallery>
  );
};
