import { Meta, StoryObj } from '@storybook/react';

import { GIBubbleChart } from '../../dist/';

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

export const SingleIcon: Story = {
  storyName: 'Icon',
  args: {
    title: 'Some title',
    color: 'rgba(0, 0, 190, 1)',
    size: 64,
    className: 'some-class-name',
    style: {},
  },
};
