import * as React from 'react';
import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  arrow,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
  FloatingArrow,
  hide,
} from '@floating-ui/react';
import { useInViewport } from 'ahooks';

import { GalleryContext } from '../../context';
import { StyledSvgWrapperButton } from './StyledSvgWrapperButton';
import { StyledInfoContainer } from './StyledInfoContainer';
import { StyledSvgWrapper } from './StyledSvgWrapper';
import { StyledText } from './StyledText';
import { StyledTags } from './StyledTags';
import { copyClassName, copyReactComponent, getClassName } from './helpers';
import { Highlight } from '../Highlight';
import { CopyButton } from '../CopyButton';
import { DownloadSVGButton } from '../DownloadSVGButton';
import { TextCode } from '../TextCode';
import { Heading } from '../Heading';
import { BasicTarget } from 'ahooks/lib/utils/domTarget';

export interface GalleryItemProps {
  Icon: JSX.ElementType;
}

export const GalleryItem = ({ Icon, name, tags }) => {
  const { selection, setSelection, searchText } =
    React.useContext(GalleryContext);

  const isSelected = selection === name;

  const arrowRef = React.useRef(null);
  const { refs, floatingStyles, context } = useFloating({
    open: isSelected,
    onOpenChange: (_, event) => {
      if (event?.target) {
        const button = event.target as HTMLButtonElement;
        const selectedName = button.getAttribute('data-name') as string;
        setSelection(selectedName);
      }
    },
    middleware: [
      offset(10),
      flip({ fallbackAxisSideDirection: 'end' }),
      shift(),
      arrow({ element: arrowRef }),
      hide(),
    ],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  const iconClassName = getClassName(name);
  const code = `<${name} size={32} color={'#1f282e'} />`;

  const [inViewport] = useInViewport(refs.reference as BasicTarget);

  return (
    <>
      <StyledSvgWrapperButton
        className={`icon-container icon-${name}`}
        key={name}
        data-name={name}
        aria-expanded={isSelected}
        $isSelected={isSelected}
        ref={refs.setReference}
        {...getReferenceProps()}
      >
        {inViewport && (
          <Icon
            key={`icon-${name}`}
            size={32}
            style={{ pointerEvents: 'none' }}
          />
        )}
      </StyledSvgWrapperButton>
      {isSelected && inViewport && (
        <FloatingFocusManager context={context} modal={false}>
          <StyledInfoContainer
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <FloatingArrow
              ref={arrowRef}
              context={context}
              fill={'#fff'}
              stroke={'#ccc'}
              strokeWidth={1}
            />
            <div>
              <StyledSvgWrapper className={`svg-wrapper svg-${name}`}>
                <Icon key={name} title={name} size={32} />
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <DownloadSVGButton iconName={name} fileName={iconClassName} />
                </div>
              </StyledSvgWrapper>
            </div>
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
            >
              <div>
                <Heading>Class name</Heading>
                <StyledText>
                  <Highlight searchText={searchText} text={iconClassName} />
                  <CopyButton
                    title={'Copy class name'}
                    copiedTitle={'Copied class name'}
                    text={iconClassName}
                    asyncAction={copyClassName}
                  />
                </StyledText>
              </div>
              <div
                style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}
              >
                <Heading>React component</Heading>
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  <TextCode
                    tag={<Highlight searchText={searchText} text={name} />}
                  />
                  <CopyButton
                    title={'Copy react component code'}
                    copiedTitle={'Copied code'}
                    text={code}
                    asyncAction={copyReactComponent}
                  />
                </div>
              </div>
              {tags?.length > 1 && (
                <div>
                  <Heading>Tags</Heading>
                  <StyledTags>
                    {tags.map((tag: string) => (
                      <Highlight key={tag} searchText={searchText} text={tag} />
                    ))}
                  </StyledTags>
                </div>
              )}
            </div>
          </StyledInfoContainer>
        </FloatingFocusManager>
      )}
    </>
  );
};
