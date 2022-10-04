import * as React from 'react';
import { Story, Meta } from '@storybook/react';

import { GIBubbleChart } from '../../dist/';

export default {
  title: 'React/Icon',
  component: GIBubbleChart,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: 'number',
    },
  },
  parameters: {
    layout: 'centered',
    options: {
      showPanel: true,
    },
  },
} as Meta;

export const SingleIcon: Story = (args) => <GIBubbleChart {...args} />;
SingleIcon.args = {
  title: 'Some title',
  color: 'rgba(0, 0, 190, 1)',
  size: 64,
  className: 'some-class-name',
  style: {},
};
SingleIcon.storyName = 'Icon';
