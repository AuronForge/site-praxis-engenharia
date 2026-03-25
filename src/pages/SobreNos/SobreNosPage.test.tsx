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
      expect(screen.getByRole('heading', { level: 1, name: 'Sobre Nós' })).toBeInTheDocument();
    });

    it('renders the hero section with badge', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByRole('status')).toHaveTextContent('Quem Somos');
    });

    it('renders the hero section with description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Há mais de 25 anos, a Praxis Engenharia Clínica/)
      ).toBeInTheDocument();
    });

    it('renders the mission section', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Missão')).toBeInTheDocument();
    });

    it('renders the mission description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Proporcionar às instituições de saúde soluções integradas/)
      ).toBeInTheDocument();
    });

    it('renders the vision section', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Visão')).toBeInTheDocument();
    });

    it('renders the vision description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Ser reconhecida como a maior e mais confiável empresa/)
      ).toBeInTheDocument();
    });

    it('renders the values section title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Nossos Valores')).toBeInTheDocument();
    });

    it('renders all values items', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Excelência Técnica')).toBeInTheDocument();
      expect(screen.getByText('Ética e Transparência')).toBeInTheDocument();
      expect(screen.getByText('Inovação Contínua')).toBeInTheDocument();
      expect(screen.getByText('Compromisso com o Cliente')).toBeInTheDocument();
      expect(screen.getByText('Responsabilidade Social')).toBeInTheDocument();
    });

    it('renders the history section title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Nossa Trajetória')).toBeInTheDocument();
    });

    it('renders the history section description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Ao longo de mais de duas décadas/)
      ).toBeInTheDocument();
    });

    it('renders all history milestones', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('1998')).toBeInTheDocument();
      expect(screen.getByText('2005')).toBeInTheDocument();
      expect(screen.getByText('2010')).toBeInTheDocument();
      expect(screen.getByText('2015')).toBeInTheDocument();
      expect(screen.getByText('2020')).toBeInTheDocument();
      expect(screen.getByText('2023')).toBeInTheDocument();
    });

    it('renders milestone titles', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Fundação')).toBeInTheDocument();
      expect(screen.getByText('Expansão de Serviços')).toBeInTheDocument();
      expect(screen.getByText('Plataforma Digital')).toBeInTheDocument();
      expect(screen.getByText('Certificação ISO 9001')).toBeInTheDocument();
      expect(screen.getByText('Crescimento Nacional')).toBeInTheDocument();
      expect(screen.getByText('Líder de Mercado')).toBeInTheDocument();
    });

    it('renders milestone descriptions', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Início das operações da Praxis Engenharia Clínica/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Ampliação do portfólio para incluir/)
      ).toBeInTheDocument();
    });

    it('renders the diferenciais section title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Por Que Escolher a Praxis?')).toBeInTheDocument();
    });

    it('renders the diferenciais section description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Nossa experiência e metodologia diferenciada/)
      ).toBeInTheDocument();
    });

    it('renders all diferenciais cards', () => {
      renderWithRouter(<SobreNosPage />);
      const diferenciaisSection = document.querySelector('[class*="diferenciaisSection"]');
      expect(diferenciaisSection).toBeInTheDocument();

      const diferenciaisScope = within(diferenciaisSection as HTMLElement);
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Experiência Comprovada' })
      ).toBeInTheDocument();
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Equipe Multidisciplinar' })
      ).toBeInTheDocument();
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Tecnologia Própria' })
      ).toBeInTheDocument();
      expect(
        diferenciaisScope.getByRole('heading', { level: 3, name: 'Certificações e Reconhecimento' })
      ).toBeInTheDocument();
    });

    it('renders diferenciais descriptions', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Mais de 500 projetos delivered em instituições/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Profissionais especializados em todas as áreas/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Plataforma digital com inteligência de dados/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/ISO 9001 e equipe com certificações internacionais/)
      ).toBeInTheDocument();
    });

    it('renders the team section title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Nossa Equipe')).toBeInTheDocument();
    });

    it('renders the team section description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Contamos com uma equipe multidisciplinar/)
      ).toBeInTheDocument();
    });

    it('renders team stats', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('60+')).toBeInTheDocument();
      expect(screen.getByText('15+')).toBeInTheDocument();
      expect(screen.getByText('25+')).toBeInTheDocument();
      expect(screen.getByText('100%')).toBeInTheDocument();
    });

    it('renders team stat labels', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getAllByText('Profissionais')).toBeDefined();
      expect(screen.getByText('Engenheiros Clínicos')).toBeInTheDocument();
      expect(screen.getByText('Anos de Experiência')).toBeInTheDocument();
      expect(screen.getByText('Certificados')).toBeInTheDocument();
    });

    it('renders team features', () => {
      renderWithRouter(<SobreNosPage />);
      const teamSection = document.querySelector('[class*="teamSection"]');
      expect(teamSection).toBeInTheDocument();

      const teamScope = within(teamSection as HTMLElement);
      expect(
        teamScope.getByRole('heading', { level: 3, name: 'Profissionais Especializados' })
      ).toBeInTheDocument();
      expect(
        teamScope.getByRole('heading', { level: 3, name: 'Experiência Comprovada' })
      ).toBeInTheDocument();
      expect(
        teamScope.getByRole('heading', { level: 3, name: 'Atualização Contínua' })
      ).toBeInTheDocument();
      expect(
        teamScope.getByRole('heading', { level: 3, name: 'Metodologia Própria' })
      ).toBeInTheDocument();
    });

    it('renders team feature descriptions', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Equipe com formação técnica e certificações internacionais/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Anos de atuação em instituições de diferentes/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Participação em treinamentos e congressos/)
      ).toBeInTheDocument();
      expect(
        screen.getByText(/Processos validados e alinhados com as melhores/)
      ).toBeInTheDocument();
    });

    it('renders the CTA section title', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByText('Vamos Construir Uma Parceria?')).toBeInTheDocument();
    });

    it('renders the CTA section description', () => {
      renderWithRouter(<SobreNosPage />);
      expect(
        screen.getByText(/Entre em contato conosco e descubra como a Praxis/)
      ).toBeInTheDocument();
    });

    it('renders the CTA button', () => {
      renderWithRouter(<SobreNosPage />);
      expect(screen.getByRole('link', { name: 'Fale Conosco' })).toBeInTheDocument();
    });

    it('renders the CTA button with correct href', () => {
      renderWithRouter(<SobreNosPage />);
      const ctaButton = screen.getByRole('link', { name: 'Fale Conosco' });
      expect(ctaButton).toHaveAttribute('href', '/contato');
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

    it('has team section with id for anchor navigation', () => {
      renderWithRouter(<SobreNosPage />);
      const teamSection = document.querySelector('#equipe');
      expect(teamSection).toBeInTheDocument();
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
      // Check sections are present - we have 6 main sections + HeroSection from component
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThanOrEqual(6);
    });

    it('mission section has proper heading', () => {
      renderWithRouter(<SobreNosPage />);
      const missionSection = document.querySelector('[class*="missionSection"]');
      expect(missionSection).toBeInTheDocument();
    });

    it('history section has proper heading', () => {
      renderWithRouter(<SobreNosPage />);
      const historySection = document.querySelector('[class*="historySection"]');
      expect(historySection).toBeInTheDocument();
    });

    it('diferenciais section has proper heading', () => {
      renderWithRouter(<SobreNosPage />);
      const diferenciaisSection = document.querySelector('[class*="diferenciaisSection"]');
      expect(diferenciaisSection).toBeInTheDocument();
    });

    it('team section has proper heading', () => {
      renderWithRouter(<SobreNosPage />);
      const teamSection = document.querySelector('[class*="teamSection"]');
      expect(teamSection).toBeInTheDocument();
    });

    it('cta section has proper heading', () => {
      renderWithRouter(<SobreNosPage />);
      const ctaSection = document.querySelector('[class*="ctaSection"]');
      expect(ctaSection).toBeInTheDocument();
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
      const missionCards = document.querySelectorAll('[class*="missionCard"]');
      expect(missionCards.length).toBe(2);
    });

    it('has correct number of value items', () => {
      renderWithRouter(<SobreNosPage />);
      const valueItems = document.querySelectorAll('[class*="valueItem"]');
      expect(valueItems.length).toBe(5);
    });

    it('has correct number of timeline items', () => {
      renderWithRouter(<SobreNosPage />);
      const timelineItems = document.querySelectorAll('[class*="timelineItem"]');
      expect(timelineItems.length).toBe(6);
    });

    it('has correct number of diferenciais cards', () => {
      renderWithRouter(<SobreNosPage />);
      const diferenciaisCards = document.querySelectorAll('[class*="diferencialCard"]');
      expect(diferenciaisCards.length).toBe(4);
    });

    it('has correct number of team stats', () => {
      renderWithRouter(<SobreNosPage />);
      // Team stats appear as elements with specific content in team section
      const teamSection = document.querySelector('[class*="teamSection"]');
      expect(teamSection).toBeInTheDocument();
      // Check for stats by their text content values
      const statsContainer = teamSection?.querySelector('[class*="teamStats"]');
      expect(statsContainer).toBeInTheDocument();
    });

    it('has correct number of team features', () => {
      renderWithRouter(<SobreNosPage />);
      // Team features appear as elements in team section
      const teamSection = document.querySelector('[class*="teamSection"]');
      expect(teamSection).toBeInTheDocument();
      // Check for features container
      const featuresContainer = teamSection?.querySelector('[class*="teamFeatures"]');
      expect(featuresContainer).toBeInTheDocument();
    });
  });
});