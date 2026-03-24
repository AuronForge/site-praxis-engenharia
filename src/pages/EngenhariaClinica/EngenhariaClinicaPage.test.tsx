import { render, screen } from '@testing-library/react';

import { EngenhariaClinicaPage } from './EngenhariaClinicaPage';

describe('EngenhariaClinicaPage', () => {
  describe('Hero Section', () => {
    beforeEach(() => {
      render(<EngenhariaClinicaPage />);
    });

    it('renders hero badge', () => {
      expect(screen.getAllByText('Engenharia Clínica').length).toBeGreaterThan(0);
    });

    it('renders hero title', () => {
      expect(screen.getByRole('heading', { level: 1 }));
    });

    it('renders hero description', () => {
      expect(
        screen.getByText(
          /Gestão completa e especializada do parque tecnológico hospitalar, garantindo segurança/i
        )
      );
    });
  });

  describe('Services Section', () => {
    beforeEach(() => {
      render(<EngenhariaClinicaPage />);
    });

    it('renders services section title', () => {
      expect(screen.getByText('Nossos Serviços de Engenharia Clínica'));
    });

    it('renders all service cards', () => {
      expect(screen.getByText('Manutenção Preventiva'));
      expect(screen.getByText('Manutenção Corretiva'));
      expect(screen.getByText('Calibração e Metrologia'));
      expect(screen.getByText('Inventário Técnico'));
      expect(screen.getByText('Gestão de Riscos'));
      expect(screen.getByText('Treinamento de Equipes'));
    });

    it('renders service features', () => {
      expect(screen.getByText('Cronograma customizado por equipamento'));
      expect(screen.getByText('Central de atendimento dedicada'));
      expect(screen.getByText('Laboratório próprio credenciado'));
      expect(screen.getByText('Cadastro completo de equipamentos'));
    });
  });

  describe('Process Section', () => {
    beforeEach(() => {
      render(<EngenhariaClinicaPage />);
    });

    it('renders process section title', () => {
      expect(screen.getByText('Nossa Metodologia de Trabalho'));
    });

    it('renders all process steps', () => {
      expect(screen.getByText('1'));
      expect(screen.getByText('2'));
      expect(screen.getByText('3'));
      expect(screen.getByText('4'));
      expect(screen.getAllByText('Diagnóstico').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Planejamento').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Execução').length).toBeGreaterThan(0);
      expect(screen.getAllByText('Monitoramento').length).toBeGreaterThan(0);
    });
  });

  describe('CTA Section', () => {
    beforeEach(() => {
      render(<EngenhariaClinicaPage />);
    });

    it('renders CTA title', () => {
      expect(screen.getByText('Pronto para Otimizar Sua Engenharia Clínica?'));
    });

    it('renders CTA buttons', () => {
      const primaryButton = screen.getByRole('link', { name: /Solicitar Proposta/i });
      const secondaryButton = screen.getByRole('link', { name: 'Voltar ao Início' });

      expect(primaryButton);
      expect(primaryButton).toHaveAttribute('href', '#contato');
      expect(secondaryButton);
      expect(secondaryButton).toHaveAttribute('href', '/');
    });
  });

  describe('Navigation', () => {
    it('renders header with navigation links', () => {
      render(<EngenhariaClinicaPage />);

      expect(screen.getByRole('link', { name: 'Serviços' }));
      expect(screen.getByRole('link', { name: 'Experiência' }));
      expect(screen.getByRole('link', { name: 'Gestão' }));
      expect(screen.getByRole('link', { name: 'Clientes' }));
      expect(screen.getByRole('link', { name: 'Contato' }));
    });

    it('renders footer with contact information', () => {
      render(<EngenhariaClinicaPage />);

      expect(screen.getByText('+55 11 3000-0000'));
      expect(screen.getByText('contato@praxis.com.br'));
    });
  });

  describe('Accessibility', () => {
    it('has proper main landmark', () => {
      render(<EngenhariaClinicaPage />);

      const main = document.querySelector('main[role="main"]');
      expect(main);
    });

    it('has proper heading hierarchy', () => {
      render(<EngenhariaClinicaPage />);

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('Engenharia Clínica');
    });
  });
});
