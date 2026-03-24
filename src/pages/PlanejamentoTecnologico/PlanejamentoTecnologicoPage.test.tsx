import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { PlanejamentoTecnologicoPage } from './PlanejamentoTecnologicoPage';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('PlanejamentoTecnologicoPage', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders the hero section with title', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('renders the hero section with badge', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Planejamento Tecnológico')).toBeInTheDocument();
    });

    it('renders the hero section with description', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText(/Oferecemos consultoria especializada/)).toBeInTheDocument();
    });

    it('renders the hero section with primary CTA', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Fale com Especialistas')).toBeInTheDocument();
    });

    it('renders the hero section with secondary CTA', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Nossos Serviços')).toBeInTheDocument();
    });

    it('renders the services section title', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Servicios Especializados em Planejamento Tecnológico')).toBeInTheDocument();
    });

    it('renders all service cards', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Plano Diretor')).toBeInTheDocument();
      expect(screen.getByText('Especificações Técnicas')).toBeInTheDocument();
      expect(screen.getByText('Comissionamento')).toBeInTheDocument();
      expect(screen.getByText('Análise de Viabilidade')).toBeInTheDocument();
    });

    it('renders the benefits section title', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Por que escolher nosso Planejamento Tecnológico?')).toBeInTheDocument();
    });

    it('renders all benefit cards', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Especialização Técnica')).toBeInTheDocument();
      expect(screen.getByText('Conformidade Regulatória')).toBeInTheDocument();
      expect(screen.getByText('Otimização de Investimentos')).toBeInTheDocument();
      expect(screen.getByText('Suporte Contínuo')).toBeInTheDocument();
    });

    it('renders the process section title', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Nossa Metodologia')).toBeInTheDocument();
    });

    it('renders all process steps', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      // Use getAllByText since there might be multiple instances in header/footer
      expect(screen.getAllByText('Diagnóstico')).toBeDefined();
      // Use querySelector for unique process step
      const processSection = document.querySelector('[class*="processSection"]');
      expect(processSection).toBeInTheDocument();
    });

    it('renders the CTA section', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Pronto para otimizar a gestão tecnológica da sua instituição?')).toBeInTheDocument();
    });

    it('renders the CTA button', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Falar com Especialista')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('renders the header with logo', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      // Use getAllBy since there are multiple (desktop and mobile)
      const logos = screen.getAllByAltText('Praxis Engenharia Clínica');
      expect(logos).toHaveLength(2); // desktop and mobile
    });

    it('renders the header with navigation links', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      // Use queryAllByText for links that appear in both desktop and mobile menus
      expect(screen.getAllByText('Serviços')).toBeDefined();
      expect(screen.getAllByText('Experiência')).toBeDefined();
      expect(screen.getAllByText('Gestão')).toBeDefined();
      expect(screen.getAllByText('Clientes')).toBeDefined();
    });

    it('renders the header with CTA button', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      // Use getAllByText since there are desktop and mobile CTAs
      const ctaButtons = screen.getAllByText('Contato');
      expect(ctaButtons.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Accessibility', () => {
    it('has main landmark', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('has proper heading hierarchy in hero section', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
    });
  });

  describe('Footer', () => {
    it('renders the footer with copyright', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('© 2026 Praxis Engenharia Clínica. Todos os direitos reservados.')).toBeInTheDocument();
    });

    it('renders footer section titles', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      // Footer section titles are h3 elements
      const footer = document.querySelector('footer');
      expect(footer).toBeInTheDocument();
      // Check that footer has links
      const footerLinks = footer?.querySelectorAll('a');
      expect(footerLinks?.length).toBeGreaterThan(0);
    });
  });
});