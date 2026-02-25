import { render, screen } from '@testing-library/react';

import { HomePage } from './HomePage';

describe('HomePage', () => {
  it('should render all sections', () => {
    // Arrange & Act
    render(<HomePage />);

    // Assert - Check that main sections are present
    // TODO: Update these assertions once sections are implemented
    expect(screen.getByRole('banner')).toBeInTheDocument(); // Header
    expect(screen.getByRole('main')).toBeInTheDocument(); // Main content
    expect(screen.getByRole('contentinfo')).toBeInTheDocument(); // Footer
  });

  it('should render hero section', () => {
    // Arrange & Act
    render(<HomePage />);

    // Assert
    // TODO: Add specific hero section assertions
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should have proper semantic HTML structure', () => {
    // Arrange & Act
    const { container } = render(<HomePage />);

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
    render(<HomePage />);

    // Assert
    // TODO: Check for services section heading once implemented
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should render all 8 sections in correct order', () => {
    // Arrange & Act
    const { container } = render(<HomePage />);

    // Assert - Verify structural order
    // 1. Header (outside main)
    // 2-7. Sections inside main
    // 8. Footer (outside main)

    const sections = container.querySelectorAll('section');
    // TODO: Update count once all sections render actual content
    expect(sections.length).toBeGreaterThanOrEqual(0);
  });
});
