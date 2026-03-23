import { render, screen } from '@testing-library/react';

import { Hero } from './Hero';

describe('Hero', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test description',
    primaryCTA: {
      text: 'Primary Button',
      href: '/primary',
    },
    secondaryCTA: {
      text: 'Secondary Button',
      href: '/secondary',
    },
    stats: [
      { value: '100+', label: 'Clients' },
      { value: '50+', label: 'Projects' },
    ],
  };

  it('renders with required props', () => {
    render(<Hero {...mockProps} />);

    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
  });

  it('renders CTAs with correct labels', () => {
    render(<Hero {...mockProps} />);

    expect(screen.getByText('Primary Button')).toBeInTheDocument();
    expect(screen.getByText('Secondary Button')).toBeInTheDocument();
  });

  it('renders stats', () => {
    render(<Hero {...mockProps} />);

    expect(screen.getByText('100+')).toBeInTheDocument();
    expect(screen.getByText('Clients')).toBeInTheDocument();
    expect(screen.getByText('50+')).toBeInTheDocument();
    expect(screen.getByText('Projects')).toBeInTheDocument();
  });

  it('renders optional badge when provided', () => {
    render(<Hero {...mockProps} badge="New Feature" />);

    expect(screen.getByText('New Feature')).toBeInTheDocument();
  });

  it('renders optional subtitle when provided', () => {
    render(<Hero {...mockProps} subtitle="Test Subtitle" />);

    expect(screen.getByText('Test Subtitle')).toBeInTheDocument();
  });

  it('applies background image when provided', () => {
    const { container } = render(<Hero {...mockProps} backgroundImage="/test-image.jpg" />);

    const section = container.querySelector('section');
    expect(section).toBeInTheDocument();
  });
});
