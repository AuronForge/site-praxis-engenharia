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

  it('renders badge when provided', () => {
    render(
      <ImageCollage
        images={[
          { src: '/images/collage-1.jpg', alt: 'Imagem 1' },
          { src: '/images/collage-2.jpg', alt: 'Imagem 2' },
        ]}
        badge={{ text: 'ISO 9001' }}
      />
    );

    expect(screen.getByText('ISO 9001')).toBeInTheDocument();
  });

  it('uses two-images layout when exactly 2 images are provided', () => {
    const { container } = render(
      <ImageCollage
        images={[
          { src: '/images/collage-1.jpg', alt: 'Imagem A' },
          { src: '/images/collage-2.jpg', alt: 'Imagem B' },
        ]}
      />
    );

    const collage = container.querySelector('.collage');
    expect(collage).toHaveClass('twoImages');
  });

  it('renders only first 3 images when more than 3 are provided', () => {
    render(
      <ImageCollage
        images={[
          { src: '/images/1.jpg', alt: 'Primeira' },
          { src: '/images/2.jpg', alt: 'Segunda' },
          { src: '/images/3.jpg', alt: 'Terceira' },
          { src: '/images/4.jpg', alt: 'Quarta' },
        ]}
      />
    );

    expect(screen.getByAltText('Primeira')).toBeInTheDocument();
    expect(screen.getByAltText('Segunda')).toBeInTheDocument();
    expect(screen.getByAltText('Terceira')).toBeInTheDocument();
    expect(screen.queryByAltText('Quarta')).not.toBeInTheDocument();
  });
});
