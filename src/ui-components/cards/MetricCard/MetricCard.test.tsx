import { render, screen } from '@testing-library/react';

import { MetricCard } from './MetricCard';

describe('MetricCard', () => {
  it('renders value and label', () => {
    render(<MetricCard value="150+" label="Clientes Ativos" />);

    expect(screen.getByText('150+')).toBeInTheDocument();
    expect(screen.getByText('Clientes Ativos')).toBeInTheDocument();
  });

  it('renders helper and icon when provided', () => {
    render(
      <MetricCard
        value="98%"
        label="Contratos Renovados"
        helper="Últimos 12 meses"
        icon={<span data-testid="metric-icon">★</span>}
      />
    );

    expect(screen.getByText('Últimos 12 meses')).toBeInTheDocument();
    expect(screen.getByTestId('metric-icon')).toBeInTheDocument();
  });

  it('does not render helper when not provided', () => {
    render(<MetricCard value="60+" label="Cidades Atendidas" />);

    expect(screen.queryByText('Últimos 12 meses')).not.toBeInTheDocument();
  });

  it('applies dark variant class when specified', () => {
    const { container } = render(
      <MetricCard value="15k+" label="Equipamentos Mantidos" variant="dark" />
    );

    expect(container.firstChild).toHaveClass('dark');
  });
});
