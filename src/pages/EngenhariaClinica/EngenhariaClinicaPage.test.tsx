import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import { EngenhariaClinicaPage } from './EngenhariaClinicaPage';

const renderWithRouter = (): ReturnType<typeof render> => {
  return render(
    <MemoryRouter>
      <EngenhariaClinicaPage />
    </MemoryRouter>
  );
};

describe('EngenhariaClinicaPage', () => {
  describe('Hero Section', () => {
    beforeEach(() => {
      renderWithRouter();
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
      renderWithRouter();
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
      renderWithRouter();
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
      renderWithRouter();
    });

    it('renders CTA title', () => {
      expect(screen.getByText('Pronto para Otimizar Sua Engenharia Clínica?'));
    });

    it('renders CTA buttons', () => {
      const primaryButton = screen.getByRole('link', { name: /Solicitar Proposta/i });
      const secondaryButton = screen.getByRole('link', { name: 'Voltar ao Início' });

      expect(primaryButton);
      expect(primaryButton).toHaveAttribute('href', '/contato');
      expect(secondaryButton);
      expect(secondaryButton).toHaveAttribute('href', '/');
    });
  });

  describe('Navigation', () => {
    it('renders header with navigation links', () => {
      renderWithRouter();

      expect(screen.getByRole('link', { name: 'Engenharia Clinica' }));
      expect(screen.getByRole('link', { name: 'Planejamento Tecnoloógico' }));
      expect(screen.getAllByRole('link', { name: 'Acreditação' }).length).toBeGreaterThan(0);
      expect(screen.getAllByRole('link', { name: 'Contato' }).length).toBeGreaterThan(0);
    });

    it('renders footer with contact information', () => {
      renderWithRouter();

      expect(screen.getByText('11-2609-7511'));
      expect(screen.getByText('contato@praxisengenharia.com.br'));
    });
  });

  describe('Accessibility', () => {
    it('has proper main landmark', () => {
      renderWithRouter();

      const main = document.querySelector('main[role="main"]');
      expect(main);
    });

    it('has proper heading hierarchy', () => {
      renderWithRouter();

      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toHaveTextContent('Engenharia Clínica');
    });
  });
});
