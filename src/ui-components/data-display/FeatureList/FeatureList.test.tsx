import { render, screen } from '@testing-library/react';

import { FeatureList } from './FeatureList';

import type { FeatureListProps } from './FeatureList';

const mockItems: FeatureListProps['items'] = [
  {
    title: 'Conformidade Regulatória',
    description: 'Adequação contínua às normas técnicas e sanitárias vigentes.',
  },
  {
    title: 'Gestão de Riscos',
    description: 'Identificação preventiva de falhas e planos de mitigação.',
  },
  {
    title: 'Performance Operacional',
    description: 'Acompanhamento de indicadores e melhoria contínua.',
  },
];

describe('FeatureList', () => {
  it('renders all items', () => {
    const { container } = render(<FeatureList items={mockItems} />);

    const listItems = container.querySelectorAll('li');
    expect(listItems).toHaveLength(3);

    expect(screen.getByText('Conformidade Regulatória')).toBeInTheDocument();
    expect(screen.getByText('Gestão de Riscos')).toBeInTheDocument();
    expect(screen.getByText('Performance Operacional')).toBeInTheDocument();
  });

  it('renders item descriptions', () => {
    render(<FeatureList items={mockItems} />);

    expect(
      screen.getByText('Adequação contínua às normas técnicas e sanitárias vigentes.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Identificação preventiva de falhas e planos de mitigação.')
    ).toBeInTheDocument();
    expect(
      screen.getByText('Acompanhamento de indicadores e melhoria contínua.')
    ).toBeInTheDocument();
  });

  it('uses list semantics with clear headings', () => {
    const { container } = render(<FeatureList items={mockItems} />);

    const list = container.querySelector('ul');
    const headings = screen.getAllByRole('heading', { level: 3 });

    expect(list).toBeInTheDocument();
    expect(headings).toHaveLength(3);
  });
});
