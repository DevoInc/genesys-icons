import styled, { css } from 'styled-components';

export const StyledGalleryFilter = styled.div`
  ${() => {
    const barSpace = '16px';
    const inputHorSpace = '12px';
    const cancelButtonSize = '16px';
    return css`
      position: sticky;
      top: 0;
      align-items: center;
      display: flex;
      z-index: 1;
      transition: background-color ease-in-out 0.15s;
      margin: -${barSpace};
      box-shadow:
        rgb(12 41 56 / 8%) 0 4px 6px 0,
        rgb(12 41 56 / 4%) 0 2px 2px 1px;
      padding: ${barSpace};
      background: #fff;

      input {
        border: none;
        width: 100%;
        padding: 8px ${inputHorSpace};
        border-radius: 6px;
        font-size: 20px;

        &::placeholder {
          font-family: 'Poppins', sans-serif;
          color: #aaa;
        }

        &::-webkit-search-cancel-button {
          appearance: none;
          opacity: 0.3;
          margin: 0;
          width: 16px;
          height: 16px;
          background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQFJREFUeNrMV4ENwyAMo7uAE3oCH2wn9CQ+4JV9sO0C9gEncAKLJlohRIFA2xDJqirR2gkhJBPD2QIQgLt/f/jn2z8/gC/gyQ60GaAAFuAqYf03cy+5RBKnhMgWYg7QHcQxtP9nlYlOr3PREDWen0EeishGQp9IHm7HbsK5iyBTR80WVBsEgSlE08ZHVFWErPZkhBmfW69CAbbgDa8UoaO1phCFrbxivNoToRFCVyyY5MsRtJBvyfhqrGgrUSu589woASkRvKN8/wUcUdub744bG8DIt4A8CcmPIXkhIi/FQ1xG5NcxeUMyREs2RFNK3pYPMZgMMZpdNpxO1OP5T4ABAGPkp7uNtT7bAAAAAElFTkSuQmCC');
          background-size: 16px;
          background-position: center;
          cursor: pointer;
        }

        &:active,
        &:focus,
        &:hover {
          outline: none;
        }

        &:focus {
          background: #f6f6f6;
        }
      }

      .counter {
        position: absolute;
        right: calc(${barSpace} + ${inputHorSpace});
        transition: right ease-in-out 0.15s;
        font-size: 1rem;
        color: #ccc;
      }

      input:not([value='']) + .counter {
        right: calc(${barSpace} + ${inputHorSpace} + ${cancelButtonSize} + 8px);
      }
    `;
  }}
`;
