import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ServicesSection } from './ServicesSection';

import type { ServicesSectionProps } from './ServicesSection';

const mockProps: ServicesSectionProps = {
  title: 'Nossos Serviços',
  description: 'Descrição da seção',
  services: [
    {
      title: 'Gestão de Equipamentos',
      description: 'Controle completo do parque tecnológico.',
      bullets: ['Inventário técnico', 'Planos preventivos', 'Rastreabilidade'],
      href: '/servico-1',
    },
    {
      title: 'Engenharia de Processos',
      description: 'Padronização e eficiência operacional.',
      bullets: ['Mapeamento', 'SLA por criticidade', 'Indicadores de desempenho'],
      href: '/servico-2',
    },
    {
      title: 'Conformidade Regulatória',
      description: 'Adequação técnica para auditorias e normas.',
      bullets: ['ANVISA', 'RDC 509', 'Planos de ação'],
      href: '/servico-3',
    },
  ],
  ctaBanner: {
    title: 'Precisa de uma solução personalizada?',
    text: 'Nossa equipe desenha um plano sob medida para o seu cenário clínico.',
    buttonLabel: 'Solicitar Proposta',
    href: '#proposta',
  },
};

const renderWithRouter = (component: Parameters<typeof render>[0]): ReturnType<typeof render> => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ServicesSection', () => {
  it('renders 3 cards', () => {
    const { container } = renderWithRouter(<ServicesSection {...mockProps} />);

    const cards = container.querySelectorAll('article');
    expect(cards).toHaveLength(3);
  });

  it('renders banner button', () => {
    renderWithRouter(<ServicesSection {...mockProps} />);

    const buttonLink = screen.getByRole('link', { name: 'Solicitar Proposta' });
    expect(buttonLink).toHaveAttribute('href', '#proposta');
  });

  it('renders section id when provided', () => {
    const { container } = renderWithRouter(<ServicesSection {...mockProps} sectionId="servicos" />);

    expect(container.querySelector('#servicos')).toBeInTheDocument();
  });
});
