import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should render the Header component with brand name', () => {
    render(<App />);
    expect(screen.getAllByAltText('Praxis Engenharia Clínica').length).toBeGreaterThan(0);
  });

  it('should render navigation links', () => {
    render(<App />);
    expect(screen.getAllByText('Engenharia Clinica').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Planejamento Tecnoloógico').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Acreditação').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Trabalhe Conosco').length).toBeGreaterThan(0);
  });

  it('should render hero section with title', () => {
    render(<App />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('should render services section', () => {
    render(<App />);
    // Services section should be present on home page
    const servicesHeadings = screen.getAllByRole('heading', { name: /serviços/i });
    expect(servicesHeadings.length).toBeGreaterThan(0);
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
