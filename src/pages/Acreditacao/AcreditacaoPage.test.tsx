import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { AcreditacaoPage } from './AcreditacaoPage';

const renderWithRouter = (component: Parameters<typeof render>[0]): ReturnType<typeof render> => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('AcreditacaoPage', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders the hero section with title', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('renders the hero section with badge', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByText('Serviço Especializado')).toBeInTheDocument();
    });

    it('renders the hero section with description', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(
        screen.getByText(/Suporte completo para processos de certificação e acreditação hospitalar/)
      ).toBeInTheDocument();
    });

    it('does not render hero CTAs in compact variant', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.queryByText('Fale com Especialistas')).not.toBeInTheDocument();
      expect(screen.queryByText('Nossos Serviços')).not.toBeInTheDocument();
    });

    it('renders the services section title', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByText('Nossos Serviços de Acreditação')).toBeInTheDocument();
    });

    it('renders all service cards', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getAllByText('Preparação ONA').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Adequação JCI').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Documentação Técnica').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Auditorias Internas').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Treinamento de Equipes').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Manutenção de Certificação').length).toBeGreaterThan(0);
    });

    it('does not render service card links in planning variant', () => {
      renderWithRouter(<AcreditacaoPage />);
      const links = screen.queryAllByRole('link', { name: 'Saiba mais' });
      expect(links.length).toBe(0);
    });

    it('renders the management section title', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByText('Excelência em Gestão de Qualidade')).toBeInTheDocument();
    });

    it('renders the management section content', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(
        screen.getByText(/Acreditação é um processo de avaliação sistemática que verifica/)
      ).toBeInTheDocument();
    });

    it('renders the methodology text', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(
        screen.getByText(/Nossa metodologia combina expertise técnica em engenharia clínica/)
      ).toBeInTheDocument();
    });

    it('renders why choose section title', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByText('Por que contar com a Praxis?')).toBeInTheDocument();
    });

    it('renders why choose items', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(
        screen.getByText('Experiência em múltiplos modelos de acreditação')
      ).toBeInTheDocument();
      expect(screen.getByText('Metodologia focada em resultados sustentáveis')).toBeInTheDocument();
      expect(
        screen.getByText('Equipemultidisciplinar com certificação internacional')
      ).toBeInTheDocument();
      expect(screen.getByText('Acompanhamento integral do processo')).toBeInTheDocument();
    });

    it('renders management metrics', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getAllByText('50+').length).toBeGreaterThan(0);
      expect(screen.getAllByText('98%').length).toBeGreaterThan(0);
      expect(screen.getAllByText('100%').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Instituições Acreditadas').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Taxa de Sucesso').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Conformidade').length).toBeGreaterThan(0);
    });

    it('renders the certifications section content', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByText('Certificações que Atendemos')).toBeInTheDocument();
      expect(screen.getByText('ONA')).toBeInTheDocument();
      expect(screen.getByText('Organização Nacional de Acreditação')).toBeInTheDocument();
      expect(screen.getByText('JCI')).toBeInTheDocument();
      expect(screen.getByText('Joint Commission International')).toBeInTheDocument();
      expect(screen.getByText('Acreditado com Excelência')).toBeInTheDocument();
      expect(screen.getByText('Padrões Internacionais')).toBeInTheDocument();
      expect(screen.getByText('Certificação Triênio')).toBeInTheDocument();
    });

    it('renders the process section title', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByText('Nosso Processo de Acreditação')).toBeInTheDocument();
      expect(
        screen.getByText('Metodologia comprovada para garantir certificação')
      ).toBeInTheDocument();
    });

    it('renders all process steps', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getAllByText('Diagnóstico Inicial').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Plano de Ação').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Implementação').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Certificação').length).toBeGreaterThan(0);
      const processSection = document.querySelector('[class*="processSection"]');
      expect(processSection).toBeInTheDocument();
    });

    it('renders the benefits section content', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByText('Benefícios da Acreditação Hospitalar')).toBeInTheDocument();
      expect(screen.getByText('Reconhecimento de Qualidade')).toBeInTheDocument();
      expect(screen.getByText('Segurança do Paciente')).toBeInTheDocument();
      expect(screen.getByText('Vantagem Competitiva')).toBeInTheDocument();
      expect(screen.getByText('Melhoria Contínua')).toBeInTheDocument();
    });

    it('renders the CTA section', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByText('Pronto para Conquistar a Acreditação?')).toBeInTheDocument();
      expect(
        screen.getByText(
          'Nossa equipe especializada está pronta para guiar sua instituição rumo à certificação de excelência'
        )
      ).toBeInTheDocument();
    });

    it('renders the CTA buttons', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByText('Solicitar Diagnóstico')).toBeInTheDocument();
      expect(screen.getByText('Voltar ao Início')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('renders the header with logo', () => {
      renderWithRouter(<AcreditacaoPage />);
      // Use getAllBy since there are multiple (desktop and mobile)
      const logos = screen.getAllByAltText('Praxis Engenharia Clínica');
      expect(logos).toHaveLength(2); // desktop and mobile
    });

    it('renders the header with navigation links', () => {
      renderWithRouter(<AcreditacaoPage />);
      // Use queryAllByText for links that appear in both desktop and mobile menus
      expect(screen.getAllByText('Serviços')).toBeDefined();
      expect(screen.getAllByText('Experiência')).toBeDefined();
      expect(screen.getAllByText('Gestão')).toBeDefined();
      expect(screen.getAllByText('Clientes')).toBeDefined();
    });

    it('renders the header with CTA button', () => {
      renderWithRouter(<AcreditacaoPage />);
      // Use getAllByText since there are desktop and mobile CTAs
      const ctaButtons = screen.getAllByText('Contato');
      expect(ctaButtons.length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Accessibility', () => {
    it('has main landmark', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('has proper heading hierarchy in hero section', () => {
      renderWithRouter(<AcreditacaoPage />);
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
    });
  });

  describe('Footer', () => {
    it('renders the footer with copyright', () => {
      renderWithRouter(<AcreditacaoPage />);
      expect(
        screen.getByText('© 2026 Praxis Engenharia Clínica. Todos os direitos reservados.')
      ).toBeInTheDocument();
    });

    it('renders footer section titles', () => {
      renderWithRouter(<AcreditacaoPage />);
      // Footer section titles are h3 elements
      const footer = document.querySelector('footer');
      expect(footer).toBeInTheDocument();
      // Check that footer has links
      const footerLinks = footer?.querySelectorAll('a');
      expect(footerLinks?.length).toBeGreaterThan(0);
    });
  });
});
