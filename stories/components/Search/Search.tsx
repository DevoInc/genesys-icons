import * as React from 'react';
import styled, { css } from 'styled-components';

const StyledSearch = styled.div`
  ${() => {
    const barSpace = '16px';
    const inputHorSpace = '12px';
    return css`
      position: sticky;
      top: 0;
      align-items: center;
      display: flex;
      z-index: 1;
      transition: background-color ease-in-out 0.15s;
      margin: -${barSpace};
      box-shadow: rgb(12 41 56 / 8%) 0 4px 6px 0,
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
        font-size: 1rem;
        color: #ccc;
      }
    `;
  }}
`;

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  count: number;
  total: number;
}

export const Search: React.FC<SearchProps> = ({
  value,
  onChange,
  count = 10,
  total = 100,
}) => {
  const ref = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, []);

  return (
    <StyledSearch>
      <input
        ref={ref}
        value={value}
        onChange={(event) => {
          onChange?.(event.target.value);
        }}
        placeholder={'Search icon...'}
      />
      <div className={'counter'}>
        {count}/{total}
      </div>
    </StyledSearch>
  );
};
