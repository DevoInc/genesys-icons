import React, { FC } from 'react';
import styled from 'styled-components';
import { SingleItem } from './types';

const StyledContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  position: relative;
`;

const StyledSvgWrapperButton = styled.button`
  position: relative;
  justify-content: center;
  display: flex;
  transition: background-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 4px;
  width: 80px;
  padding: 1.2rem;
  background: none;
  cursor: pointer;
  color: #1f282e;

  &:hover,
  &:focus,
  &:active {
    background-color: #f6f6f6;
  }

  &:focus-visible {
    box-shadow: rgb(83 186 237) 0 0 0 2px;
  }
`;

interface ItemProps {
  children: React.ReactElement;
  item: SingleItem;
  handleClick: (name: [string, string], tags: string[]) => void;
}

export const Item: FC<ItemProps> = ({ children, item, handleClick }) => (
  <div>
    <StyledSvgWrapperButton onClick={() => handleClick(item.name, item.tags)}>
      <StyledContainer className={`icon-container icon-${item.name[1]}`}>
        <StyledContainer>{children}</StyledContainer>
      </StyledContainer>
    </StyledSvgWrapperButton>
  </div>
);
