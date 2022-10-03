import * as React from 'react';
import { forwardRef } from 'react';
import decamelize from 'decamelize';
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
  getStyledInfoContainer,
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

export const Popper = forwardRef(function Popper(props: PopperProps, ref) {
  const InfoContainer = getStyledInfoContainer(props.popperStyles);

  return props.item ? (
    <InfoContainer
      ref={ref}
      styles={props.styles.popper}
      {...props.attributes.popper}
    >
      <div>
        <StyledSvgWrapper>
          {props.item.component}
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
    </InfoContainer>
  ) : (
    <></>
  );
});
