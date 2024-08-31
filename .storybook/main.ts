import type { StorybookConfig } from '@storybook/react-vite';
import { mergeConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

const config: StorybookConfig = {
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  stories: ['../stories/**/*.@(mdx|stories.tsx)'],
  async viteFinal(config) {
    // Merge custom configuration into the default config
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
      // Add dependencies to pre-optimization
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
};

export default config;
