import styled, { css } from 'styled-components';

interface StyledSvgWrapperButtonProps {
  $isSelected: boolean;
}

export const StyledSvgWrapperButton = styled.button<StyledSvgWrapperButtonProps>`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  transition:
    background-color ease-in-out 0.15s,
    box-shadow ease-in-out 0.15s;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 4px;
  width: 80px;
  height: 80px;
  padding: 1.2rem;
  background: none;
  cursor: pointer;
  color: #1f282e;

  &:hover,
  &:focus,
  &:active {
    background-color: #f6f6f6;
  }

  ${({ $isSelected }) =>
    $isSelected
      ? css`
          box-shadow: rgb(83 186 237) 0 0 0 2px;
          background-color: #f6f6f6;
        `
      : ''}
`;
