import { render, screen } from '@testing-library/react';

import { PlatformSection } from './PlatformSection';

import type { PlatformSectionProps } from './PlatformSection';

const mockProps: PlatformSectionProps = {
  features: [
    {
      icon: 'brain',
      title: 'Inventário Inteligente',
      description: 'Controle de parque tecnológico e histórico de manutenção.',
    },
    {
      icon: 'gauge',
      title: 'Indicadores de Performance',
      description: 'Métricas para gestão estratégica e melhoria contínua.',
    },
    {
      icon: 'shield',
      title: 'Gestão de Riscos',
      description: 'Identificação e mitigação de riscos em tempo real.',
    },
    {
      icon: 'settings',
      title: 'Conformidade Regulatória',
      description: 'Conformidade contínua com normas e requisitos aplicáveis.',
    },
    {
      icon: 'bell',
      title: 'Alertas Automatizados',
      description: 'Notificações preventivas para eventos críticos.',
    },
    {
      icon: 'monitor',
      title: 'Dashboards Executivos',
      description: 'Visão consolidada para tomada de decisão estratégica.',
    },
  ],
};

describe('PlatformSection', () => {
  it('renders heading', () => {
    render(<PlatformSection {...mockProps} />);

    expect(
      screen.queryByRole('heading', { level: 2, name: 'Sistema de Gestão Avançado' })
    ).not.toBeNull();
  });

  it('renders 6 titles', () => {
    const { container } = render(<PlatformSection {...mockProps} />);

    const cards = container.querySelectorAll('article');
    expect(cards).toHaveLength(6);

    expect(screen.queryByText('Inventário Inteligente')).not.toBeNull();
    expect(screen.queryByText('Indicadores de Performance')).not.toBeNull();
    expect(screen.queryByText('Gestão de Riscos')).not.toBeNull();
    expect(screen.queryByText('Conformidade Regulatória')).not.toBeNull();
    expect(screen.queryByText('Alertas Automatizados')).not.toBeNull();
    expect(screen.queryByText('Dashboards Executivos')).not.toBeNull();
  });
});
