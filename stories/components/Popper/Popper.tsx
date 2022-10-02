import * as React from 'react';
import { forwardRef } from 'react';
import decamelize from 'decamelize';
import styled from 'styled-components';
import { SingleItem } from '../Gallery/types';
import { highlight } from './highlight';

const StyledHeading = styled.div`
  margin-bottom: 4px;
  font-size: 13px;
  font-weight: bold;
  color: #1f282e;
`;

const StyledText = styled.p`
  margin: 0;
  font-size: 12px;
  white-space: nowrap;
`;

const StyledTags = styled.div`
  flex-wrap: wrap;
  column-gap: 8px;
  row-gap: 2px;
  display: flex;
  font-size: 12px;

  span {
    white-space: nowrap;
  }
`;

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
        <StyledHeading>React component name</StyledHeading>
        <StyledText>
          {highlight(
            `${props.item.name[0]}${props.item.name[1]}`,
            props.item.match
          )}
        </StyledText>
      </div>
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
        </StyledText>
      </div>
      {props.item.tags?.length > 1 && (
        <div>
          <StyledHeading>Tags</StyledHeading>
          <StyledTags>
            {props.item.tags.map((tag) => highlight(tag, props.item?.match))}
          </StyledTags>
        </div>
      )}
    </StyledInfoContainer>
  ) : (
    <></>
  );
});
