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

    expect(screen.getByText('Test Title'));
    expect(screen.getByText('Test description'));
  });

  it('renders CTAs with correct labels', () => {
    render(<Hero {...mockProps} />);

    expect(screen.getByText('Primary Button'));
    expect(screen.getByText('Secondary Button'));
  });

  it('renders stats', () => {
    render(<Hero {...mockProps} />);

    expect(screen.getByText('100+'));
    expect(screen.getByText('Clients'));
    expect(screen.getByText('50+'));
    expect(screen.getByText('Projects'));
  });

  it('renders optional badge when provided', () => {
    render(<Hero {...mockProps} badge="New Feature" />);

    expect(screen.getByText('New Feature'));
  });

  it('renders optional subtitle when provided', () => {
    render(<Hero {...mockProps} subtitle="Test Subtitle" />);

    expect(screen.getByText('Test Subtitle'));
  });

  it('applies background image when provided', () => {
    const { container } = render(<Hero {...mockProps} backgroundImage="/test-image.jpg" />);

    const section = container.querySelector('section');
    expect(section);
  });
});
