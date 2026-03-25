import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { ContatoPage } from './ContatoPage';

const renderWithRouter = (component: Parameters<typeof render>[0]): ReturnType<typeof render> => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('ContatoPage', () => {
  describe('Rendering', () => {
    it('renders without crashing', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });

    it('renders the hero section with title', () => {
      renderWithRouter(<ContatoPage />);
      expect(
        screen.getByRole('heading', { level: 1, name: 'Entre em Contato' })
      ).toBeInTheDocument();
    });

    it('renders the hero section with description', () => {
      renderWithRouter(<ContatoPage />);
      expect(
        screen.getByText(/Nossa equipe comercial está pronta para atender suas necessidades/)
      ).toBeInTheDocument();
    });
  });

  describe('Contact Info Section', () => {
    it('renders contact badge and lead title', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Fale Conosco')).toBeInTheDocument();
      expect(screen.getByText('Vamos Conversar Sobre Seu Projeto')).toBeInTheDocument();
    });

    it('renders contact info section title', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Vamos Conversar Sobre Seu Projeto')).toBeInTheDocument();
    });

    it('renders contact info section description', () => {
      renderWithRouter(<ContatoPage />);
      expect(
        screen.getByText(/Estamos prontos para entender suas necessidades/)
      ).toBeInTheDocument();
    });

    it('renders phone contact card', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getAllByText('11-2609-7511').length).toBeGreaterThan(0);
    });

    it('renders email contact card', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getAllByText('contato@praxisengenharia.com.br').length).toBeGreaterThan(0);
    });

    it('renders address contact card', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Rua Roma, 620 - Lapa')).toBeInTheDocument();
      expect(screen.getByText('São Paulo - SP, 05050-090')).toBeInTheDocument();
    });

    it('renders hours contact card', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('24 horas, 7 dias por semana')).toBeInTheDocument();
    });

    it('renders phone link with correct href', () => {
      renderWithRouter(<ContatoPage />);
      const links = screen.getAllByRole('link');
      const phoneLink = links.find((link) => link.textContent?.includes('2609-7511'));
      expect(phoneLink).toHaveAttribute('href', 'tel:+551126097511');
    });

    it('renders email link with correct href', () => {
      renderWithRouter(<ContatoPage />);
      const links = screen.getAllByRole('link');
      const emailLink = links.find((link) =>
        link.textContent?.includes('contato@praxisengenharia.com.br')
      );
      expect(emailLink).toHaveAttribute('href', 'mailto:contato@praxisengenharia.com.br');
    });
  });

  describe('Form Section', () => {
    it('renders form section title', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Solicite uma Proposta')).toBeInTheDocument();
    });

    it('renders form section description', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Preencha o formulário abaixo')).toBeInTheDocument();
    });

    it('renders all form fields', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByLabelText(/Nome Completo/)).toBeInTheDocument();
      expect(screen.getByLabelText(/^Cargo$/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Instituição/)).toBeInTheDocument();
      expect(screen.getByLabelText(/E-mail/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Telefone/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Serviço de Interesse/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Mensagem/)).toBeInTheDocument();
    });

    it('renders submit button', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByRole('button', { name: /Enviar Mensagem/ })).toBeInTheDocument();
    });

    it('renders interest options in select', () => {
      renderWithRouter(<ContatoPage />);
      const select = screen.getByLabelText(/Serviço de Interesse/);
      expect(select).toBeInTheDocument();
    });

    it('renders input placeholders', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByPlaceholderText('João Silva')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Diretor Técnico')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Hospital Regional')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('email@hospital.com.br')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('(11) 98765-4321')).toBeInTheDocument();
      expect(
        screen.getByPlaceholderText('Conte-nos sobre suas necessidades e desafios...')
      ).toBeInTheDocument();
    });

    it('renders the form disclaimer', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText(/Ao enviar este formulário, você concorda/)).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('renders main element with role="main"', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });
});
