import { useState, FC } from 'react';
import { usePopper } from 'react-popper';
import { useOnEventOutside } from '../../hooks/useOnEventOutside';

import * as React from 'react';

import { CustomPopper } from '../Popper';
import { SingleItem } from '../../utils';
import {
  StyledGallery,
  StyledSvgWrapperButton,
  StyledContainer,
} from '../../utils';

interface GalleryProps {
  icons: SingleItem[];
}

export const Gallery: FC<GalleryProps> = ({ icons }) => {
  // Disabled rule on this line as the popper behavior needs setter
  //    method to run correctly
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
      {icons.map((icon) => (
        <StyledSvgWrapperButton
          key={icon.name[1]}
          onClick={() =>
            setSelectedItem(
              selectedItem && selectedItem.equals(icon) ? undefined : icon
            )
          }
          aria-expanded={
            !selectedItem || !selectedItem.equals(icon) ? null : true
          }
          ref={(el) => (referenceElement[icon.name[1]] = el)}
        >
          <StyledContainer className={`icon-container icon-${icon.name[1]}`}>
            <StyledContainer>
              {icon.component({ key: icon.name, title: icon.name, size: 32 })}
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
