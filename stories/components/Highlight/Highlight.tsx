import * as React from 'react';

import { StyledMark } from './StyledMark';

export interface HighlightProps {
  text: string;
  searchText: string;
  prefix?: string;
}

export const Highlight: React.FC<HighlightProps> = ({
  text,
  searchText,
  prefix = '',
}) => {
  if (!searchText || searchText === '') {
    return (
      <span>
        {prefix}
        {text}
      </span>
    );
  }

  const from = text.toLowerCase().indexOf(searchText.toLowerCase().trim());
  if (from < 0) {
    return <span>#{text}</span>;
  }

  const to = from + searchText.length;

  return (
    <span>
      {prefix}
      {text.slice(0, from)}
      <StyledMark>{text.slice(from, to)}</StyledMark>
      {text.slice(to)}
    </span>
  );
};
