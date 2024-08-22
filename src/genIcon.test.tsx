import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '../test/test-utils';
import { genIcon } from './genIcon';

describe('genIcon', () => {
  test('should generate icon without title', () => {
    const Icon = genIcon(
      {
        tag: 'svg',
        attrs: {},
        children: [
          {
            tag: 'other-title',
            attrs: {},
            children: [],
            text: 'test-icon',
          },
        ],
        text: null,
      },
      'tag1,tag2',
    );
    const { container } = render(<Icon />);
    const svg = container.querySelector('svg');
    expect(svg.getAttribute('data-name')).toBe('gi-null');
    expect(svg.getAttribute('data-tags')).toBe('tag1,tag2');
    expect(svg.getAttribute('title')).toBeNull();
  });

  test('should generate icon text-icon', () => {
    const Icon = genIcon(
      {
        tag: 'svg',
        attrs: { 'test-attr': 'attr-value' },
        children: [
          {
            tag: 'title',
            attrs: {},
            children: [],
            text: 'test-icon',
          },
        ],
        text: null,
      },
      'test',
    );
    render(<Icon />);
    expect(screen.getByLabelText('test-icon')).toBeInTheDocument();
    expect(screen.getByLabelText('test-icon').getAttribute('test-attr')).toBe(
      'attr-value',
    );
    expect(Icon.displayName).toBe('gi-test-icon');
  });
});
