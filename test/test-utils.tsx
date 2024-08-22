import * as React from 'react';
import {
  RenderResult,
  render,
  type RenderOptions,
} from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

const AllTheProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <>{children}</>;

const customRender = (
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
