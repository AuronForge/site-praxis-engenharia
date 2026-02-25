import { render, screen } from '@testing-library/react';

import { StatsRow } from './StatsRow';

import type { StatsRowProps } from './StatsRow';

const mockItems: StatsRowProps['items'] = [
  { value: '25+', label: 'Anos de Experiência' },
  { value: '500+', label: 'Projetos Concluídos' },
  { value: '100%', label: 'Conformidade ANVISA' },
];

describe('StatsRow', () => {
  describe('Rendering', () => {
    it('should render all stat items', () => {
      render(<StatsRow items={mockItems} />);
      expect(screen.getByText('25+')).toBeInTheDocument();
      expect(screen.getByText('Anos de Experiência')).toBeInTheDocument();
      expect(screen.getByText('500+')).toBeInTheDocument();
      expect(screen.getByText('Projetos Concluídos')).toBeInTheDocument();
      expect(screen.getByText('100%')).toBeInTheDocument();
      expect(screen.getByText('Conformidade ANVISA')).toBeInTheDocument();
    });

    it('should render correct number of items', () => {
      const { container } = render(<StatsRow items={mockItems} />);
      const stats = container.querySelectorAll('dl');
      expect(stats).toHaveLength(3);
    });

    it('should render helper text when provided', () => {
      const itemsWithHelper = [
        { value: '25+', label: 'Anos de Experiência', helper: 'Desde 1999' },
      ];
      render(<StatsRow items={itemsWithHelper} />);
      expect(screen.getByText('Desde 1999')).toBeInTheDocument();
    });

    it('should not render helper when not provided', () => {
      render(<StatsRow items={[{ value: '25+', label: 'Anos' }]} />);
      const { container } = render(<StatsRow items={mockItems} />);
      const helpers = container.querySelectorAll('dd.helper');
      // Since mockItems don't have helpers, there should be no helper elements
      expect(helpers).toHaveLength(0);
    });
  });

  describe('Variants', () => {
    it('should apply light variant by default', () => {
      const { container } = render(<StatsRow items={mockItems} />);
      const statsRow = container.firstChild;
      expect(statsRow).toHaveClass('light');
    });

    it('should apply dark variant when specified', () => {
      const { container } = render(<StatsRow items={mockItems} variant="dark" />);
      const statsRow = container.firstChild;
      expect(statsRow).toHaveClass('dark');
    });

    it('should apply light variant when explicitly specified', () => {
      const { container } = render(<StatsRow items={mockItems} variant="light" />);
      const statsRow = container.firstChild;
      expect(statsRow).toHaveClass('light');
    });
  });

  describe('Semantic HTML', () => {
    it('should use dl, dt, dd elements for accessibility', () => {
      const { container } = render(<StatsRow items={mockItems} />);
      const dlElements = container.querySelectorAll('dl');
      const dtElements = container.querySelectorAll('dt');
      const ddElements = container.querySelectorAll('dd');

      expect(dlElements.length).toBe(3);
      expect(dtElements.length).toBe(3);
      expect(ddElements.length).toBe(3); // One dd per item (label)
    });

    it('should have dt for value and dd for label', () => {
      const { container } = render(
        <StatsRow items={[{ value: '25+', label: 'Anos de Experiência' }]} />
      );
      const dt = container.querySelector('dt');
      const dd = container.querySelector('dd');

      expect(dt).toHaveTextContent('25+');
      expect(dd).toHaveTextContent('Anos de Experiência');
    });

    it('should have multiple dd when helper is provided', () => {
      const { container } = render(
        <StatsRow items={[{ value: '25+', label: 'Anos', helper: 'Desde 1999' }]} />
      );
      const ddElements = container.querySelectorAll('dd');
      expect(ddElements.length).toBe(2); // label + helper
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty items array', () => {
      const { container } = render(<StatsRow items={[]} />);
      const stats = container.querySelectorAll('dl');
      expect(stats).toHaveLength(0);
    });

    it('should handle single item', () => {
      const { container } = render(<StatsRow items={[{ value: '1', label: 'Item' }]} />);
      const stats = container.querySelectorAll('dl');
      expect(stats).toHaveLength(1);
    });

    it('should handle many items', () => {
      const manyItems = Array.from({ length: 10 }, (_, i) => ({
        value: `${i + 1}`,
        label: `Item ${i + 1}`,
      }));
      const { container } = render(<StatsRow items={manyItems} />);
      const stats = container.querySelectorAll('dl');
      expect(stats).toHaveLength(10);
    });

    it('should handle items with special characters in values', () => {
      render(<StatsRow items={[{ value: '100%', label: 'Test' }]} />);
      expect(screen.getByText('100%')).toBeInTheDocument();
    });

    it('should handle items with long labels', () => {
      const longLabel = 'This is a very long label that might wrap to multiple lines in the UI';
      render(<StatsRow items={[{ value: '1', label: longLabel }]} />);
      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });
  });
});
