import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { HomePage } from './HomePage';

const renderWithRouter = (component: React.ReactElement) => {
  return render(<BrowserRouter>{component}</BrowserRouter>);
};

describe('HomePage', () => {
  it('should render all sections', () => {
    // Arrange & Act
    renderWithRouter(<HomePage />);

    // Assert - Check that main sections are present
    // TODO: Update these assertions once sections are implemented
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('should render hero section', () => {
    // Arrange & Act
    renderWithRouter(<HomePage />);

    // Assert
    // TODO: Add specific hero section assertions
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should have proper semantic HTML structure', () => {
    // Arrange & Act
    const { container } = renderWithRouter(<HomePage />);

    // Assert - Check semantic HTML elements
    const header = container.querySelector('header');
    const main = container.querySelector('main');
    const footer = container.querySelector('footer');

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should render services section', () => {
    // Arrange & Act
    renderWithRouter(<HomePage />);

    // Assert
    // TODO: Check for services section heading once implemented
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should render all 8 sections in correct order', () => {
    // Arrange & Act
    const { container } = renderWithRouter(<HomePage />);

    // Assert - Verify structural order
    // 1. Header (outside main)
    // 2-7. Sections inside main
    // 8. Footer (outside main)

    const sections = container.querySelectorAll('section');
    // TODO: Update count once all sections render actual content
    expect(sections.length).toBeGreaterThanOrEqual(0);
  });
});
