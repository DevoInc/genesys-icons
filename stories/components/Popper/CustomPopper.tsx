import * as React from 'react';
import { FC, Dispatch, SetStateAction, useState } from 'react';
import decamelize from 'decamelize';
import {
  copyClassName,
  copyReactComponent,
  downloadIcon,
  SingleItem,
} from '../../utils';
import { GIArrowDown1, GICopy, GICheckThick } from '../../../dist';
import { highlight } from './highlight';
import {
  StyledTextCode,
  StyledIconButton,
  StyledIconButtonSuccess,
  StyledSvgWrapper,
  StyledButton,
  StyledButtonSuccess,
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

const DEFAULT_RESTORE_TIME = 1500;

export const CustomPopper: FC<PopperProps> = ({
  item,
  styles,
  attributes,
  popperRef,
}) => {
  const [copiedClassName, setCopiedClassName] = useState(false);
  const [copiedReactComponent, setCopiedReactComponent] = useState(false);
  const [downloadedSVG, setDownloadedSVG] = useState(false);

  const handleCopyClassName = async (item: SingleItem) => {
    const result = await copyClassName(item);
    if (result) {
      setCopiedClassName(true);
      setCopiedReactComponent(false);
      setTimeout(() => setCopiedClassName(false), DEFAULT_RESTORE_TIME);
    }
  };

  const handleCopyReactComponent = async (item: SingleItem) => {
    const result = await copyReactComponent(item);
    if (result) {
      setCopiedReactComponent(true);
      setCopiedClassName(false);
      setTimeout(() => setCopiedReactComponent(false), DEFAULT_RESTORE_TIME);
    }
  };

  const handleDownloadSVG = async (item: SingleItem) => {
    if (downloadIcon(item)) {
      setDownloadedSVG(true);
      setTimeout(() => setDownloadedSVG(false), DEFAULT_RESTORE_TIME);
    }
  };

  return item ? (
    <StyledInfoContainer
      ref={popperRef}
      style={styles.popper}
      {...attributes.popper}
    >
      <div>
        <StyledSvgWrapper className={`svg-wrapper svg-${item.name[1]}`}>
          <item.component key={item.name} title={item.name} size={32} />
          <div className={'d-flex flex-js-center'}>
            {!downloadedSVG && (
              <StyledButton
                onClick={() => handleDownloadSVG(item)}
                title={'Download icon in SVG format'}
              >
                <GIArrowDown1 size={'14'} />
                <span>SVG</span>
              </StyledButton>
            )}
            {downloadedSVG && (
              <StyledButtonSuccess title={'Downloaded icon'}>
                <GICheckThick size={'14'} />
                <span>SVG</span>
              </StyledButtonSuccess>
            )}
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
              '',
            )}
            {!copiedClassName && (
              <StyledIconButton
                onClick={async () => handleCopyClassName(item)}
                title={'Copy class name'}
              >
                <GICopy size={'14'} />
              </StyledIconButton>
            )}
            {copiedClassName && (
              <StyledIconButtonSuccess title={'Copied class name'}>
                <GICheckThick size={'14'} />
              </StyledIconButtonSuccess>
            )}
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
              <span className={'code--attr-value'}>{'{32}'}</span>
              &nbsp;
              <span className={'code--attr'}>color</span>
              <span className={'code--common'}>=</span>
              <span className={'code--attr-value'}>{"{'#1f282e'}"}</span>
              <span className={'code--common'}>/&gt;</span>
            </StyledTextCode>
            {!copiedReactComponent && (
              <StyledIconButton
                onClick={async () => handleCopyReactComponent(item)}
                title={'Copy react component code'}
              >
                <GICopy size={'14'} />
              </StyledIconButton>
            )}
            {copiedReactComponent && (
              <StyledIconButtonSuccess title={'Copied code'}>
                <GICheckThick size={'14'} />
              </StyledIconButtonSuccess>
            )}
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
};
