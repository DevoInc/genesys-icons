import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*.@(mdx|stories.tsx)'],
  async viteFinal(config) {
    return mergeConfig(config, {
      optimizeDeps: {
        include: [
          '@storybook/blocks',
          'styled-components',
          'decamelize',
          '@floating-ui/react',
        ],
      },
    });
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
  ],
  docs: {
    autodocs: false,
  },
  typescript: {
    check: false
  }
};

export default config;
