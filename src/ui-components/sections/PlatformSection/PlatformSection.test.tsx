import { render, screen } from '@testing-library/react';

import { PlatformSection } from './PlatformSection';

import type { PlatformSectionProps } from './PlatformSection';

const mockProps: PlatformSectionProps = {
  title: 'Sistema de Gestão Avançado',
  description:
    'Tecnologia proprietária para gestão de engenharia clínica com rastreabilidade e inteligência de dados.',
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
  ],
};

describe('PlatformSection', () => {
  it('renders heading', () => {
    render(<PlatformSection {...mockProps} />);

    expect(screen.queryByRole('heading', { level: 2, name: mockProps.title })).not.toBeNull();
  });

  it('renders all feature cards', () => {
    const { container } = render(<PlatformSection {...mockProps} />);

    const cards = container.querySelectorAll('article');
    expect(cards).toHaveLength(3);

    expect(screen.queryByText('Inventário Inteligente')).not.toBeNull();
    expect(screen.queryByText('Indicadores de Performance')).not.toBeNull();
    expect(screen.queryByText('Gestão de Riscos')).not.toBeNull();
  });
});
