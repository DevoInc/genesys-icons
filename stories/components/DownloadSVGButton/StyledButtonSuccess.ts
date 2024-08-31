import styled, { css } from 'styled-components';

import { StyledButton } from './StyledButton';

export const successButtonStyles = css`
  background-color: #46e3af;
  color: #0a2e22;

  &:hover,
  &:focus,
  &:active {
    color: #0a2e22;
  }
`;

export const StyledButtonSuccess = styled(StyledButton)`
  ${successButtonStyles};
`;
