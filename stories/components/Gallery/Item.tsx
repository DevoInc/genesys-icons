import React, { useState } from 'react';
import { usePopper } from 'react-popper';
import styled, { css } from 'styled-components';
import decamelize from 'decamelize';
import { useOnEventOutside } from '../../hooks/useOnEventOutside';
import { IconArrowDown1, IconCopy } from '../../../dist/';
import {
  StyledButton,
  StyledContainer,
  StyledHeading,
  StyledIconButton,
  StyledInfoContainer,
  StyledMark,
  StyledSvgWrapper,
  StyledSvgWrapperButton,
  StyledTags,
  StyledText,
  StyledTextCode,
} from './styles';

const highlight = (str: string, match: string, prefix = '') => {
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
      <StyledMark>{highlight}</StyledMark>
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
  const [hideInfo, setHideInfo] = React.useState(true);
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement: 'bottom-start',
  });
  // Click Outside - Hook
  useOnEventOutside({
    references: [referenceElement, popperElement],
    handler: setHideInfo,
  });
  return (
    <StyledContainer>
      <StyledContainer>
        <StyledSvgWrapperButton
          ref={setReferenceElement}
          onClick={() => setHideInfo(!hideInfo)}
          aria-expanded={hideInfo ? null : true}
        >
          {children}
        </StyledSvgWrapperButton>
        {!hideInfo && (
          <StyledInfoContainer
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div>
              <StyledSvgWrapper>
                {children}
                <div className={'d-flex flex-js-center'}>
                  <StyledButton
                    onClick={() => true}
                    title={'Download icon in SVG format'}
                  >
                    <IconArrowDown1 size={'14'} />
                    <span>SVG</span>
                  </StyledButton>
                </div>
              </StyledSvgWrapper>
            </div>
            <div className={'d-flex flex-dir-col gap-20'}>
              <div>
                <StyledHeading>Class name</StyledHeading>
                <StyledText>
                  {highlight(
                    `${name[0].toLowerCase()}-${decamelize(name[1], {
                      separator: '_',
                    })}`,
                    match,
                    ''
                  )}
                  <StyledIconButton
                    onClick={() => true}
                    title={'Copy class name'}
                  >
                    <IconCopy size={'14'} />
                  </StyledIconButton>
                </StyledText>
              </div>
              <div className={'d-flex flex-dir-col gap-4'}>
                <StyledHeading>React component</StyledHeading>
                <div className={'d-flex flex-ai-center gap-8'}>
                  <StyledTextCode>
                    <span className={'code--common'}>&lt;</span>
                    <span className={'code--tag'}>
                      {highlight(`${name[0]}${name[1]}`, match)}
                    </span>
                    &nbsp;
                    <span className={'code--attr'}>size</span>
                    <span className={'code--common'}>=</span>
                    <span className={'code--attr-value'}>"32"</span>
                    &nbsp;
                    <span className={'code--attr'}>color</span>
                    <span className={'code--common'}>=</span>
                    <span className={'code--attr-value'}>"#1f282e"</span>
                    <span className={'code--common'}>/&gt;</span>
                  </StyledTextCode>
                  <StyledIconButton
                    onClick={() => true}
                    title={'Copy react component code'}
                  >
                    <IconCopy size={'14'} />
                  </StyledIconButton>
                </div>
              </div>
              {tags?.length > 1 && (
                <div>
                  <StyledHeading>Tags</StyledHeading>
                  <StyledTags>
                    {tags.map((tag) => highlight(tag, match))}
                  </StyledTags>
                </div>
              )}
            </div>
          </StyledInfoContainer>
        )}
      </StyledContainer>
    </StyledContainer>
  );
};
