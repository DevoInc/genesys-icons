import * as React from 'react';
import { FC, Dispatch, SetStateAction } from 'react';
import decamelize from 'decamelize';
import {
  copyClassName,
  copyReactComponent,
  downloadIcon,
  SingleItem,
} from '../../utils';
import { GIArrowDown1, GICopy } from '../../../dist';
import { highlight } from './highlight';
import {
  StyledTextCode,
  StyledIconButton,
  StyledSvgWrapper,
  StyledButton,
  StyledHeading,
  StyledText,
  StyledTags,
  StyledInfoContainer,
} from '../../utils';
interface PopperProps {
  item: SingleItem | undefined;
  styles: {
    [key: string]: React.CSSProperties;
  };
  attributes: {
    [key: string]:
      | {
          [key: string]: string;
        }
      | undefined;
  };
  popperRef: Dispatch<SetStateAction<null>>;
}

export const CustomPopper: FC<PopperProps> = ({
  item,
  styles,
  attributes,
  popperRef,
}) =>
  item ? (
    <StyledInfoContainer
      ref={popperRef}
      style={styles.popper}
      {...attributes.popper}
    >
      <div>
        <StyledSvgWrapper className={`svg-wrapper svg-${item.name[1]}`}>
          <item.component key={item.name} title={item.name} size={32} />
          <div className={'d-flex flex-js-center'}>
            <StyledButton
              onClick={() => downloadIcon(item)}
              title={'Download icon in SVG format'}
            >
              <GIArrowDown1 size={'14'} />
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
              `${item.name[0].toLowerCase()}-${decamelize(item.name[1], {
                separator: '_',
              })}`,
              item.match,
              ''
            )}
            <StyledIconButton
              onClick={() => copyClassName(item)}
              title={'Copy class name'}
            >
              <GICopy size={'14'} />
            </StyledIconButton>
          </StyledText>
        </div>
        <div className={'d-flex flex-dir-col gap-4'}>
          <StyledHeading>React component</StyledHeading>
          <div className={'d-flex flex-ai-center gap-8'}>
            <StyledTextCode>
              <span className={'code--common'}>&lt;</span>
              <span className={'code--tag'}>
                {highlight(`${item.name[0]}${item.name[1]}`, item.match)}
              </span>
              &nbsp;
              <span className={'code--attr'}>size</span>
              <span className={'code--common'}>=</span>
              <span className={'code--attr-value'}>{'32'}</span>
              &nbsp;
              <span className={'code--attr'}>color</span>
              <span className={'code--common'}>=</span>
              <span className={'code--attr-value'}>{'#1f282e'}</span>
              <span className={'code--common'}>/&gt;</span>
            </StyledTextCode>
            <StyledIconButton
              onClick={() => copyReactComponent(item)}
              title={'Copy react component code'}
            >
              <GICopy size={'14'} />
            </StyledIconButton>
          </div>
        </div>
        {item.tags?.length > 1 && (
          <div>
            <StyledHeading>Tags</StyledHeading>
            <StyledTags>
              {item.tags.map((tag) => highlight(tag, item?.match))}
            </StyledTags>
          </div>
        )}
      </div>
    </StyledInfoContainer>
  ) : (
    <></>
  );
