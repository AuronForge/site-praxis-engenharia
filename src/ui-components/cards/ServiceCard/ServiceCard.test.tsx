import { render, screen } from '@testing-library/react';

import { ServiceCard } from './ServiceCard';

import type { ServiceCardProps } from './ServiceCard';

const mockProps: ServiceCardProps = {
  title: 'Gestão de Equipamentos',
  description: 'Controle completo do parque tecnológico hospitalar.',
  bullets: ['Inventário técnico', 'Manutenção preventiva', 'Rastreabilidade completa'],
  href: '#servico-gestao',
};

describe('ServiceCard', () => {
  it('renders title and bullet items', () => {
    render(<ServiceCard {...mockProps} />);

    expect(screen.getByText('Gestão de Equipamentos')).toBeInTheDocument();
    expect(screen.getByText('Inventário técnico')).toBeInTheDocument();
    expect(screen.getByText('Manutenção preventiva')).toBeInTheDocument();
    expect(screen.getByText('Rastreabilidade completa')).toBeInTheDocument();
  });

  it('renders link with correct href', () => {
    render(<ServiceCard {...mockProps} />);

    const link = screen.getByRole('link', { name: 'Saiba mais' });
    expect(link).toHaveAttribute('href', '#servico-gestao');
  });

  it('renders optional icon when provided', () => {
    render(<ServiceCard {...mockProps} icon={<span data-testid="service-icon">icon</span>} />);

    expect(screen.getByTestId('service-icon')).toBeInTheDocument();
  });
});
