import React from 'react';

import styles from './Footer.module.scss';

export interface FooterLogo {
  src: string;
  alt: string;
}

export interface FooterLink {
  label: string;
  href: string;
  icon?: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface SocialLink {
  platform: string;
  href: string;
  ariaLabel: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface FooterProps {
  logo: FooterLogo;
  description: string;
  sections: FooterSection[];
  social: SocialLink[];
  copyright: string;
  legalLinks: LegalLink[];
}

const socialIcons: Record<string, JSX.Element> = {
  linkedin: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  ),
};

const ContactIcon: React.FC<{ type?: string }> = ({ type }) => {
  const icons: Record<string, JSX.Element> = {
    phone: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.161 15.161 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1A11.36 11.36 0 018.56 3.98c.94.36 1.92.6 2.95.7 1.03.1 2.06.1 3.09.1.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.56.11.34.03.74-.25 1.02l-2.2 2.2c-.28.28-.68.35-1.03.2-1.08-.48-2.07-1.14-2.91-2.06-.84-.92-1.58-1.83-2.06-2.91-.15-.35-.08-.75.2-1.03l2.2-2.2c.28-.28.68-.36 1.02-.25 1.12.37 2.31.57 3.56.57.55 0 1 .45 1 1v3.5c0 .55-.45 1-1 1z" />
      </svg>
    ),
    email: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
      </svg>
    ),
    location: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
      </svg>
    ),
  };
  return icons[type ?? 'location'] || icons.location;
};

export function Footer({
  logo,
  description,
  sections,
  social,
  copyright,
  legalLinks,
}: FooterProps): React.ReactElement {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.mainContent}>
          <div className={styles.brandColumn}>
            <a href="/" className={styles.logo}>
              <span className={styles.logoIcon}>P</span>
              <span className={styles.logoText}>{logo.alt}</span>
            </a>
            <p className={styles.description}>{description}</p>
            <div className={styles.socialLinks}>
              {social.map((item) => (
                <a
                  key={item.platform}
                  href={item.href}
                  className={styles.socialLink}
                  aria-label={item.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {socialIcons[item.platform] || item.platform}
                </a>
              ))}
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={`section-${index}`} className={styles.linkColumn}>
              <h3 className={styles.columnTitle}>{section.title}</h3>
              <ul className={styles.linkList}>
                {section.links.map((link, linkIndex) => (
                  <li key={`link-${index}-${linkIndex}`} className={styles.linkItem}>
                    {link.icon ? (
                      <a href={link.href} className={styles.contactLink}>
                        <ContactIcon type={link.icon} />
                        {link.label}
                      </a>
                    ) : (
                      <a href={link.href} className={styles.link}>
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>{copyright}</p>
          <div className={styles.legalLinks}>
            {legalLinks.map((link, index) => (
              <a key={`legal-${index}`} href={link.href} className={styles.legalLink}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
