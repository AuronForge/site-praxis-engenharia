import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { EngenhariaClinicaPage } from './EngenhariaClinicaPage';

// Wrap component with Router for testing
const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('EngenhariaClinicaPage', () => {
  describe('Hero Section', () => {
    beforeEach(() => {
      renderWithRouter(<EngenhariaClinicaPage />);
    });

    it('renders hero badge', () => {
      expect(screen.getAllByText('Engenharia Clínica').length).toBeGreaterThan(0)
    });

    it('renders hero title', () => {
      expect(
        screen.getByText('Gestão Completa de Tecnologia Hospitalar')
      )
    });

    it('renders hero description', () => {
      expect(
        screen.getByText(
          /Oferecemos soluções integradas para gestão do parque tecnológico/i
        )
      )
    });

    it('renders hero stats', () => {
      expect(screen.getByText('15.000+'))
      expect(screen.getByText('Equipamentos Mantidos'))
      expect(screen.getByText('98%'))
      expect(screen.getByText('Disponibilidade Média'))
      expect(screen.getByText('25+'))
      expect(screen.getByText('Anos de Experiência'))
    });
  });

  describe('Services Section', () => {
    beforeEach(() => {
      renderWithRouter(<EngenhariaClinicaPage />);
    });

    it('renders services section title', () => {
      expect(screen.getByText('Nossos Serviços'))
    });

    it('renders all service cards', () => {
      expect(screen.getByText('Manutenção Preventiva'))
      expect(screen.getByText('Manutenção Corretiva'))
      expect(screen.getByText('Calibração'))
      expect(screen.getByText('Auditoria Técnica'))
    });

    it('renders service features', () => {
      expect(screen.getByText('Cronogramas personalizados por equipamento'))
      expect(screen.getByText('Suporte técnico 24/7'))
      expect(screen.getByText('Calibração acreditada RBC'))
      expect(screen.getByText('Laudos técnicos detalhados'))
    });
  });

  describe('Process Section', () => {
    beforeEach(() => {
      renderWithRouter(<EngenhariaClinicaPage />);
    });

    it('renders process section title', () => {
      expect(screen.getByText('Nossa Metodologia'))
    });

    it('renders all process steps', () => {
      expect(screen.getByText('01'))
      expect(screen.getByText('02'))
      expect(screen.getByText('03'))
      expect(screen.getByText('04'))
      expect(screen.getAllByText('Diagnóstico').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Planejamento').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Execução').length).toBeGreaterThan(0)
      expect(screen.getAllByText('Monitoramento').length).toBeGreaterThan(0)
    });
  });

  describe('Benefits Section', () => {
    beforeEach(() => {
      renderWithRouter(<EngenhariaClinicaPage />);
    });

    it('renders benefits section title', () => {
      expect(screen.getByText('Benefícios da Gestão Profissional'))
    });

    it('renders all benefit cards', () => {
      expect(screen.getByText('Conformidade Regulatória'))
      expect(screen.getByText('Redução de Custos'))
      expect(screen.getByText('Maior Disponibilidade'))
      expect(screen.getByText('Decisões Baseadas em Dados'))
    });

    it('renders benefit descriptions', () => {
      expect(
        screen.getByText(/Garantia de atendimento às normas ANVISA/i)
      )
      expect(
        screen.getByText(/Otimização do ciclo de vida dos equipamentos/i)
      )
    });
  });

  describe('CTA Section', () => {
    beforeEach(() => {
      renderWithRouter(<EngenhariaClinicaPage />);
    });

    it('renders CTA title', () => {
      expect(
        screen.getByText('Pronto para transformar a gestão da sua tecnologia hospitalar?')
      )
    });

    it('renders CTA button', () => {
      const ctaButton = screen.getByRole('link', { name: 'Fale com um Especialista' });
      expect(ctaButton)
      expect(ctaButton).toHaveAttribute('href', '#contato');
    });
  });

  describe('Navigation', () => {
    it('renders header with navigation links', () => {
      renderWithRouter(<EngenhariaClinicaPage />);

      expect(screen.getByRole('link', { name: 'Serviços' }))
      expect(screen.getByRole('link', { name: 'Experiência' }))
      expect(screen.getByRole('link', { name: 'Gestão' }))
      expect(screen.getByRole('link', { name: 'Clientes' }))
      expect(screen.getByRole('link', { name: 'Contato' }))
    });

    it('renders footer with contact information', () => {
      renderWithRouter(<EngenhariaClinicaPage />);

      expect(screen.getByText('+55 11 3000-0000'))
      expect(screen.getByText('contato@praxis.com.br'))
    });
  });

  describe('Accessibility', () => {
    it('has proper main landmark', () => {
      renderWithRouter(<EngenhariaClinicaPage />);

      const main = document.querySelector('main[role="main"]');
      expect(main)
    });

    it('has proper heading hierarchy', () => {
      renderWithRouter(<EngenhariaClinicaPage />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('Gestão Completa de Tecnologia Hospitalar');
    });
  });
});
