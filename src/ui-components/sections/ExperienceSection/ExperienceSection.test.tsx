import { render, screen } from '@testing-library/react';

import { ExperienceSection } from './ExperienceSection';

import type { ExperienceSectionProps } from './ExperienceSection';

const mockProps: ExperienceSectionProps = {
  heading: 'Mais de 25 Anos Servindo a Saúde Brasileira',
  description:
    'Somos referência em engenharia clínica no Brasil com atuação consistente em instituições de diversos portes.',
  features: [
    {
      title: 'Equipe Multidisciplinar',
      description: 'Profissionais especializados para diferentes frentes técnicas.',
    },
    {
      title: 'Metodologia Reconhecida',
      description: 'Processos padronizados com foco em segurança e performance.',
    },
    {
      title: 'Tecnologia Própria',
      description: 'Plataforma com rastreabilidade e indicadores em tempo real.',
    },
  ],
  images: [
    { src: '/images/experience-1.jpg', alt: 'Equipe técnica em campo' },
    { src: '/images/experience-2.jpg', alt: 'Análise de equipamento médico' },
    { src: '/images/experience-3.jpg', alt: 'Painel de indicadores clínicos' },
  ],
  badge: 'ISO 9001',
  stats: [
    { value: '150+', label: 'Clientes Ativos' },
    { value: '60+', label: 'Cidades Atendidas' },
    { value: '98%', label: 'Contratos Renovados' },
    { value: '15k+', label: 'Equipamentos Mantidos' },
  ],
};

describe('ExperienceSection', () => {
  it('renders heading', () => {
    render(<ExperienceSection {...mockProps} />);

    const heading = screen.getByRole('heading', { level: 2 });
    expect(heading).not.toBeNull();
    expect(heading.textContent).toBe('Mais de 25 Anos Servindo a Saúde Brasileira');
  });

  it('renders 3 features', () => {
    render(<ExperienceSection {...mockProps} />);

    expect(screen.queryByText('Equipe Multidisciplinar')).not.toBeNull();
    expect(screen.queryByText('Metodologia Reconhecida')).not.toBeNull();
    expect(screen.queryByText('Tecnologia Própria')).not.toBeNull();
  });
});
