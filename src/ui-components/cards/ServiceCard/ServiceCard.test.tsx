import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ServiceCard } from './ServiceCard';

import type { ServiceCardProps } from './ServiceCard';

const mockProps: ServiceCardProps = {
  title: 'Gestão de Equipamentos',
  description: 'Controle completo do parque tecnológico hospitalar.',
  bullets: ['Inventário técnico', 'Manutenção preventiva', 'Rastreabilidade completa'],
  href: '/servico-gestao',
};

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ServiceCard', () => {
  describe('Rendering', () => {
    it('renders title', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      expect(screen.getByText('Gestão de Equipamentos')).toBeInTheDocument();
    });

    it('renders description', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      expect(screen.getByText('Controle completo do parque tecnológico hospitalar.')).toBeInTheDocument();
    });

    it('renders all bullet items', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      expect(screen.getByText('Inventário técnico')).toBeInTheDocument();
      expect(screen.getByText('Manutenção preventiva')).toBeInTheDocument();
      expect(screen.getByText('Rastreabilidade completa')).toBeInTheDocument();
    });

    it('renders the learn more link', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      expect(screen.getByText('Saiba mais')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('renders link with correct href', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      const link = screen.getByRole('link', { name: 'Saiba mais' });
      expect(link).toHaveAttribute('href', '/servico-gestao');
    });
  });

  describe('Optional props', () => {
    it('renders optional icon when provided', () => {
      renderWithRouter(<ServiceCard {...mockProps} icon={<span data-testid="service-icon">icon</span>} />);
      expect(screen.getByTestId('service-icon')).toBeInTheDocument();
    });

    it('does not render icon container when icon is not provided', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      expect(screen.queryByTestId('service-icon')).not.toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('renders article element for the card', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      const article = screen.getByRole('article');
      expect(article).toBeInTheDocument();
    });

    it('uses semantic heading for title', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      const heading = screen.getByRole('heading', { level: 3 });
      expect(heading).toBeInTheDocument();
      expect(heading).toHaveTextContent('Gestão de Equipamentos');
    });

    it('uses semantic list for bullets', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      const list = screen.getByRole('list');
      expect(list).toBeInTheDocument();
    });

    it('renders list items for each bullet', () => {
      renderWithRouter(<ServiceCard {...mockProps} />);
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(3);
    });
  });

  describe('Edge cases', () => {
    it('handles empty bullets array', () => {
      const propsWithEmptyBullets: ServiceCardProps = {
        ...mockProps,
        bullets: [],
      };
      renderWithRouter(<ServiceCard {...propsWithEmptyBullets} />);
      // When bullets is empty, the ul is rendered but empty
      const bulletsList = document.querySelector('[class="bullets"]');
      expect(bulletsList).toBeInTheDocument();
      expect(bulletsList?.children.length).toBe(0);
    });

    it('handles single bullet item', () => {
      const propsWithSingleBullet: ServiceCardProps = {
        ...mockProps,
        bullets: ['Single bullet'],
      };
      renderWithRouter(<ServiceCard {...propsWithSingleBullet} />);
      const listItems = screen.getAllByRole('listitem');
      expect(listItems).toHaveLength(1);
    });

    it('handles long title text', () => {
      const propsWithLongTitle: ServiceCardProps = {
        ...mockProps,
        title: 'This is a very long title that might need special handling in the UI',
      };
      renderWithRouter(<ServiceCard {...propsWithLongTitle} />);
      expect(screen.getByText(/This is a very long title/)).toBeInTheDocument();
    });

    it('handles long description text', () => {
      const propsWithLongDescription: ServiceCardProps = {
        ...mockProps,
        description: 'This is a very long description that might need special handling in the UI to ensure proper display and wrapping.',
      };
      renderWithRouter(<ServiceCard {...propsWithLongDescription} />);
      expect(screen.getByText(/This is a very long description/)).toBeInTheDocument();
    });

    it('handles root path href', () => {
      const propsWithRootHref: ServiceCardProps = {
        ...mockProps,
        href: '/',
      };
      renderWithRouter(<ServiceCard {...propsWithRootHref} />);
      const link = screen.getByRole('link', { name: 'Saiba mais' });
      expect(link).toHaveAttribute('href', '/');
    });

    it('handles external href', () => {
      const propsWithExternalHref: ServiceCardProps = {
        ...mockProps,
        href: 'https://example.com',
      };
      renderWithRouter(<ServiceCard {...propsWithExternalHref} />);
      const link = screen.getByRole('link', { name: 'Saiba mais' });
      expect(link).toHaveAttribute('href', 'https://example.com');
    });
  });
});
