import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should render the Header component with brand name', () => {
    render(<App />);
    expect(screen.getAllByText('Praxis Engenharia Clínica').length).toBeGreaterThan(0);
  });

  it('should render navigation links', () => {
    render(<App />);
    expect(screen.getAllByText('Serviços').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Experiência').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Gestão').length).toBeGreaterThan(0);
  });

  it('should render hero section with title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render services section', () => {
    render(<App />);
    expect(screen.getByText('Soluções Completas em Engenharia Clínica')).toBeInTheDocument();
  });

  it('should render experience section', () => {
    render(<App />);
    expect(screen.getByText('Mais de 25 Anos Servindo a Saúde Brasileira')).toBeInTheDocument();
  });

  it('should render platform section', () => {
    render(<App />);
    expect(screen.getByText('Sistema de Gestão Avançado')).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);
    expect(screen.getByText(/© 2026 Praxis Engenharia/)).toBeInTheDocument();
  });

  it('should render hero CTA buttons', () => {
    render(<App />);
    expect(screen.getByText('Fale com Especialistas')).toBeInTheDocument();
    expect(screen.getByText('Conheça os Serviços')).toBeInTheDocument();
  });

  it('should render segments section', () => {
    render(<App />);
    expect(screen.getByText('Confiança de Instituições Líderes')).toBeInTheDocument();
  });

  it('should render testimonials section', () => {
    render(<App />);
    expect(screen.getByText('O que nossos clientes dizem')).toBeInTheDocument();
  });
});
