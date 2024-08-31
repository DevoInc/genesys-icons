import * as React from 'react';

import { StyledTextCode } from './StyledTextCode';

interface TextCodeProps {
  tag: React.ReactNode;
}

export const TextCode: React.FC<TextCodeProps> = ({ tag }) => (
  <StyledTextCode>
    <span className={'code--common'}>&lt;</span>
    <span className={'code--tag'}>{tag}</span>
    &nbsp;
    <span className={'code--attr'}>size</span>
    <span className={'code--common'}>=</span>
    <span className={'code--attr-value'}>{'{32}'}</span>
    &nbsp;
    <span className={'code--attr'}>color</span>
    <span className={'code--common'}>=</span>
    <span className={'code--attr-value'}>{"{'#1f282e'}"}</span>
    <span className={'code--common'}>/&gt;</span>
  </StyledTextCode>
);
