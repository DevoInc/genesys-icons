import * as React from 'react';
import { describe, test, expect } from 'vitest';

import { render, screen } from '../../../test/test-utils';
import { IconBase } from './IconBase';

describe('components', () => {
  describe('IconBase', () => {
    test('should render without title', () => {
      const { container } = render(<IconBase data-name="GITestIcon" />);
      const svg = container.querySelector('svg');
      expect(svg.getAttribute('aria-hidden')).toBe('true');
      expect(svg.getAttribute('fill')).toBe('currentColor');
      expect(svg.getAttribute('height')).toBe('32');
      expect(svg.getAttribute('stroke')).toBe('currentColor');
      expect(svg.getAttribute('stroke-width')).toBe('0');
      expect(svg.getAttribute('data-name')).toBe('GITestIcon');
      expect(svg.getAttribute('width')).toBe('32');
      expect(svg.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
      expect(svg.getAttribute('role')).toBe('img');
    });

    test('should render with aria-label', () => {
      render(
        <IconBase
          data-name="GITestIcon"
          title="test"
          color="red"
          size="64"
          className="one"
          role="test"
        />,
      );
      const svg = screen.getByLabelText('test');
      expect(svg).toBeInTheDocument();
      expect(svg.style.color).toBe('red');
      expect(svg.getAttribute('data-name')).toBe('GITestIcon');
      expect(svg.getAttribute('height')).toBe('64');
      expect(svg.getAttribute('width')).toBe('64');
      expect(svg.getAttribute('class')).toBe('one');
      expect(svg.getAttribute('role')).toBe('test');
      const title = svg.querySelector('title');
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('test');
    });
  });
});
