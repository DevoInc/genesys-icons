import { IconBaseProps } from '@devoinc/dali-icons';
import { useState, FC } from 'react';
import { usePopper } from 'react-popper';
import { useOnEventOutside } from '../../hooks/useOnEventOutside';

import * as React from 'react';

import { CustomPopper } from '../Popper';
import { SingleItem } from './types';
import {
  StyledGallery,
  StyledSvgWrapperButton,
  StyledContainer,
} from './styles';

interface GalleryProps {
  icons: {
    key: [string, string];
    tags: string[];
    Component: React.FC<IconBaseProps>;
  }[];
  search: string;
}

export const Gallery: FC<GalleryProps> = ({ icons, search }) => {
  const [referenceElement, setReferenceElement] = useState({});
  const [popperElement, setPopperElement] = useState(null);
  const [selectedItem, setSelectedItem] = useState<SingleItem | undefined>(
    undefined
  );

  const { styles, attributes } = usePopper(
    selectedItem && referenceElement
      ? referenceElement[selectedItem.name[1]]
      : null,
    popperElement,
    {
      placement: 'bottom-start',
    }
  );

  const deselect = () => setSelectedItem(undefined);

  useOnEventOutside({
    references: [
      ...document.querySelectorAll('.icon-container'),
      popperElement,
    ],
    handler: deselect,
  });

  return (
    <StyledGallery>
      {icons.map(({ key, tags, Component }) => (
        <StyledSvgWrapperButton
          key={key[1]}
          onClick={() =>
            setSelectedItem(
              selectedItem && selectedItem.name[1] === key[1]
                ? undefined
                : new SingleItem(key, search, tags, Component)
            )
          }
          aria-expanded={selectedItem?.name[1] !== key[1] ? null : true}
          ref={(el) => (referenceElement[key[1]] = el)}
        >
          <StyledContainer className={`icon-container icon-${key[1]}`}>
            <StyledContainer>
              {Component({ key, title: key, size: 32 })}
            </StyledContainer>
          </StyledContainer>
        </StyledSvgWrapperButton>
      ))}
      {selectedItem && (
        <CustomPopper
          item={selectedItem}
          styles={styles}
          attributes={attributes}
          popperRef={setPopperElement}
        />
      )}
    </StyledGallery>
  );
};
