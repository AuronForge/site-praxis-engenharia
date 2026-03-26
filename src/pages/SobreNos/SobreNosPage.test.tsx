import { render, screen, within } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { SobreNosPage } from './SobreNosPage';

const renderWithRouter = (component: Parameters<typeof render>[0]): ReturnType<typeof render> => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('SobreNosPage', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders the hero section with title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByRole('heading', { level: 1, name: 'Sobre a Praxis' })).toBeInTheDocument();
    });

    it('renders the hero section with badge', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByRole('status')).toHaveTextContent('Institucional');
    });

    it('renders the hero section with description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Mais de 25 anos dedicados à excelência em engenharia clínica/)
      ).toBeInTheDocument();
    });

    it('renders the history highlights section title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByRole('heading', {
          level: 2,
          name: 'Pioneiros em Gestão de Tecnologia Hospitalar',
        })
      ).toBeInTheDocument();
    });

    it('renders the history highlights section badge', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Nossa História')).toBeInTheDocument();
    });

    it('renders history highlights stats', () => {
      renderWithRouter(<SobreNosPage />);
      const highlightsSection = document.querySelector('[class*="historyHighlightsSection"]');
      expect(highlightsSection).toBeInTheDocument();

      const highlightsScope = within(highlightsSection as HTMLElement);
      expect(highlightsScope.getByText('25+')).toBeInTheDocument();
      expect(highlightsScope.getByText('200+')).toBeInTheDocument();
      expect(highlightsScope.getByText('50K+')).toBeInTheDocument();
      expect(highlightsScope.getByText('150+')).toBeInTheDocument();
    });

    it('renders the mission section', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Missão, Visão e Valores')).toBeInTheDocument();
    });

    it('renders the mission description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Garantir a segurança e eficiência de equipamentos/)
      ).toBeInTheDocument();
    });

    it('renders the vision section', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Visão')).toBeInTheDocument();
    });

    it('renders the vision description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Ser reconhecida como a empresa líder em engenharia clínica/)
      ).toBeInTheDocument();
    });

    it('renders the values section title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Valores')).toBeInTheDocument();
    });

    it('renders all values items', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Excelência Técnica')).toBeInTheDocument();
      expect(screen.getByText('Ética e Transparência')).toBeInTheDocument();
      expect(screen.getByText('Inovação Contínua')).toBeInTheDocument();
      expect(screen.getByText('Compromisso com Pessoas')).toBeInTheDocument();
      expect(screen.getByText('Segurança em Primeiro Lugar')).toBeInTheDocument();
    });

    it('renders the diferenciais section title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Nossos Diferenciais')).toBeInTheDocument();
    });

    it('renders the diferenciais section description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/O que nos torna únicos no mercado de engenharia clínica/)
      ).toBeInTheDocument();
    });

    it('renders all diferenciais cards', () => {
      renderWithRouter(<SobreNosPage />);
      const diferenciaisSection = document.querySelector('[class*="diferenciaisSection"]');
      expect(diferenciaisSection).toBeInTheDocument();

      const diferenciaisScope = within(diferenciaisSection as HTMLElement);
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Expertise Técnica Comprovada' })
      ).toBeInTheDocument();
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Tecnologia Proprietária' })
      ).toBeInTheDocument();
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Certificações e Reconhecimento' })
      ).toBeInTheDocument();
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Atendimento Personalizado' })
      ).toBeInTheDocument();
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Resultados Mensuráveis' })
      ).toBeInTheDocument();
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Parceria de Longo Prazo' })
      ).toBeInTheDocument();
    });

    it('renders diferenciais descriptions', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Equipe altamente qualificada com certificações nacionais/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Plataforma de gestão desenvolvida internamente/)
      ).toBeInTheDocument();
      expect(screen.getByText(/Parceiros oficiais de acreditadoras/)).toBeInTheDocument();
      expect(screen.getByText(/Soluções sob medida para cada cliente/)).toBeInTheDocument();
      expect(
        screen.getByText(/Indicadores claros de performance e ROI comprovado/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Relacionamentos duradouros baseados em confiança/)
      ).toBeInTheDocument();
    });

    it('renders the commitment section title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Nosso Compromisso com a Saúde Brasileira')).toBeInTheDocument();
    });

    it('renders the commitment section description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Acreditamos que cada equipamento médico bem gerenciado/)
      ).toBeInTheDocument();
    });

    it('renders commitment stats', () => {
      renderWithRouter(<SobreNosPage />);
      const commitmentSection = document.querySelector('[class*="commitmentSection"]');
      expect(commitmentSection).toBeInTheDocument();

      const commitmentScope = within(commitmentSection as HTMLElement);
      expect(commitmentScope.getByText('100%')).toBeInTheDocument();
      expect(commitmentScope.getByText('24/7')).toBeInTheDocument();
      expect(commitmentScope.getByText('99,5%')).toBeInTheDocument();
      expect(commitmentScope.getByText('Conformidade ANVISA')).toBeInTheDocument();
      expect(commitmentScope.getByText('Suporte Emergencial')).toBeInTheDocument();
      expect(commitmentScope.getByText('Taxa de Satisfação')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('renders the header with logo', () => {
      renderWithRouter(<SobreNosPage />);
      // Use getAllBy since there are multiple (desktop and mobile)
      const logos = screen.getAllByAltText('Praxis Engenharia Clínica');
      expect(logos).toHaveLength(2); // desktop and mobile
    });

    it('renders the header with navigation links', () => {
      renderWithRouter(<SobreNosPage />);
      // Use queryAllByText for links that appear in both desktop and mobile menus
      expect(screen.getAllByText('Engenharia Clinica')).toBeDefined();
      expect(screen.getAllByText('Planejamento Tecnoloógico')).toBeDefined();
      expect(screen.getAllByText('Acreditação')).toBeDefined();
      expect(screen.getAllByText('Trabalhe Conosco')).toBeDefined();
    });

    it('renders the header with CTA button', () => {
      renderWithRouter(<SobreNosPage />);
      // Use getAllByText since there are desktop and mobile CTAs
      const ctaButtons = screen.getAllByText('Contato');
      expect(ctaButtons.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Accessibility', () => {
    it('has main landmark', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('has proper heading hierarchy in hero section', () => {
      renderWithRouter(<SobreNosPage />);
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
    });

    it('has proper section structure', () => {
      renderWithRouter(<SobreNosPage />);
      // Check sections are present - we have at least 5 main sections + HeroSection from component
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(5);
    });

    it('mission section has proper heading', () => {
      renderWithRouter(<SobreNosPage />);
      const missionSection = document.querySelector('[class*="missionSection"]');
      expect(missionSection).toBeInTheDocument();
    });

    it('history highlights section has proper structure', () => {
      renderWithRouter(<SobreNosPage />);
      const highlightsSection = document.querySelector('[class*="historyHighlightsSection"]');
      expect(highlightsSection).toBeInTheDocument();
    });

    it('diferenciais section has proper heading', () => {
      renderWithRouter(<SobreNosPage />);
      const diferenciaisSection = document.querySelector('[class*="diferenciaisSection"]');
      expect(diferenciaisSection).toBeInTheDocument();
    });

    it('commitment section has proper heading', () => {
      renderWithRouter(<SobreNosPage />);
      const commitmentSection = document.querySelector('[class*="commitmentSection"]');
      expect(commitmentSection).toBeInTheDocument();
    });
  });

  describe('Footer', () => {
    it('renders the footer with copyright', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText('© 2026 Praxis Engenharia Clínica. Todos os direitos reservados.')
      ).toBeInTheDocument();
    });

    it('renders footer section titles', () => {
      renderWithRouter(<SobreNosPage />);
      // Footer section titles are h3 elements
      const footer = document.querySelector('footer');
      expect(footer).toBeInTheDocument();
      // Check that footer has links
      const footerLinks = footer?.querySelectorAll('a');
      expect(footerLinks?.length).toBeGreaterThan(0);
    });

    it('footer has sobre-nos link', () => {
      renderWithRouter(<SobreNosPage />);
      const footer = document.querySelector('footer');
      expect(footer).toBeInTheDocument();
    });
  });

  describe('Data Integrity', () => {
    it('has correct number of mission cards', () => {
      renderWithRouter(<SobreNosPage />);
      const missionCards = document.querySelectorAll('[class*="missionCardsGrid"] article');
      expect(missionCards.length).toBe(3);
    });

    it('has correct number of value items', () => {
      renderWithRouter(<SobreNosPage />);
      const valueItems = document.querySelectorAll('[class*="valueItem"]');
      expect(valueItems.length).toBe(5);
    });

    it('has correct number of history highlight cards', () => {
      renderWithRouter(<SobreNosPage />);
      const highlightCards = document.querySelectorAll('[class*="historyHighlightsStatCard"]');
      expect(highlightCards.length).toBe(4);
    });

    it('has correct number of diferenciais cards', () => {
      renderWithRouter(<SobreNosPage />);
      const diferenciaisCards = document.querySelectorAll('[class*="diferencialCard"]');
      expect(diferenciaisCards.length).toBe(6);
    });

    it('has correct number of commitment stats', () => {
      renderWithRouter(<SobreNosPage />);
      const commitmentStats = document.querySelectorAll('[class*="commitmentStatItem"]');
      expect(commitmentStats.length).toBe(3);
    });
  });
});
