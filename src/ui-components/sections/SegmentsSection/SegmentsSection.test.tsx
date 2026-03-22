import { render, screen } from '@testing-library/react';

import { SegmentsSection } from './SegmentsSection';

import type { SegmentsSectionProps } from './SegmentsSection';

const mockProps: SegmentsSectionProps = {
  title: 'Confiança de Instituições Líderes',
  description: 'Atendemos diversos segmentos do setor de saúde.',
  segments: [
    {
      iconName: 'hospital',
      value: '50+',
      label: 'Hospitais',
      description: 'Instituições de pequeno, médio e grande porte',
    },
    {
      iconName: 'heart',
      value: '30+',
      label: 'Clínicas',
      description: 'Clínicas especializadas e ambulatórios',
    },
    {
      iconName: 'lab',
      value: '25+',
      label: 'Laboratórios',
      description: 'Laboratórios de análises clínicas',
    },
  ],
};

describe('SegmentsSection', () => {
  describe('Rendering', () => {
    it('renders title', () => {
      render(<SegmentsSection {...mockProps} />);

      expect(screen.queryByText('Confiança de Instituições Líderes')).not.toBeNull();
    });

    it('renders description when provided', () => {
      render(<SegmentsSection {...mockProps} />);

      expect(screen.queryByText('Atendemos diversos segmentos do setor de saúde.')).not.toBeNull();
    });

    it('does not render description when not provided', () => {
      const propsWithoutDescription = { ...mockProps, description: undefined };
      render(<SegmentsSection {...propsWithoutDescription} />);

      expect(screen.queryByText('Atendemos diversos segmentos do setor de saúde.')).toBeNull();
    });

    it('renders pill when provided', () => {
      const propsWithPill = { ...mockProps, pill: 'Nossos Clientes' };
      render(<SegmentsSection {...propsWithPill} />);

      expect(screen.queryByText('Nossos Clientes')).not.toBeNull();
    });

    it('does not render pill when not provided', () => {
      render(<SegmentsSection {...mockProps} />);

      expect(screen.queryByText('Nossos Clientes')).toBeNull();
    });

    it('renders all segments', () => {
      render(<SegmentsSection {...mockProps} />);

      expect(screen.queryByText('Hospitais')).not.toBeNull();
      expect(screen.queryByText('Clínicas')).not.toBeNull();
      expect(screen.queryByText('Laboratórios')).not.toBeNull();
    });

    it('renders segment values', () => {
      render(<SegmentsSection {...mockProps} />);

      expect(screen.queryByText('50+')).not.toBeNull();
      expect(screen.queryByText('30+')).not.toBeNull();
      expect(screen.queryByText('25+')).not.toBeNull();
    });

    it('renders segment descriptions', () => {
      render(<SegmentsSection {...mockProps} />);

      expect(screen.queryByText('Instituições de pequeno, médio e grande porte')).not.toBeNull();
    });
  });

  describe('Icon Handling', () => {
    it('renders icon from iconName map', () => {
      const { container } = render(<SegmentsSection {...mockProps} />);
      const images = container.querySelectorAll('img[src="/images/icon-hospital.svg"]');

      expect(images.length).toBeGreaterThan(0);
    });

    it('renders custom icon element when provided', () => {
      const propsWithCustomIcon: SegmentsSectionProps = {
        title: 'Test',
        segments: [
          {
            icon: <span data-testid="custom-icon">🏥</span>,
            value: '10',
            label: 'Custom',
            description: 'Test',
          },
        ],
      };
      render(<SegmentsSection {...propsWithCustomIcon} />);

      expect(screen.queryByTestId('custom-icon')).not.toBeNull();
    });

    it('renders fallback icon when iconName is not in map', () => {
      const propsWithInvalidIcon: SegmentsSectionProps = {
        title: 'Test',
        segments: [
          {
            iconName: 'invalid-icon',
            value: '10',
            label: 'Test',
            description: 'Test',
          },
        ],
      };
      const { container } = render(<SegmentsSection {...propsWithInvalidIcon} />);

      // Check if fallback SVG is rendered (circle element)
      const svgImages = container.querySelectorAll('img');
      expect(svgImages.length).toBeGreaterThan(0);
    });

    it('renders fallback icon when no iconName provided', () => {
      const propsWithoutIcon: SegmentsSectionProps = {
        title: 'Test',
        segments: [
          {
            value: '10',
            label: 'Test',
            description: 'Test',
          },
        ],
      };
      const { container } = render(<SegmentsSection {...propsWithoutIcon} />);

      const svgImages = container.querySelectorAll('img');
      expect(svgImages.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('has section landmark', () => {
      const { container } = render(<SegmentsSection {...mockProps} />);

      expect(container.querySelector('section')).not.toBeNull();
    });

    it('has proper heading with id', () => {
      render(<SegmentsSection {...mockProps} />);

      const heading = screen.queryByRole('heading', { level: 2 });
      expect(heading).not.toBeNull();
      expect(heading?.id).toBe('segments-title');
    });

    it('uses article elements for segments', () => {
      const { container } = render(<SegmentsSection {...mockProps} />);

      const articles = container.querySelectorAll('article');
      expect(articles).toHaveLength(3);
    });
  });

  describe('Edge Cases', () => {
    it('handles empty segments array', () => {
      const propsWithEmptySegments = { ...mockProps, segments: [] };
      const { container } = render(<SegmentsSection {...propsWithEmptySegments} />);

      const articles = container.querySelectorAll('article');
      expect(articles).toHaveLength(0);
    });

    it('handles single segment', () => {
      const propsWithSingleSegment: SegmentsSectionProps = {
        title: 'Test',
        segments: [
          {
            iconName: 'hospital',
            value: '1',
            label: 'Single',
            description: 'Test',
          },
        ],
      };
      const { container } = render(<SegmentsSection {...propsWithSingleSegment} />);

      const articles = container.querySelectorAll('article');
      expect(articles).toHaveLength(1);
    });
  });
});
