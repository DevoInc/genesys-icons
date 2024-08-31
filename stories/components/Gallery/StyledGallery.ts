import styled from 'styled-components';

export const StyledGallery = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(10, 1fr);
  gap: 16px;
  margin-top: 16px;
  padding: 24px;
  box-sizing: border-box;
`;
