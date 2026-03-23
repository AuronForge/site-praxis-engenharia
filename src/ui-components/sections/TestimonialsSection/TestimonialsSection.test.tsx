import { render, screen } from '@testing-library/react';

import { TestimonialsSection } from './TestimonialsSection';

import type { TestimonialsSectionProps } from './TestimonialsSection';

const mockProps: TestimonialsSectionProps = {
  title: 'O que nossos clientes dizem',
  description: 'Depoimentos de quem confia em nosso trabalho',
  testimonials: [
    {
      id: '1',
      quote: 'Excelente serviço prestado pela equipe.',
      author: 'Maria Silva',
      role: 'Gerente de Manutenção',
      organization: 'Hospital São Lucas',
      avatar: '/avatar-maria.jpg',
    },
    {
      id: '2',
      quote: 'Profissionalismo e dedicação em todos os atendimentos.',
      author: 'João Santos',
      role: 'Diretor Técnico',
      organization: 'Clínica Vida',
    },
  ],
  clientLogos: [
    { src: '/logo-hospital-a.svg', alt: 'Hospital A' },
    { src: '/logo-hospital-b.svg', alt: 'Hospital B' },
  ],
};

describe('TestimonialsSection', () => {
  describe('Rendering', () => {
    it('renders title', () => {
      render(<TestimonialsSection {...mockProps} />);

      expect(screen.queryByText('O que nossos clientes dizem')).not.toBeNull();
    });

    it('renders description when provided', () => {
      render(<TestimonialsSection {...mockProps} />);

      expect(screen.queryByText('Depoimentos de quem confia em nosso trabalho')).not.toBeNull();
    });

    it('does not render description when not provided', () => {
      const propsWithoutDescription = { ...mockProps, description: undefined };
      render(<TestimonialsSection {...propsWithoutDescription} />);

      expect(screen.queryByText('Depoimentos de quem confia em nosso trabalho')).toBeNull();
    });

    it('renders pill when provided', () => {
      const propsWithPill = { ...mockProps, pill: 'Depoimentos' };
      render(<TestimonialsSection {...propsWithPill} />);

      expect(screen.queryByText('Depoimentos')).not.toBeNull();
    });

    it('does not render pill when not provided', () => {
      render(<TestimonialsSection {...mockProps} />);

      expect(screen.queryByText('Depoimentos')).toBeNull();
    });

    it('renders all testimonials', () => {
      render(<TestimonialsSection {...mockProps} />);

      expect(screen.queryByText('Excelente serviço prestado pela equipe.')).not.toBeNull();
      expect(
        screen.queryByText('Profissionalismo e dedicação em todos os atendimentos.')
      ).not.toBeNull();
    });

    it('renders author names', () => {
      render(<TestimonialsSection {...mockProps} />);

      expect(screen.queryByText('Maria Silva')).not.toBeNull();
      expect(screen.queryByText('João Santos')).not.toBeNull();
    });

    it('renders author roles and organizations', () => {
      render(<TestimonialsSection {...mockProps} />);

      expect(screen.queryByText('Gerente de Manutenção')).not.toBeNull();
      expect(screen.queryByText('Hospital São Lucas')).not.toBeNull();
      expect(screen.queryByText('Diretor Técnico')).not.toBeNull();
      expect(screen.queryByText('Clínica Vida')).not.toBeNull();
    });

    // Client logos section temporarily disabled
    // it('renders client logos section when logos provided', () => {
    //   render(<TestimonialsSection {...mockProps} />);

    //   expect(screen.queryByText('Empresas que confiam em nós')).not.toBeNull();
    // });

    it('does not render client logos section when empty', () => {
      const propsWithoutLogos = { ...mockProps, clientLogos: [] };
      render(<TestimonialsSection {...propsWithoutLogos} />);

      expect(screen.queryByText('Empresas que confiam em nós')).toBeNull();
    });

    // Client logos section temporarily disabled
    // it('renders all client logos', () => {
    //   const { container } = render(<TestimonialsSection {...mockProps} />);
    //   const logos = container.querySelectorAll('.logo');

    //   expect(logos).toHaveLength(2);
    // });
  });

  // Avatar feature removed
  // describe('Avatar Handling', () => {
  //   it('renders avatar image when provided', () => {
  //     const { container } = render(<TestimonialsSection {...mockProps} />);
  //     const avatarImages = container.querySelectorAll('img[src="/avatar-maria.jpg"]');

  //     expect(avatarImages.length).toBeGreaterThan(0);
  //   });

  //   it('renders empty avatar div when avatar not provided', () => {
  //     const { container } = render(<TestimonialsSection {...mockProps} />);
  //     const avatars = container.querySelectorAll('.avatar');

  //     // Should have 2 avatars - one img and one div
  //     expect(avatars.length).toBe(2);
  //   });

  //   it('renders alt text for avatar', () => {
  //     render(<TestimonialsSection {...mockProps} />);
  //     const avatarImg = screen.queryByAltText('Maria Silva');

  //     expect(avatarImg).not.toBeNull();
  //   });
  // });

  describe('Accessibility', () => {
    it('has section landmark', () => {
      const { container } = render(<TestimonialsSection {...mockProps} />);

      expect(container.querySelector('section')).not.toBeNull();
    });

    it('has proper heading with id', () => {
      render(<TestimonialsSection {...mockProps} />);

      const heading = screen.queryByRole('heading', { level: 2 });
      expect(heading).not.toBeNull();
      expect(heading?.id).toBe('testimonials-title');
    });

    it('uses blockquote for quotes', () => {
      const { container } = render(<TestimonialsSection {...mockProps} />);
      const blockquotes = container.querySelectorAll('blockquote');

      expect(blockquotes).toHaveLength(2);
    });

    it('uses article elements for testimonials', () => {
      const { container } = render(<TestimonialsSection {...mockProps} />);
      const articles = container.querySelectorAll('article');

      expect(articles).toHaveLength(2);
    });

    it('has aria-hidden on quote icons', () => {
      const { container } = render(<TestimonialsSection {...mockProps} />);
      const quoteIcons = container.querySelectorAll('svg[aria-hidden="true"]');

      expect(quoteIcons.length).toBeGreaterThan(0);
    });
  });

  describe('Edge Cases', () => {
    it('handles empty testimonials array', () => {
      const propsWithEmptyTestimonials = { ...mockProps, testimonials: [] };
      const { container } = render(<TestimonialsSection {...propsWithEmptyTestimonials} />);

      const articles = container.querySelectorAll('article');
      expect(articles).toHaveLength(0);
    });

    it('handles single testimonial', () => {
      const propsWithSingleTestimonial: TestimonialsSectionProps = {
        title: 'Test',
        testimonials: [
          {
            id: '1',
            quote: 'Test quote',
            author: 'Test Author',
            role: 'Test Role',
            organization: 'Test Org',
          },
        ],
        clientLogos: [],
      };
      const { container } = render(<TestimonialsSection {...propsWithSingleTestimonial} />);

      const articles = container.querySelectorAll('article');
      expect(articles).toHaveLength(1);
    });

    // Avatar feature removed
    // it('handles mixed testimonials with and without avatars', () => {
    //   const { container } = render(<TestimonialsSection {...mockProps} />);
    //   const avatars = container.querySelectorAll('.avatar');

    //   expect(avatars.length).toBe(2);
    // });
  });
});
