import * as React from 'react';
import styled from 'styled-components';

const StyledMark = styled.mark`
  background-color: #c6dbf5;
  font-weight: bold;
  color: #5b6870;
`;

export const highlight = (
  str: string,
  match: string | undefined,
  prefix = ''
) => {
  if (!match || match === '')
    return (
      <span>
        {prefix}
        {str}
      </span>
    );
  const from = str.toLowerCase().indexOf(match.toLowerCase().trim());
  if (from < 0) return <span>#{str}</span>;
  const to = from + match.length;
  const pre = str.slice(0, from);
  const highlight = str.slice(from, to);
  const suf = str.slice(to);
  return (
    <span>
      {prefix}
      {pre}
      <StyledMark>{highlight}</StyledMark>
      {suf}
    </span>
  );
};
