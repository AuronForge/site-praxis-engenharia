import type { ReactElement } from 'react';

import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ServiceCard } from './ServiceCard';

import type { ServiceCardProps } from './ServiceCard';

const renderWithRouter = (ui: ReactElement): ReturnType<typeof render> => {
  return render(ui, { wrapper: BrowserRouter });
};

const mockProps: ServiceCardProps = {
  title: 'Gestão de Equipamentos',
  description: 'Controle completo do parque tecnológico hospitalar.',
  bullets: ['Inventário técnico', 'Manutenção preventiva', 'Rastreabilidade completa'],
  href: '/servico-gestao',
};

const internalProps: ServiceCardProps = {
  title: 'Engenharia Clínica',
  description: 'Gestão completa do parque tecnológico.',
  bullets: ['Manutenção Preventiva', 'Manutenção Corretiva', 'Calibração'],
  href: '/engenharia-clinica',
};

describe('ServiceCard', () => {
  describe('Route links', () => {
    it('renders title and bullet items', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);

      expect(screen.getByText('Gestão de Equipamentos')).toBeInTheDocument();
      expect(screen.getByText('Inventário técnico')).toBeInTheDocument();
      expect(screen.getByText('Manutenção preventiva')).toBeInTheDocument();
      expect(screen.getByText('Rastreabilidade completa')).toBeInTheDocument();
    });

    it('renders route link with anchor tag output', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);

      const link = screen.getByRole('link', { name: 'Saiba mais' });
      expect(link).toHaveAttribute('href', '/servico-gestao');
      expect(link.tagName).toBe('A');
    });

    it('renders optional icon when provided', () => {
      renderWithRouter(
        <ServiceCard {...mockProps} icon={<span data-testid="service-icon">icon</span>} />
      );

      expect(screen.getByTestId('service-icon')).toBeInTheDocument();
    });

    it('renders description correctly', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);

      expect(
        screen.getByText('Controle completo do parque tecnológico hospitalar.')
      ).toBeInTheDocument();
    });
  });

  describe('Internal Links (route links)', () => {
    it('renders internal link with Link component for path starting with /', () => {
      renderWithRouter(<ServiceCard {...internalProps} />);

      const link = screen.getByRole('link', { name: 'Saiba mais' });
      expect(link).toHaveAttribute('href', '/engenharia-clinica');
    });

    it('renders all internal link features', () => {
      renderWithRouter(<ServiceCard {...internalProps} />);

      expect(screen.getByText('Engenharia Clínica')).toBeInTheDocument();
      expect(screen.getByText('Manutenção Preventiva')).toBeInTheDocument();
      expect(screen.getByText('Manutenção Corretiva')).toBeInTheDocument();
      expect(screen.getByText('Calibração')).toBeInTheDocument();
    });

    it('renders description for internal link', () => {
      renderWithRouter(<ServiceCard {...internalProps} />);

      expect(screen.getByText('Gestão completa do parque tecnológico.')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper heading structure', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);

      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toHaveTextContent('Gestão de Equipamentos');
    });

    it('has link with accessible name', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);

      const link = screen.getByRole('link', { name: 'Saiba mais' });
      expect(link).toBeInTheDocument();
    });

    it('does not render link when href is not provided', () => {
      renderWithRouter(
        <ServiceCard
          title="Planejamento"
          description="Consultoria especializada"
          bullets={['Item 1', 'Item 2']}
          variant="planning"
        />
      );

      expect(screen.queryByRole('link', { name: 'Saiba mais' })).not.toBeInTheDocument();
    });
  });
});
