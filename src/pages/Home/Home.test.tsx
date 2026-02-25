import { render, screen, fireEvent } from '@testing-library/react';
import { Home } from './Home';

describe('Home', () => {
  it('should render the page title', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to Praxis Engenharia')).toBeInTheDocument();
  });

  it('should render the subtitle', () => {
    render(<Home />);
    expect(
      screen.getByText('Building the future with innovative engineering solutions')
    ).toBeInTheDocument();
  });

  it('should render Get Started button', () => {
    render(<Home />);
    expect(screen.getByText('Get Started')).toBeInTheDocument();
  });

  it('should render Learn More button', () => {
    render(<Home />);
    expect(screen.getByText('Learn More')).toBeInTheDocument();
  });

  it('should render services section', () => {
    render(<Home />);
    expect(screen.getByText('Our Services')).toBeInTheDocument();
  });

  it('should render all service cards', () => {
    render(<Home />);
    expect(screen.getByText('Structural Engineering')).toBeInTheDocument();
    expect(screen.getByText('Project Management')).toBeInTheDocument();
    expect(screen.getByText('Consulting')).toBeInTheDocument();
  });

  it('should handle Get Started button click', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<Home />);
    fireEvent.click(screen.getByText('Get Started'));

    expect(consoleWarnSpy).toHaveBeenCalledWith('Get started clicked');
    consoleWarnSpy.mockRestore();
  });

  it('should handle Learn More button click', () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    render(<Home />);
    fireEvent.click(screen.getByText('Learn More'));

    expect(consoleWarnSpy).toHaveBeenCalledWith('Learn more clicked');
    consoleWarnSpy.mockRestore();
  });
});
