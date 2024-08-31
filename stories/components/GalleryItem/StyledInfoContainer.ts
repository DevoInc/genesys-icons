import styled from 'styled-components';

const DEFAULT_POPPER_WIDTH = 240;

export const StyledInfoContainer = styled.div`
  flex-direction: row;
  display: flex;
  gap: 12px;
  z-index: 1;
  box-shadow:
    0 4px 8px -2px rgba(12, 41, 56, 0.25),
    0 0 1px 0 rgba(12, 41, 56, 0.31);
  min-width: ${DEFAULT_POPPER_WIDTH}px;
  width: auto;
  padding: 24px;
  border-radius: 6px;
  background-color: #fff;
`;
