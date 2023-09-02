import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import * as allFromIcons from '../dist/';
import { config } from '../config';

// Prepare the list of icons
const icons = Object.entries(allFromIcons)
  .filter(([name]) => name.startsWith(config.prefix)) // Leave only Icons
  .map(([name, Cmp]) => ({ name, tags: Cmp.tags, Cmp })); // format the list

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
