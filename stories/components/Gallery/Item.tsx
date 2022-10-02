import { SingleItem } from './types';
import React, { FC } from 'react';
import { StyledContainer, StyledSvgWrapperButton } from './styles';

interface ItemProps {
  children: React.ReactElement;
  item: SingleItem;
  handleClick: (name: [string, string], tags: string[]) => void;
  isSelected: boolean;
}

export const Item: FC<ItemProps> = ({
  children,
  item,
  handleClick,
  isSelected,
}) => (
  <StyledContainer className={`icon-container icon-${item.name[1]}`}>
    <StyledContainer>
      <StyledSvgWrapperButton
        onClick={() => handleClick(item.name, item.tags)}
        aria-expanded={isSelected ? null : true}
      >
        {children}
      </StyledSvgWrapperButton>
    </StyledContainer>
  </StyledContainer>
);
