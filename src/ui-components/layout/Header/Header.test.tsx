import { render, screen, fireEvent } from '@testing-library/react';

import { Header } from './Header';

import type { HeaderProps } from './Header';

const mockProps: HeaderProps = {
  brand: {
    name: 'Praxis Engenharia Clínica',
    href: '/',
    logoAlt: 'Praxis Logo',
    logoSrc: '/logo.png',
  },
  links: [
    { label: 'Serviços', href: '#servicos' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Gestão', href: '#gestao' },
    { label: 'Clientes', href: '#clientes' },
  ],
  cta: {
    label: 'Contato',
    href: '#contato',
  },
};

describe('Header', () => {
  describe('Rendering', () => {
    it('should render brand logo when logoSrc is provided', () => {
      render(<Header {...mockProps} />);
      const logo = screen.getByAltText('Praxis Logo');
      expect(logo).toBeInTheDocument();
      expect(logo).toHaveAttribute('src', '/logo.png');
    });

    it('should not render logo image when logoSrc is not provided', () => {
      const propsWithoutLogo = {
        ...mockProps,
        brand: { ...mockProps.brand, logoSrc: undefined },
      };
      render(<Header {...propsWithoutLogo} />);
      expect(screen.queryByAltText('Praxis Logo')).not.toBeInTheDocument();
    });

    it('should render all navigation links', () => {
      render(<Header {...mockProps} />);
      expect(screen.getAllByText('Serviços').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Experiência').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Gestão').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Clientes').length).toBeGreaterThan(0);
    });

    it('should render CTA button', () => {
      render(<Header {...mockProps} />);
      const ctaButtons = screen.getAllByText('Contato');
      expect(ctaButtons.length).toBeGreaterThan(0);
    });

    it('should render correct href for links', () => {
      render(<Header {...mockProps} />);
      const servicosLink = screen.getAllByText('Serviços')[0].closest('a');
      expect(servicosLink).toHaveAttribute('href', '#servicos');
    });

    it('should render correct href for CTA', () => {
      render(<Header {...mockProps} />);
      const ctaButton = screen.getAllByText('Contato')[0].closest('a');
      expect(ctaButton).toHaveAttribute('href', '#contato');
    });
  });

  describe('Accessibility', () => {
    it('should have proper navigation landmarks', () => {
      render(<Header {...mockProps} />);
      const nav = screen.getByRole('navigation', { name: 'Main navigation' });
      expect(nav).toBeInTheDocument();
    });

    it('should have header banner landmark', () => {
      render(<Header {...mockProps} />);
      const header = screen.getByRole('banner');
      expect(header).toBeInTheDocument();
    });

    it('should have aria-label on brand link', () => {
      render(<Header {...mockProps} />);
      const brandLink = screen.getByLabelText('Praxis Engenharia Clínica');
      expect(brandLink).toBeInTheDocument();
    });

    it('should have proper aria-expanded on mobile menu toggle', () => {
      render(<Header {...mockProps} />);
      const menuButton = screen.getByRole('button', { name: /menu/i });
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('should have aria-controls on mobile menu toggle', () => {
      render(<Header {...mockProps} />);
      const menuButton = screen.getByRole('button', { name: /menu/i });
      expect(menuButton).toHaveAttribute('aria-controls', 'mobile-menu');
    });
  });

  describe('Mobile Menu', () => {
    it('should toggle mobile menu when hamburger is clicked', () => {
      render(<Header {...mockProps} />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });

      // Initially closed
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      // Click to open
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');
      expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();

      // Click to close
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('should update aria-label when menu toggles', () => {
      render(<Header {...mockProps} />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });

      // Open menu
      fireEvent.click(menuButton);
      expect(screen.getByRole('button', { name: /close menu/i })).toBeInTheDocument();

      // Close menu
      fireEvent.click(menuButton);
      expect(screen.getByRole('button', { name: /open menu/i })).toBeInTheDocument();
    });

    it('should close mobile menu when a link is clicked', () => {
      render(<Header {...mockProps} />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });

      // Open menu
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');

      // Click a mobile link (find links inside mobile menu)
      const mobileMenu = screen.getByRole('navigation').querySelector('[id="mobile-menu"]');
      const mobileLink = mobileMenu?.querySelector('a');
      if (mobileLink) {
        fireEvent.click(mobileLink);
      }

      // Menu should be closed
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('should close mobile menu on Escape key', () => {
      render(<Header {...mockProps} />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      const nav = screen.getByRole('navigation');

      // Open menu
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');

      // Press Escape
      fireEvent.keyDown(nav, { key: 'Escape' });

      // Menu should be closed
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });

    it('should set tabIndex to -1 for mobile links when menu is closed', () => {
      render(<Header {...mockProps} />);
      const mobileMenu = screen.getByRole('navigation').querySelector('[id="mobile-menu"]');
      const mobileLinks = mobileMenu?.querySelectorAll('a');

      mobileLinks?.forEach((link) => {
        expect(link).toHaveAttribute('tabindex', '-1');
      });
    });

    it('should set tabIndex to 0 for mobile links when menu is open', () => {
      render(<Header {...mockProps} />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });

      // Open menu
      fireEvent.click(menuButton);

      const mobileMenu = screen.getByRole('navigation').querySelector('[id="mobile-menu"]');
      const mobileLinks = mobileMenu?.querySelectorAll('a');

      mobileLinks?.forEach((link) => {
        expect(link).toHaveAttribute('tabindex', '0');
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('should be keyboard accessible', () => {
      render(<Header {...mockProps} />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });

      // Should be able to focus the button
      menuButton.focus();
      expect(document.activeElement).toBe(menuButton);
    });

    it('should handle Escape key only when menu is open', () => {
      render(<Header {...mockProps} />);
      const menuButton = screen.getByRole('button', { name: /open menu/i });
      const nav = screen.getByRole('navigation');

      // Press Escape when menu is closed (should do nothing)
      fireEvent.keyDown(nav, { key: 'Escape' });
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');

      // Open menu
      fireEvent.click(menuButton);
      expect(menuButton).toHaveAttribute('aria-expanded', 'true');

      // Press Escape when menu is open (should close)
      fireEvent.keyDown(nav, { key: 'Escape' });
      expect(menuButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  describe('Responsive Behavior', () => {
    it('should render both desktop and mobile CTA buttons', () => {
      render(<Header {...mockProps} />);
      const ctaButtons = screen.getAllByText('Contato');
      // One for desktop, one for mobile menu
      expect(ctaButtons.length).toBe(2);
    });

    it('should render navigation links for both desktop and mobile', () => {
      render(<Header {...mockProps} />);
      const servicosLinks = screen.getAllByText('Serviços');
      // One in desktop nav, one in mobile menu
      expect(servicosLinks.length).toBe(2);
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty links array', () => {
      const propsWithNoLinks = { ...mockProps, links: [] };
      render(<Header {...propsWithNoLinks} />);
      expect(screen.getAllByText('Contato').length).toBeGreaterThan(0);
    });

    it('should handle single link', () => {
      const propsWithOneLink = {
        ...mockProps,
        links: [{ label: 'Home', href: '/' }],
      };
      render(<Header {...propsWithOneLink} />);
      expect(screen.getAllByText('Home').length).toBeGreaterThan(0);
    });

    it('should render without logo gracefully', () => {
      const propsWithoutLogo = {
        ...mockProps,
        brand: {
          name: 'Praxis',
          href: '/',
          logoAlt: 'Logo',
        },
      };
      const { container } = render(<Header {...propsWithoutLogo} />);
      expect(container.querySelector('img')).not.toBeInTheDocument();
    });
  });
});
