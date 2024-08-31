import * as React from 'react';

import { GICopy, GICheckThick } from '../../../dist';
import { StyledIconButton } from './StyledIconButton';
import { StyledIconButtonSuccess } from './StyledIconButtonSuccess';
import { DEFAULT_RESTORE_TIME } from '../constants';

interface CopyButton {
  asyncAction: (text: string) => Promise<boolean>;
  title: string;
  copiedTitle: string;
  text: string;
}

export const CopyButton = ({ asyncAction, title, copiedTitle, text }) => {
  const [copied, setCopied] = React.useState(false);

  return !copied ? (
    <StyledIconButton
      onClick={async () => {
        const result = await asyncAction(text);
        if (result) {
          setCopied(true);
          setTimeout(() => setCopied(false), DEFAULT_RESTORE_TIME);
        }
      }}
      title={title}
    >
      <GICopy size={'14'} />
    </StyledIconButton>
  ) : (
    <StyledIconButtonSuccess title={copiedTitle}>
      <GICheckThick size={'14'} />
    </StyledIconButtonSuccess>
  );
};
