import React from 'react';

export interface Logo {
  src: string;
  alt: string;
}

export interface NavigationItem {
  label: string;
  href: string;
}

export interface CTAButton {
  text: string;
  href: string;
}

export interface HeaderProps {
  logo: Logo;
  navigation: NavigationItem[];
  ctaButton: CTAButton;
}

/**
 * Header Component
 *
 * Top navigation bar with logo, menu items, and CTA button.
 * Should be sticky or fixed for better UX.
 *
 * @param props - Header configuration
 */
export function Header({ _logo, _navigation, _ctaButton }: HeaderProps): React.ReactElement {
  // TODO: Implement Header component
  // - Responsive navigation (hamburger menu on mobile)
  // - Sticky/fixed positioning
  // - Accessible navigation landmarks
  // - Active link highlighting

  return (
    <header role="banner">
      <nav role="navigation" aria-label="Main navigation">
        {/* TODO: Logo */}
        {/* TODO: Navigation items */}
        {/* TODO: CTA button */}
        <p>Header - TODO: Implement navigation</p>
      </nav>
    </header>
  );
}
