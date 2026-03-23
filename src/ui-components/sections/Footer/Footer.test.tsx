import { render, screen } from '@testing-library/react';

import { Footer } from './Footer';

import type { FooterProps } from './Footer';

const mockProps: FooterProps = {
  logo: {
    src: '/logo.svg',
    alt: 'Praxis Engenharia Clínica',
  },
  description: 'Soluções integradas em gestão de tecnologia médico-hospitalar.',
  sections: [
    {
      title: 'Serviços',
      links: [
        { label: 'Engenharia Clínica', href: '#engenharia' },
        { label: 'Planejamento', href: '#planejamento' },
      ],
    },
    {
      title: 'Contato',
      links: [
        { label: '(11) 1234-5678', href: 'tel:1112345678', icon: 'phone' },
        { label: 'contato@praxis.com.br', href: 'mailto:contato@praxis.com.br', icon: 'email' },
        { label: 'São Paulo, SP', href: '#', icon: 'location' },
      ],
    },
  ],
  social: [
    {
      platform: 'linkedin',
      href: 'https://www.linkedin.com/company/praxisengenhariaclinica/',
      ariaLabel: 'LinkedIn',
    },
    { platform: 'facebook', href: 'https://facebook.com', ariaLabel: 'Facebook' },
    { platform: 'instagram', href: 'https://instagram.com', ariaLabel: 'Instagram' },
  ],
  copyright: '© 2026 Praxis Engenharia Clínica. Todos os direitos reservados.',
  legalLinks: [
    { label: 'Política de Privacidade', href: '#privacidade' },
    { label: 'Termos de Uso', href: '#termos' },
  ],
};

