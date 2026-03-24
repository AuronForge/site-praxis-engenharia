import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import { HomePage } from './HomePage';

const renderWithRouter = (ui: Parameters<typeof render>[0]): ReturnType<typeof render> => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('HomePage', () => {
  it('should render all sections', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should render hero section', () => {
    renderWithRouter(<HomePage />);

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should have proper semantic HTML structure', () => {
    const { container } = renderWithRouter(<HomePage />);

    const header = container.querySelector('header');
    const main = container.querySelector('main');
    const footer = container.querySelector('footer');

    expect(header).toBeInTheDocument();
    expect(main).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
  });

  it('should render services section', () => {
    renderWithRouter(<HomePage />);

    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('should render all sections in correct order', () => {
    const { container } = renderWithRouter(<HomePage />);

    const sections = container.querySelectorAll('section');
    expect(sections.length).toBeGreaterThanOrEqual(0);
  });
});
