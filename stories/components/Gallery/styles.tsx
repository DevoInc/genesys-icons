import styled, { css } from 'styled-components';

const DEFAULT_POPPER_WIDTH = 240;

export const StyledGallery = styled.div`
  display: grid;
  grid-template-rows: repeat(1, 1fr);
  grid-template-columns: repeat(10, 1fr);
  gap: 16px;
  margin-top: 16px;
  padding: 24px;
  box-sizing: border-box;
`;

export const StyledContainer = styled.div`
  flex-direction: column;
  align-items: center;
  display: flex;
  position: relative;
`;

export const getStyledInfoContainer = (styles) => styled.div`
  position: ${styles.position};
  top: ${styles.top}px;
  left: ${styles.left - DEFAULT_POPPER_WIDTH / 2}px;
  flex-direction: column;
  display: flex;
  gap: 12px;
  z-index: 1;
  //margin-top: 4px;
  box-shadow: 0 4px 8px -2px rgba(12, 41, 56, 0.25),
    0 0 1px 0 rgba(12, 41, 56, 0.31);
  min-width: ${DEFAULT_POPPER_WIDTH}px;
  width: auto;
  padding: 24px;
  border-radius: 6px;
  background-color: #fff;
`;

export const StyledHeading = styled.div`
  margin-bottom: 4px;
  font-size: 13px;
`;

export const StyledButton = styled.button`
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
  transition: background-color ease-in-out 0.15s;

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

export const StyledIconButton = styled(StyledButton)`
  width: 24px;
  height: 24px;
  padding: 0;

  > svg {
    margin-right: 0;
  }
`;

export const StyledSvgWrapper = styled.div`
  ${() => {
    const svgSize = '80px';
    return css`
      position: relative;
      justify-content: center;
      align-items: center;
      gap: 12px;
      display: flex;
      flex-direction: column;
      height: 100%;
      margin: 0 8px 0 16px;

      > svg {
        width: ${svgSize};
        height: ${svgSize};
      }
    `;
  }}
`;

export const StyledSvgWrapperButton = styled.button`
  position: relative;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: background-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
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
  &:active,
  &[aria-expanded] {
    background-color: #f6f6f6;
  }

  &:focus-visible {
    box-shadow: rgb(83 186 237) 0 0 0 2px;
  }
`;

export const StyledText = styled.p`
  align-items: center;
  display: flex;
  gap: 8px;
  margin: 0;
  font-size: 13px;
  white-space: nowrap;
  font-weight: bold;
`;

export const StyledTextCode = styled.span`
  align-items: center;
  display: flex;
  font-family: 'Mono font', monospace;
  font-size: 13px;
  height: 24px;
  padding: 0 8px;
  border-radius: 4px;
  background-color: #f5f8fa;

  .code--tag {
    color: #3b9a5b;
  }

  .code--common {
    color: #777;
  }

  .code--attr {
    color: #a82164;
  }

  .code--attr-value {
    color: #5aa2d6;
  }
`;

export const StyledMark = styled.mark`
  background-color: #c6dbf5;
  font-weight: bold;
  color: #5b6870;
`;

export const StyledTags = styled.div`
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 2px;
  display: flex;
  font-size: 13px;

  span {
    white-space: nowrap;
  }
`;
