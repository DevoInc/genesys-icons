import * as React from 'react';
import { Story } from '@storybook/react';

import * as icons from '../dist/';

import { FilteredGallery } from './components/FilteredGallery';

export default {
  title: 'Gallery',
  component: null,
  parameters: {
    options: {
      showPanel: false,
    },
    a11y: {
      disable: true,
    },
  },
};

export const Icons: Story = () => <FilteredGallery icons={icons} />;
