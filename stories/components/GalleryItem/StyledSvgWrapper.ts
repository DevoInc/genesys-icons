import styled from 'styled-components';

const SVG_SIZE = '80px';

export const StyledSvgWrapper = styled.div`
  position: relative;
  justify-content: center;
  align-items: center;
  gap: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 8px 0 16px;
  > svg {
    width: ${SVG_SIZE};
    height: ${SVG_SIZE};
  }
`;
