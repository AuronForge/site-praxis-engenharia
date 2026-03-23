import React from 'react';

import { StatsRow } from '@ui-components/data-display/StatsRow';

import styles from './HeroSection.module.scss';

export interface CTAButton {
  label: string;
  href: string;
}

export interface Stat {
  label: string;
  value: string;
  helper?: string;
}

export interface HeroSectionProps {
  /**
   * Badge/pill text shown above title
   */
  badge?: string;
  /**
   * Main title (H1)
   */
  title: string;
  /**
   * Word to highlight in the title (e.g., "Excelência")
   */
  highlightWord?: string;
  /**
   * Subtitle text
   */
  subtitle?: string;
  /**
   * Description paragraph
   */
  description: string;
  /**
   * Primary CTA button
   */
  primaryCta: CTAButton;
  /**
   * Secondary CTA button
   */
  secondaryCta: CTAButton;
  /**
   * Statistics/metrics to display
   */
  stats: Stat[];
  /**
   * Background image URL
   */
  backgroundImageUrl?: string;
}

/**
 * HeroSection Component
 *
 * Above-the-fold hero section featuring:
 * - Optional badge/pill
 * - Large H1 headline with optional highlighted word
 * - Description text
 * - Primary and secondary CTAs
 * - Stats/metrics row
 * - Background image with dark overlay gradient
 *
 * Fully responsive and accessible.
 *
 * @param props - HeroSection data
 */
export const HeroSection: React.FC<HeroSectionProps> = ({
  badge,
  title,
  highlightWord,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  stats,
  backgroundImageUrl,
}): React.ReactElement => {
  /**
   * Renders the title with optional highlighted word
   */
  const renderTitle = (): React.ReactElement => {
    if (!highlightWord || !title.includes(highlightWord)) {
      return <>{title}</>;
    }

    const parts = title.split(highlightWord);
    return (
      <>
        {parts[0]}
        <span className={styles.highlight}>{highlightWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section
      className={styles.hero}
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
      }}
    >
      {/* Dark overlay gradient */}
      <div className={styles.overlay} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge/Pill */}
          {badge && (
            <div className={styles.badge} role="status">
              <svg
                className={styles.badgeIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M5 8.5L7 10.5L11 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {badge}
            </div>
          )}

          {/* Title (H1) */}
          <h1 className={styles.title}>{renderTitle()}</h1>

          {/* Subtitle */}
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}

          {/* Description */}
          <p className={styles.description}>{description}</p>

          {/* CTAs */}
          <div className={styles.ctas}>
            <a
              href={primaryCta.href}
              className={`${styles.cta} ${styles.ctaPrimary}`}
              aria-label={primaryCta.label}
            >
              {primaryCta.label}
            </a>
            <a
              href={secondaryCta.href}
              className={`${styles.cta} ${styles.ctaSecondary}`}
              aria-label={secondaryCta.label}
            >
              {secondaryCta.label}
            </a>
          </div>

          {/* Stats */}
          {stats.length > 0 && (
            <div className={styles.stats}>
              <StatsRow items={stats} variant="light" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

HeroSection.displayName = 'HeroSection';
