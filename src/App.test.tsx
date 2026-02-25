import { render, screen } from '@testing-library/react';

import { App } from './App';

describe('App', () => {
  it('should render the Header component', () => {
    render(<App />);
    expect(screen.getByText('Praxis Engenharia Clínica')).toBeInTheDocument();
  });

  it('should render navigation links', () => {
    render(<App />);
    expect(screen.getAllByText('Serviços').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Experiência').length).toBeGreaterThan(0);
    expect(screen.getAllByText('Gestão').length).toBeGreaterThan(0);
  });

  it('should render button showcase section', () => {
    render(<App />);
    expect(screen.getByText('Button Component Examples')).toBeInTheDocument();
  });

  it('should render primary button', () => {
    render(<App />);
    expect(screen.getByText('Primary Button')).toBeInTheDocument();
  });

  it('should render secondary button', () => {
    render(<App />);
    expect(screen.getByText('Secondary Button')).toBeInTheDocument();
  });

  it('should render outline button', () => {
    render(<App />);
    expect(screen.getByText('Outline Button')).toBeInTheDocument();
  });

  it('should render footer', () => {
    render(<App />);
    expect(screen.getByText(/© 2026 Praxis Engenharia/)).toBeInTheDocument();
  });

  it('should call handleClick when button is clicked', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<App />);
    const primaryButton = screen.getByText('Primary Button');

    primaryButton.click();

    expect(consoleWarnSpy).toHaveBeenCalledWith('Button clicked!');
    consoleWarnSpy.mockRestore();
  });

  it('should render StatsRow component', () => {
    render(<App />);
    expect(screen.getByText('StatsRow Component Examples')).toBeInTheDocument();
  });

  it('should render stats with correct values', () => {
    render(<App />);
    expect(screen.getAllByText('25+').length).toBeGreaterThan(0);
    expect(screen.getAllByText('500+').length).toBeGreaterThan(0);
    expect(screen.getAllByText('100%').length).toBeGreaterThan(0);
  });
});
