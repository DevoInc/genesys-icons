import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import { GIBubbleChart, IconContext } from '../../dist/index.js';

const meta: Meta<typeof GIBubbleChart> = {
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
};

export default meta;
type Story = StoryObj<typeof GIBubbleChart>;

export const Icon: Story = {
  args: {
    title: 'Some title',
    color: 'rgba(0, 0, 190, 1)',
    size: 64,
    className: 'some-class-name',
    style: {},
  },
};

export const Context: Story = {
  render: () => (
    <IconContext.Provider
      value={{ title: 'Some title', color: 'red', size: 64 }}
    >
      <GIBubbleChart />
    </IconContext.Provider>
  ),
};
