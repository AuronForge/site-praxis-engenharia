import { render, screen } from '@testing-library/react';

import { ImageCollage } from './ImageCollage';

describe('ImageCollage', () => {
  it('renders images with alt', () => {
    render(
      <ImageCollage
        images={[
          { src: '/images/collage-1.jpg', alt: 'Equipe técnica em manutenção' },
          { src: '/images/collage-2.jpg', alt: 'Profissional em inspeção clínica' },
          { src: '/images/collage-3.jpg', alt: 'Dashboard de indicadores' },
        ]}
      />
    );

    expect(screen.getByAltText('Equipe técnica em manutenção')).toBeInTheDocument();
    expect(screen.getByAltText('Profissional em inspeção clínica')).toBeInTheDocument();
    expect(screen.getByAltText('Dashboard de indicadores')).toBeInTheDocument();
  });
});
