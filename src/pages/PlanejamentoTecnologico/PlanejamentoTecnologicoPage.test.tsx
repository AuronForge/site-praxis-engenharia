import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { PlanejamentoTecnologicoPage } from './PlanejamentoTecnologicoPage';

const renderWithRouter = (component: Parameters<typeof render>[0]): ReturnType<typeof render> => {
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
      expect(screen.getByText('Serviço Especializado')).toBeInTheDocument();
    });

    it('renders the hero section with description', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText(/Assessoria estratégica para aquisição/)).toBeInTheDocument();
    });

    it('does not render hero CTAs in compact variant', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.queryByText('Fale com Especialistas')).not.toBeInTheDocument();
      expect(screen.queryByText('Nossos Serviços')).not.toBeInTheDocument();
    });

    it('renders the services section title', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Nossos Serviços de Planejamento')).toBeInTheDocument();
    });

    it('renders all service cards', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Plano Diretor de Tecnologia')).toBeInTheDocument();
      expect(screen.getByText('Dimensionamento de Equipamentos')).toBeInTheDocument();
      expect(screen.getByText('Especificação Técnica')).toBeInTheDocument();
      expect(screen.getByText('Análise de Viabilidade')).toBeInTheDocument();
      expect(screen.getByText('Consultoria em Aquisições')).toBeInTheDocument();
      expect(screen.getByText('Infraestrutura e Instalações')).toBeInTheDocument();
    });

    it('does not render service card links in planning variant', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.queryByRole('link', { name: 'Saiba mais' })).not.toBeInTheDocument();
    });

    it('renders the informative section title', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Decisões Estratégicas Baseadas em Dados')).toBeInTheDocument();
    });

    it('renders the informative section content and benefits', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Benefícios do Planejamento')).toBeInTheDocument();
      expect(screen.getByText('Redução de custos de aquisição e operação')).toBeInTheDocument();
      expect(screen.getByText('Alinhamento com objetivos estratégicos')).toBeInTheDocument();
      expect(screen.getByText('Otimização do investimento em tecnologia')).toBeInTheDocument();
      expect(
        screen.getByText('Previsibilidade orçamentária de médio/longo prazo')
      ).toBeInTheDocument();
    });

    it('renders informative metrics', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('30%')).toBeInTheDocument();
      expect(screen.getByText('200+')).toBeInTheDocument();
      expect(screen.getByText('15+')).toBeInTheDocument();
      expect(screen.getByText('Redução de Custos')).toBeInTheDocument();
      expect(screen.getByText('Projetos Realizados')).toBeInTheDocument();
      expect(screen.getByText('Anos de Experiência')).toBeInTheDocument();
    });

    it('renders the process section title', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getByText('Nossa Metodologia de Planejamento')).toBeInTheDocument();
      expect(
        screen.getByText('Processo estruturado para garantir investimentos assertivos')
      ).toBeInTheDocument();
    });

    it('renders all process steps', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(screen.getAllByText('Diagnóstico')).toBeDefined();
      expect(screen.getByText('Análise')).toBeInTheDocument();
      expect(screen.getAllByText('Planejamento').length).toBeGreaterThan(0);
      expect(screen.getByText('Implementação')).toBeInTheDocument();
      expect(screen.getByText('Revisão')).toBeInTheDocument();
      const processSection = document.querySelector('[class*="processSection"]');
      expect(processSection).toBeInTheDocument();
    });

    it('renders the CTA section', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      expect(
        screen.getByText('Precisa Estruturar Seu Planejamento Tecnológico?')
      ).toBeInTheDocument();
      expect(
        screen.getByText(
          'Nossa equipe está pronta para desenvolver um plano diretor customizado para as necessidades da sua instituição'
        )
      ).toBeInTheDocument();
    });

    it('renders the CTA buttons', () => {
      renderWithRouter(<PlanejamentoTecnologicoPage />);
      const primaryButton = screen.getByRole('link', { name: 'Solicitar Consultoria' });
      const secondaryButton = screen.getByRole('link', { name: 'Voltar ao Início' });

      expect(primaryButton).toHaveAttribute('href', '/contato');
      expect(secondaryButton).toHaveAttribute('href', '/');
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
      expect(screen.getAllByText('Engenharia Clinica')).toBeDefined();
      expect(screen.getAllByText('Planejamento Tecnoloógico')).toBeDefined();
      expect(screen.getAllByText('Acreditação')).toBeDefined();
      expect(screen.getAllByText('Trabalhe Conosco')).toBeDefined();
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
      expect(
        screen.getByText('© 2026 Praxis Engenharia Clínica. Todos os direitos reservados.')
      ).toBeInTheDocument();
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
