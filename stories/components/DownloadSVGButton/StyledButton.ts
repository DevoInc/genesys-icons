import styled, { css } from 'styled-components';

export const commonButtonStyles = css`
  position: relative;
  appearance: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 24px;
  border-radius: 4px;
  background-color: #e1eaf0;
  color: #3c4952;
  font-weight: bold;
  font-size: 12px;
  border: none;
  padding: 0 8px;
  cursor: pointer;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-family: inherit;
  transition:
    background-color ease-in-out 0.15s,
    color ease-in-out 0.15s;

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    transition: background-color 0.15s ease 0s;
    overflow: hidden;
    background-color: transparent;
    border-radius: 0.4rem;
  }

  &:hover,
  &:focus,
  &:active {
    color: #1f282e;
  }

  &:focus-visible {
    box-shadow: rgb(83 186 237) 0 0 0 2px;
    outline: none;
  }

  &:hover::before,
  &:focus::before,
  &:active::before {
    background-color: rgba(255, 255, 255, 0.28);
  }

  > * {
    position: relative;
  }

  > svg {
    margin-right: 4px;
  }
`;

export const StyledButton = styled.button`
  ${commonButtonStyles};
`;
