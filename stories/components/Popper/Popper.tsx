import * as React from 'react';
import { forwardRef } from 'react';
import decamelize from 'decamelize';
import styled from 'styled-components';
import { SingleItem } from '../Gallery/types';
import { IconArrowDown1, IconCopy } from '../../../dist/';
import { highlight } from './highlight';
import {
  StyledTextCode,
  StyledIconButton,
  StyledSvgWrapper,
  StyledButton,
  StyledHeading,
  StyledText,
  StyledTags,
} from '../Gallery/styles';

export type PopperStyles = {
  position: string;
  left: number;
  top: number;
};

interface PopperProps {
  item: SingleItem | undefined;
  styles: {
    [key: string]: React.CSSProperties;
  };
  popperStyles: PopperStyles;
  attributes: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | undefined;
  };
}

const DEFAULT_POPPER_WIDTH = 240;
export const Popper = forwardRef(function Popper(props: PopperProps, ref) {
  const StyledInfoContainer = styled.div`
    position: ${props.popperStyles.position};
    top: ${props.popperStyles.top}px;
    left: ${props.popperStyles.left - DEFAULT_POPPER_WIDTH / 2}px;
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

  return props.item ? (
    <StyledInfoContainer
      ref={ref}
      styles={props.styles.popper}
      {...props.attributes.popper}
    >
      <div>
        <StyledSvgWrapper>
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
              `${props.item.name[0].toLowerCase()}-${decamelize(
                props.item.name[1],
                {
                  separator: '_',
                }
              )}`,
              props.item.match,
              ''
            )}
            <StyledIconButton onClick={() => true} title={'Copy class name'}>
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
                {highlight(
                  `${props.item.name[0]}${props.item.name[1]}`,
                  props.item.match
                )}
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
        {props.item.tags?.length > 1 && (
          <div>
            <StyledHeading>Tags</StyledHeading>
            <StyledTags>
              {props.item.tags.map((tag) => highlight(tag, props.item?.match))}
            </StyledTags>
          </div>
        )}
      </div>
    </StyledInfoContainer>
  ) : (
    <></>
  );
});
