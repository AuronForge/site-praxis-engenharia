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
      expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    });

    it('renders the hero section with badge', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Fale Conosco')).toBeInTheDocument();
    });

    it('renders the hero section with description', () => {
      renderWithRouter(<ContatoPage />);
      expect(
        screen.getByText(/Entre em contato conosco para saber como podemos ajudar/)
      ).toBeInTheDocument();
    });
  });

  describe('Contact Info Section', () => {
    it('renders contact info section title', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Informações de Contato')).toBeInTheDocument();
    });

    it('renders contact info section description', () => {
      renderWithRouter(<ContatoPage />);
      expect(
        screen.getByText(/Escolha o canal de comunicação mais conveniente para você/)
      ).toBeInTheDocument();
    });

    it('renders phone contact card', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getAllByText('+55 11 3000-0000').length).toBeGreaterThan(0);
    });

    it('renders email contact card', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getAllByText('contato@praxis.com.br').length).toBeGreaterThan(0);
    });

    it('renders address contact card', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Av. Paulista, 1000 - São Paulo, SP')).toBeInTheDocument();
    });

    it('renders hours contact card', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Segunda a Sexta: 08h às 18h')).toBeInTheDocument();
    });

    it('renders phone link with correct href', () => {
      renderWithRouter(<ContatoPage />);
      const links = screen.getAllByRole('link');
      const phoneLink = links.find((link) => link.textContent?.includes('3000-0000'));
      expect(phoneLink).toHaveAttribute('href', 'tel:+551130000000');
    });

    it('renders email link with correct href', () => {
      renderWithRouter(<ContatoPage />);
      const links = screen.getAllByRole('link');
      const emailLink = links.find((link) => link.textContent?.includes('contato@praxis.com.br'));
      expect(emailLink).toHaveAttribute('href', 'mailto:contato@praxis.com.br');
    });
  });

  describe('Form Section', () => {
    it('renders form section title', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Envie uma Mensagem')).toBeInTheDocument();
    });

    it('renders form section description', () => {
      renderWithRouter(<ContatoPage />);
      expect(
        screen.getByText(/Preencha o formulário abaixo e retornaremos o mais breve possível/)
      ).toBeInTheDocument();
    });

    it('renders all form fields', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByLabelText(/Nome Completo/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Email/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Telefone/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Empresa\/Instituição/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Área de Interesse/)).toBeInTheDocument();
      expect(screen.getByLabelText(/Mensagem/)).toBeInTheDocument();
    });

    it('renders submit button', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByRole('button', { name: /Enviar Mensagem/ })).toBeInTheDocument();
    });

    it('renders interest options in select', () => {
      renderWithRouter(<ContatoPage />);
      const select = screen.getByLabelText(/Área de Interesse/);
      expect(select).toBeInTheDocument();
    });

    it('renders input placeholders', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByPlaceholderText('Seu nome completo')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('seu@email.com')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('(11) 99999-9999')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Nome da empresa ou hospital')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Descreva como podemos ajudar...')).toBeInTheDocument();
    });
  });

  describe('Map Section', () => {
    it('renders map section with placeholder', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Mapa da Localização')).toBeInTheDocument();
    });
  });

  describe('CTA Section', () => {
    it('renders CTA section title', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByText('Precisa de uma solução personalizada?')).toBeInTheDocument();
    });

    it('renders CTA section description', () => {
      renderWithRouter(<ContatoPage />);
      expect(
        screen.getByText(/Nossa equipe está pronta para desenvolver um projeto sob medida/)
      ).toBeInTheDocument();
    });

    it('renders CTA button', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByRole('link', { name: /Ligar Agora/ })).toBeInTheDocument();
    });

    it('renders CTA button with correct href', () => {
      renderWithRouter(<ContatoPage />);
      const ctaLink = screen.getByRole('link', { name: /Ligar Agora/ });
      expect(ctaLink).toHaveAttribute('href', 'tel:+551130000000');
    });
  });

  describe('Accessibility', () => {
    it('renders main element with role="main"', () => {
      renderWithRouter(<ContatoPage />);
      expect(screen.getByRole('main')).toBeInTheDocument();
    });
  });
});