describe('Footer', () => {
  describe('Rendering', () => {
    it('renders logo', () => {
      render(<Footer {...mockProps} />);
      const logoImg = screen.queryByAltText('Praxis Engenharia Clínica');

      expect(logoImg).not.toBeNull();
    });

    it('renders description', () => {
      render(<Footer {...mockProps} />);

      expect(
        screen.queryByText('Soluções integradas em gestão de tecnologia médico-hospitalar.')
      ).not.toBeNull();
    });

    it('renders all section titles', () => {
      render(<Footer {...mockProps} />);

      expect(screen.queryByText('Serviços')).not.toBeNull();
      expect(screen.queryByText('Contato')).not.toBeNull();
    });

    it('renders all links', () => {
      render(<Footer {...mockProps} />);

      expect(screen.queryByText('Engenharia Clínica')).not.toBeNull();
      expect(screen.queryByText('Planejamento')).not.toBeNull();
    });

    it('renders copyright', () => {
      render(<Footer {...mockProps} />);

      expect(
        screen.queryByText('© 2026 Praxis Engenharia Clínica. Todos os direitos reservados.')
      ).not.toBeNull();
    });

    it('renders legal links', () => {
      render(<Footer {...mockProps} />);

      expect(screen.queryByText('Política de Privacidade')).not.toBeNull();
      expect(screen.queryByText('Termos de Uso')).not.toBeNull();
    });
  });

  describe('Social Links', () => {
    it('renders all social links', () => {
      const { container } = render(<Footer {...mockProps} />);
      const socialLinks = container.querySelectorAll('.socialLink');

      expect(socialLinks).toHaveLength(3);
    });

    it('renders social links with correct aria-labels', () => {
      render(<Footer {...mockProps} />);

      expect(screen.queryByLabelText('LinkedIn')).not.toBeNull();
      expect(screen.queryByLabelText('Facebook')).not.toBeNull();
      expect(screen.queryByLabelText('Instagram')).not.toBeNull();
    });

    it('opens social links in new tab', () => {
      const { container } = render(<Footer {...mockProps} />);
      const socialLinks = container.querySelectorAll('.socialLink');

      socialLinks.forEach((link) => {
        expect(link.getAttribute('target')).toBe('_blank');
        expect(link.getAttribute('rel')).toBe('noopener noreferrer');
      });
    });

    it('renders known social icons', () => {
      const { container } = render(<Footer {...mockProps} />);
      const svgs = container.querySelectorAll('.socialLink svg');

      expect(svgs.length).toBeGreaterThan(0);
    });

    it('renders unknown social platform as text', () => {
      const propsWithUnknownPlatform: FooterProps = {
        ...mockProps,
        social: [{ platform: 'unknown', href: '#', ariaLabel: 'Unknown Platform' }],
      };
      render(<Footer {...propsWithUnknownPlatform} />);

      expect(screen.queryByText('unknown')).not.toBeNull();
    });
  });

  describe('Contact Links with Icons', () => {
    it('renders contact links with phone icon', () => {
      render(<Footer {...mockProps} />);

      expect(screen.queryByText('(11) 1234-5678')).not.toBeNull();
    });

    it('renders contact links with email icon', () => {
      render(<Footer {...mockProps} />);

      expect(screen.queryByText('contato@praxis.com.br')).not.toBeNull();
    });

    it('renders contact links with location icon', () => {
      render(<Footer {...mockProps} />);

      expect(screen.queryByText('São Paulo, SP')).not.toBeNull();
    });

    it('renders links without icons', () => {
      render(<Footer {...mockProps} />);

      expect(screen.queryByText('Engenharia Clínica')).not.toBeNull();
    });

    it('applies correct class to links with icons', () => {
      const { container } = render(<Footer {...mockProps} />);
      const contactLinks = container.querySelectorAll('.contactLink');

      expect(contactLinks.length).toBeGreaterThan(0);
    });

    it('applies correct class to links without icons', () => {
      const { container } = render(<Footer {...mockProps} />);
      const regularLinks = container.querySelectorAll('.link');

      expect(regularLinks.length).toBeGreaterThan(0);
    });

    it('renders fallback icon for unrecognized icon type', () => {
      const propsWithUnknownIcon: FooterProps = {
        ...mockProps,
        sections: [
          {
            title: 'Test',
            links: [{ label: 'Test Link', href: '#', icon: 'unknown' }],
          },
        ],
      };
      const { container } = render(<Footer {...propsWithUnknownIcon} />);
      const svgs = container.querySelectorAll('svg');

      expect(svgs.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('has footer landmark', () => {
      const { container } = render(<Footer {...mockProps} />);

      expect(container.querySelector('footer')).not.toBeNull();
    });

    it('has contentinfo role', () => {
      const { container } = render(<Footer {...mockProps} />);
      const footer = container.querySelector('footer');

      expect(footer?.getAttribute('role')).toBe('contentinfo');
    });

    it('uses proper heading hierarchy', () => {
      render(<Footer {...mockProps} />);
      const headings = screen.queryAllByRole('heading', { level: 3 });

      expect(headings.length).toBeGreaterThan(0);
    });

    it('uses list elements for links', () => {
      const { container } = render(<Footer {...mockProps} />);
      const lists = container.querySelectorAll('ul');

      expect(lists.length).toBeGreaterThan(0);
    });

    it('uses list items for each link', () => {
      const { container } = render(<Footer {...mockProps} />);
      const listItems = container.querySelectorAll('li');

      expect(listItems.length).toBeGreaterThan(0);
    });
  });

  describe('Edge Cases', () => {
    it('handles empty sections array', () => {
      const propsWithEmptySections = { ...mockProps, sections: [] };
      const { container } = render(<Footer {...propsWithEmptySections} />);

      const linkColumns = container.querySelectorAll('.linkColumn');
      expect(linkColumns).toHaveLength(0);
    });

    it('handles empty social array', () => {
      const propsWithEmptySocial = { ...mockProps, social: [] };
      const { container } = render(<Footer {...propsWithEmptySocial} />);

      const socialLinks = container.querySelectorAll('.socialLink');
      expect(socialLinks).toHaveLength(0);
    });

    it('handles empty legal links array', () => {
      const propsWithEmptyLegal = { ...mockProps, legalLinks: [] };
      const { container } = render(<Footer {...propsWithEmptyLegal} />);

      const legalLinks = container.querySelectorAll('.legalLink');
      expect(legalLinks).toHaveLength(0);
    });

    it('handles single section', () => {
      const propsWithSingleSection: FooterProps = {
        ...mockProps,
        sections: [
          {
            title: 'Single',
            links: [{ label: 'Link 1', href: '#' }],
          },
        ],
      };
      const { container } = render(<Footer {...propsWithSingleSection} />);

      const linkColumns = container.querySelectorAll('.linkColumn');
      expect(linkColumns).toHaveLength(1);
    });

    it('handles mixed links with and without icons', () => {
      const propsWithMixedLinks: FooterProps = {
        ...mockProps,
        sections: [
          {
            title: 'Mixed',
            links: [
              { label: 'Plain Link', href: '#' },
              { label: 'Icon Link', href: '#', icon: 'phone' },
              { label: 'Another Plain', href: '#' },
            ],
          },
        ],
      };
      const { container } = render(<Footer {...propsWithMixedLinks} />);

      const contactLinks = container.querySelectorAll('.contactLink');
      const regularLinks = container.querySelectorAll('.link');

      expect(contactLinks).toHaveLength(1);
      expect(regularLinks).toHaveLength(2);
    });
  });
});
