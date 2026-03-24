import { render, screen } from '@testing-library/react';

import { ManagementSection } from './ManagementSection';

describe('ManagementSection', () => {
  const mockIcon = <span data-testid="mock-icon">icon</span>;

  const mockProps = {
    title: 'Gestão Profissional de Tecnologia Médico-Hospitalar',
    description:
      'Nossa equipe de engenheiros clínicos e técnicos especializados atua de forma integrada na gestão do ciclo de vida dos equipamentos médico-hospitalares, desde o planejamento de aquisição até o descarte final.',
    methodology:
      'Com metodologia baseada em normas nacionais e internacionais (ABNT, ANVISA, IEC), garantimos que sua instituição opere com máxima eficiência, segurança e conformidade regulatória.',
    whyChooseTitle: 'Por que escolher a Praxis?',
    whyChooseItems: [
      { text: 'Equipe certificada e continuamente atualizada' },
      { text: 'Sistema próprio de gestão tecnológica' },
      { text: 'Atendimento 24/7 para situações emergenciais' },
      { text: 'Experiência com mais de 15.000 equipamentos' },
    ],
    metrics: [
      {
        value: '98%',
        label: 'Disponibilidade Média',
        description: 'Taxa de disponibilidade dos equipamentos críticos sob gestão',
        icon: mockIcon,
      },
      {
        value: '4h',
        label: 'Tempo Médio de Resposta',
        description: 'Para atendimento de chamados corretivos',
        icon: mockIcon,
      },
      {
        value: '100%',
        label: 'Conformidade',
        description: 'Atendimento às normas ANVISA e requisitos de acreditação',
        icon: mockIcon,
      },
    ],
  };

  it('renders section with correct title', () => {
    render(<ManagementSection {...mockProps} />);
    expect(
      screen.getByRole('heading', {
        name: /gestão profissional de tecnologia médico-hospitalar/i,
      })
    ).toBeInTheDocument();
  });

  it('renders description and methodology text', () => {
    render(<ManagementSection {...mockProps} />);
    expect(screen.getByText(/nossa equipe de engenheiros clínicos/i)).toBeInTheDocument();
    expect(screen.getByText(/com metodologia baseada em normas/i)).toBeInTheDocument();
  });

  it('renders why choose title and all items', () => {
    render(<ManagementSection {...mockProps} />);
    expect(screen.getByText(/por que escolher a praxis\?/i)).toBeInTheDocument();
    expect(screen.getByText(/equipe certificada e continuamente atualizada/i)).toBeInTheDocument();
    expect(screen.getByText(/sistema próprio de gestão tecnológica/i)).toBeInTheDocument();
    expect(screen.getByText(/atendimento 24\/7 para situações emergenciais/i)).toBeInTheDocument();
    expect(screen.getByText(/experiência com mais de 15\.000 equipamentos/i)).toBeInTheDocument();
  });

  it('renders all metrics with correct values', () => {
    render(<ManagementSection {...mockProps} />);
    expect(screen.getByText('98%')).toBeInTheDocument();
    expect(screen.getByText('4h')).toBeInTheDocument();
    expect(screen.getByText('100%')).toBeInTheDocument();
  });

  it('renders all metric labels', () => {
    render(<ManagementSection {...mockProps} />);
    expect(screen.getByText('Disponibilidade Média')).toBeInTheDocument();
    expect(screen.getByText('Tempo Médio de Resposta')).toBeInTheDocument();
    expect(screen.getByText('Conformidade')).toBeInTheDocument();
  });

  it('renders all metric descriptions', () => {
    render(<ManagementSection {...mockProps} />);
    expect(
      screen.getByText(/taxa de disponibilidade dos equipamentos críticos/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/para atendimento de chamados corretivos/i)).toBeInTheDocument();
    expect(
      screen.getByText(/atendimento às normas anvisa e requisitos de acreditação/i)
    ).toBeInTheDocument();
  });

  it('renders check icons for feature items', () => {
    const { container } = render(<ManagementSection {...mockProps} />);
    const checkIcons = container.querySelectorAll('svg');
    // Should have check icons for features + icons for metrics
    expect(checkIcons.length).toBeGreaterThan(0);
  });

  it('has correct accessibility attributes', () => {
    render(<ManagementSection {...mockProps} />);
    const section = screen.getByRole('region', {
      name: /gestão profissional de tecnologia médico-hospitalar/i,
    });
    expect(section).toHaveAttribute('aria-labelledby', 'management-title');
  });

  it('renders with empty why choose items', () => {
    const propsWithEmptyItems = { ...mockProps, whyChooseItems: [] };
    render(<ManagementSection {...propsWithEmptyItems} />);
    expect(screen.getByText(/por que escolher a praxis\?/i)).toBeInTheDocument();
  });

  it('renders with empty metrics', () => {
    const propsWithEmptyMetrics = { ...mockProps, metrics: [] };
    render(<ManagementSection {...propsWithEmptyMetrics} />);
    expect(
      screen.getByRole('heading', {
        name: /gestão profissional de tecnologia médico-hospitalar/i,
      })
    ).toBeInTheDocument();
  });
});
