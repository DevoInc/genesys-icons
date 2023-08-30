import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import * as icons from '../dist/';

import { FilteredGallery } from './components/FilteredGallery';

const meta: Meta = {
  title: 'Gallery',
  parameters: {
    options: {
      showPanel: false,
    },
    a11y: {
      disable: true,
    },
  },
};

export default meta;
type Story = StoryObj;

export const Icons: Story = {
  render: () => <FilteredGallery icons={icons} />,
};
