import { Preview } from '@storybook/react';

import './preview.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    options: {
      storySort: {
        order: [
          'Introduction',
          'Installation',
          'Gallery',
          'React',
          'Font',
          'Doc',
          ['Development', '*'],
        ],
      },
    },
  },
};

export default preview;
