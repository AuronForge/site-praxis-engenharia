import { render, screen } from '@testing-library/react';

import { HeroSection } from './HeroSection';

import type { HeroSectionProps } from './HeroSection';

const mockProps: HeroSectionProps = {
  badge: 'Certificações e Reconhecimento',
  title: 'Engenharia Clínica de Excelência',
  highlightWord: 'Excelência',
  subtitle: 'Soluções Completas para Gestão Hospitalar',
  description:
    'Oferecemos um portfólio integrado de serviços para garantir a segurança e eficiência de equipamentos médicos.',
  primaryCta: {
    label: 'Fale com Especialista',
    href: '#contato',
  },
  secondaryCta: {
    label: 'Conheça os Serviços',
    href: '#servicos',
  },
  stats: [
    { value: '25+', label: 'Anos de Experiência' },
    { value: '500+', label: 'Projetos Concluídos' },
    { value: '100%', label: 'Conformidade ANVISA' },
  ],
  backgroundImageUrl: '/images/hero-background.jpg',
};

describe('HeroSection', () => {
  describe('Rendering', () => {
    it('should render the badge when provided', () => {
      render(<HeroSection {...mockProps} />);
      expect(screen.getByText('Certificações e Reconhecimento')).toBeInTheDocument();
    });

    it('should not render the badge when not provided', () => {
      const propsWithoutBadge = { ...mockProps, badge: undefined };
      render(<HeroSection {...propsWithoutBadge} />);
      expect(screen.queryByText('Certificações e Reconhecimento')).not.toBeInTheDocument();
    });

    it('should render the title as H1', () => {
      render(<HeroSection {...mockProps} />);
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toBeInTheDocument();
      expect(title).toHaveTextContent('Engenharia Clínica de Excelência');
    });

    it('should highlight the word in title when highlightWord is provided', () => {
      const { container } = render(<HeroSection {...mockProps} />);
      const highlightedSpan = container.querySelector('h1 span');
      expect(highlightedSpan).toBeInTheDocument();
      expect(highlightedSpan).toHaveTextContent('Excelência');
    });

    it('should render title without highlight when highlightWord is not provided', () => {
      const propsWithoutHighlight = { ...mockProps, highlightWord: undefined };
      const { container } = render(<HeroSection {...propsWithoutHighlight} />);
      const highlightedSpan = container.querySelector('h1 span');
      expect(highlightedSpan).not.toBeInTheDocument();
    });

    it('should render the subtitle when provided', () => {
      render(<HeroSection {...mockProps} />);
      expect(screen.getByText('Soluções Completas para Gestão Hospitalar')).toBeInTheDocument();
    });

    it('should render the description', () => {
      render(<HeroSection {...mockProps} />);
      expect(screen.getByText(/Oferecemos um portfólio integrado de serviços/)).toBeInTheDocument();
    });

    it('should render primary CTA button', () => {
      render(<HeroSection {...mockProps} />);
      const primaryCta = screen.getByRole('link', { name: 'Fale com Especialista' });
      expect(primaryCta).toBeInTheDocument();
      expect(primaryCta).toHaveAttribute('href', '#contato');
    });

    it('should render secondary CTA button', () => {
      render(<HeroSection {...mockProps} />);
      const secondaryCta = screen.getByRole('link', { name: 'Conheça os Serviços' });
      expect(secondaryCta).toBeInTheDocument();
      expect(secondaryCta).toHaveAttribute('href', '#servicos');
    });

    it('should render all 3 stats', () => {
      render(<HeroSection {...mockProps} />);
      expect(screen.getByText('25+')).toBeInTheDocument();
      expect(screen.getByText('Anos de Experiência')).toBeInTheDocument();
      expect(screen.getByText('500+')).toBeInTheDocument();
      expect(screen.getByText('Projetos Concluídos')).toBeInTheDocument();
      expect(screen.getByText('100%')).toBeInTheDocument();
      expect(screen.getByText('Conformidade ANVISA')).toBeInTheDocument();
    });

    it('should render stat helper text when provided', () => {
      const propsWithHelper = {
        ...mockProps,
        stats: [{ value: '25+', label: 'Anos de Experiência', helper: 'Desde 1999' }],
      };
      render(<HeroSection {...propsWithHelper} />);
      expect(screen.getByText('Desde 1999')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have section landmark', () => {
      const { container } = render(<HeroSection {...mockProps} />);
      const section = container.querySelector('section');
      expect(section).toBeInTheDocument();
    });

    it('should have only one H1 on the page', () => {
      render(<HeroSection {...mockProps} />);
      const headings = screen.getAllByRole('heading', { level: 1 });
      expect(headings).toHaveLength(1);
    });

    it('should have aria-label on CTA links', () => {
      render(<HeroSection {...mockProps} />);
      const primaryCta = screen.getByRole('link', { name: 'Fale com Especialista' });
      const secondaryCta = screen.getByRole('link', { name: 'Conheça os Serviços' });
      expect(primaryCta).toHaveAttribute('aria-label', 'Fale com Especialista');
      expect(secondaryCta).toHaveAttribute('aria-label', 'Conheça os Serviços');
    });

    it('should have role="status" on badge', () => {
      render(<HeroSection {...mockProps} />);
      const badge = screen.getByRole('status');
      expect(badge).toBeInTheDocument();
      expect(badge).toHaveTextContent('Certificações e Reconhecimento');
    });
  });

  describe('Background Image', () => {
    it('should apply background image when provided', () => {
      const { container } = render(<HeroSection {...mockProps} />);
      const section = container.querySelector('section');
      expect(section).toHaveStyle({
        backgroundImage: 'url(/images/hero-background.jpg)',
      });
    });

    it('should not apply background image when not provided', () => {
      const propsWithoutBg = { ...mockProps, backgroundImageUrl: undefined };
      const { container } = render(<HeroSection {...propsWithoutBg} />);
      const section = container.querySelector('section');
      expect(section).toHaveStyle({
        backgroundImage: undefined,
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty stats array', () => {
      const propsWithoutStats = { ...mockProps, stats: [] };
      render(<HeroSection {...propsWithoutStats} />);
      expect(screen.getByText('Fale com Especialista')).toBeInTheDocument();
    });

    it('should handle highlightWord not in title', () => {
      const propsWithInvalidHighlight = { ...mockProps, highlightWord: 'NotInTitle' };
      render(<HeroSection {...propsWithInvalidHighlight} />);
      const title = screen.getByRole('heading', { level: 1 });
      expect(title).toHaveTextContent('Engenharia Clínica de Excelência');
    });

    it('should handle single stat', () => {
      const propsWithOneStat = {
        ...mockProps,
        stats: [{ value: '25+', label: 'Anos' }],
      };
      render(<HeroSection {...propsWithOneStat} />);
      expect(screen.getByText('25+')).toBeInTheDocument();
      expect(screen.getByText('Anos')).toBeInTheDocument();
    });
  });

  describe('Simple Variant', () => {
    it('should render without CTAs when not provided', () => {
      const simpleProps = {
        title: 'Engenharia Clínica',
        description: 'Gestão completa e especializada',
      };
      render(<HeroSection {...simpleProps} />);

      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Engenharia Clínica');
      expect(screen.getByText('Gestão completa e especializada')).toBeInTheDocument();
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('should render without stats when not provided', () => {
      const simpleProps = {
        title: 'Test Title',
        description: 'Test Description',
      };
      const { container } = render(<HeroSection {...simpleProps} />);

      // Stats section should not be rendered at all
      expect(container.querySelector('.stats')).not.toBeInTheDocument();
    });

    it('should render with only primaryCta', () => {
      const propsWithPrimaryCta = {
        title: 'Test',
        description: 'Test',
        primaryCta: { label: 'Primary', href: '#primary' },
      };
      render(<HeroSection {...propsWithPrimaryCta} />);

      expect(screen.getByRole('link', { name: 'Primary' })).toBeInTheDocument();
      expect(screen.queryByRole('link', { name: 'Secondary' })).not.toBeInTheDocument();
    });

    it('should render with only secondaryCta', () => {
      const propsWithSecondaryCta = {
        title: 'Test',
        description: 'Test',
        secondaryCta: { label: 'Secondary', href: '#secondary' },
      };
      render(<HeroSection {...propsWithSecondaryCta} />);

      expect(screen.getByRole('link', { name: 'Secondary' })).toBeInTheDocument();
    });
  });
});
