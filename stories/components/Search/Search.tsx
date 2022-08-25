import * as React from 'react';
import styled from 'styled-components';

const StyledSearch = styled.div`
  position: relative;
  width: 100%;
  input {
    width: 100%;
    font-size: 1.5rem;
    border: none;
    border-bottom: 1px solid lightgrey;

    &:active,
    &:focus,
    &:hover {
      outline: none;
    }
  }

  .counter {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 1.5rem;
    color: lightgrey;
    font-family: sans-serif;
  }
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
