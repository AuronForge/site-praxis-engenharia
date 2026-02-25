import { render, screen } from '@testing-library/react';
import { App } from './App';

describe('App', () => {
  it('should render the app title', () => {
    render(<App />);
    expect(screen.getByText('Praxis Engenharia')).toBeInTheDocument();
  });

  it('should render the app description', () => {
    render(<App />);
    expect(screen.getByText('React + TypeScript with Quality Gates')).toBeInTheDocument();
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
});
