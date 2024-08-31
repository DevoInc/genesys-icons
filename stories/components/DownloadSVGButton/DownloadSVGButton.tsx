import * as React from 'react';

import { GIArrowDown, GICheckThick } from '../../../dist';
import { StyledButton } from './StyledButton';
import { downloadIcon } from './helpers';
import { StyledButtonSuccess } from './StyledButtonSuccess';
import { DEFAULT_RESTORE_TIME } from '../constants';

interface DownloadSVGButtonProps {
  iconName: string;
  fileName: string;
}

export const DownloadSVGButton: React.FC<DownloadSVGButtonProps> = ({
  iconName,
  fileName,
}) => {
  const [downloaded, setDownloaded] = React.useState(false);

  return !downloaded ? (
    <StyledButton
      onClick={() => {
        if (downloadIcon(iconName, fileName)) {
          setDownloaded(true);
          setTimeout(() => setDownloaded(false), DEFAULT_RESTORE_TIME);
        }
      }}
      title={'Download icon in SVG format'}
    >
      <GIArrowDown size={'14'} />
      <span>SVG</span>
    </StyledButton>
  ) : (
    <StyledButtonSuccess title={'Downloaded icon'}>
      <GICheckThick size={'14'} />
      <span>SVG</span>
    </StyledButtonSuccess>
  );
};
