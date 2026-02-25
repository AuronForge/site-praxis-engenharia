import React, { useState } from 'react';

import styles from './Header.module.scss';

export interface NavigationLink {
  label: string;
  href: string;
}

export interface CTAButton {
  label: string;
  href: string;
}

export interface Brand {
  name: string;
  href: string;
  logoAlt: string;
  logoSrc?: string;
}

export interface HeaderProps {
  links: NavigationLink[];
  cta: CTAButton;
  brand: Brand;
}

/**
 * Header Component
 *
 * Responsive navigation header with:
 * - Brand logo and name
 * - Navigation links
 * - CTA button
 * - Mobile hamburger menu
 * - Sticky positioning with shadow
 *
 * Accessibility:
 * - Semantic nav element with aria-label
 * - Keyboard navigable menu
 * - aria-expanded for mobile menu state
 * - Focus management on menu toggle
 *
 * @param props - Header configuration
 */
export function Header({ links, cta, brand }: HeaderProps): React.ReactElement {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = (): void => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (): void => {
    // Close mobile menu when a link is clicked
    closeMobileMenu();
  };

  const handleKeyDown = (event: React.KeyboardEvent): void => {
    // Close menu on Escape key
    if (event.key === 'Escape' && isMobileMenuOpen) {
      closeMobileMenu();
    }
  };

  return (
    <header className={styles.header} role="banner">
      <nav
        className={styles.nav}
        role="navigation"
        aria-label="Main navigation"
        onKeyDown={handleKeyDown}
      >
        <div className={styles.container}>
          {/* Brand - Logo + Name */}
          <a href={brand.href} className={styles.brand} aria-label={brand.name}>
            {brand.logoSrc && (
              <img
                src={brand.logoSrc}
                alt={brand.logoAlt}
                className={styles.logo}
                width="40"
                height="40"
              />
            )}
            <span className={styles.brandName}>{brand.name}</span>
          </a>

          {/* Desktop Navigation Links */}
          <ul className={styles.navLinks} role="list">
            {links.map((link) => (
              <li key={link.href} className={styles.navItem}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button */}
          <a href={cta.href} className={`${styles.ctaButton} ${styles.desktopOnly}`}>
            {cta.label}
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            className={styles.mobileMenuToggle}
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-controls="mobile-menu"
          >
            <span className={styles.hamburger}>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
              <span className={styles.hamburgerLine}></span>
            </span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.mobileMenuOpen : ''}`}
          aria-hidden={!isMobileMenuOpen}
        >
          <ul className={styles.mobileNavLinks} role="list">
            {links.map((link) => (
              <li key={link.href} className={styles.mobileNavItem}>
                <a
                  href={link.href}
                  className={styles.mobileNavLink}
                  onClick={handleLinkClick}
                  tabIndex={isMobileMenuOpen ? 0 : -1}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className={styles.mobileNavItem}>
              <a
                href={cta.href}
                className={styles.mobileCtaButton}
                onClick={handleLinkClick}
                tabIndex={isMobileMenuOpen ? 0 : -1}
              >
                {cta.label}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
