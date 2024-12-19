import * as React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import {
  GICheckOk,
  GIDevoSymbolLogo,
  IconContext,
  type IconContextProps,
  type IIcon,
} from '../../dist/index.js';

const meta: Meta<typeof GICheckOk> = {
  title: 'React/Icon',
  component: GICheckOk,
  argTypes: {
    color: {
      control: 'color',
    },
    size: {
      control: 'array',
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
type Story = StoryObj<typeof GICheckOk>;

export const Base: Story = {
  args: {
    title: 'Some title',
    color: 'rgba(0, 0, 190, 1)',
    size: 64,
    className: 'some-class-name',
    style: {},
  },
};

export const Asymmetric: Story = {
  args: {
    title: 'Some title',
    color: 'rgba(0, 0, 190, 1)',
    size: [128, 32],
    className: 'some-class-name',
    style: {},
  },
  render: (props: IIcon) => <GIDevoSymbolLogo {...props} />,
};

export const Context: StoryObj<IconContextProps> = {
  args: {
    title: 'Some title',
    color: 'red',
    size: 64,
  },
  render: (props: IconContextProps) => (
    <IconContext.Provider value={props}>
      <GICheckOk />
    </IconContext.Provider>
  ),
};
