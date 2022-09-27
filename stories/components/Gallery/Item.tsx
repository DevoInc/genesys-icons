import * as React from 'react';
import styled from 'styled-components';
import decamelize from 'decamelize';

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledItem = styled.div`
  padding: 1.2rem;
  border: 1px solid lightgrey;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  width: 80px;
`;

const StyledLabel = styled.p`
  font-size: 0.8rem;
  font-family: sans-serif;
  margin: 10px 0 5px 0;
  b {
    color: black;
  }
`;

const StyledClass = styled.p`
  font-size: 0.8rem;
  font-family: sans-serif;
  margin: 0px 0 5px 0;
  b {
    color: black;
  }
`;

const StyledTags = styled.div`
  font-size: 0.6rem;
  font-family: sans-serif;
  color: grey;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  justify-content: center;
  span {
    white-space: nowrap;
  }
  b {
    color: black;
  }
`;

const highlight = (str: string, match: string, prefix = '#') => {
  if (match === '')
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
      <b>{highlight}</b>
      {suf}
    </span>
  );
};

interface ItemProps {
  children: React.ReactElement;
  name: [string, string]; // [Font name prefix, icon name]
  match: string;
  tags: string[];
}

export const Item: React.FC<ItemProps> = ({ children, name, match, tags }) => {
  return (
    <StyledContainer>
      <StyledItem>{children}</StyledItem>
      <StyledLabel>{highlight(`${name[0]}${name[1]}`, match)}</StyledLabel>
      <StyledClass>
        {highlight(
          `${name[0].toLowerCase()}-${decamelize(name[1], { separator: '_' })}`,
          match,
          '.'
        )}
      </StyledClass>
      <StyledTags>{tags.map((tag) => highlight(tag, match))}</StyledTags>
    </StyledContainer>
  );
};
