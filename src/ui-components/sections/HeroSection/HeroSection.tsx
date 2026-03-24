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
   * Primary CTA button (optional)
   */
  primaryCta?: CTAButton;
  /**
   * Secondary CTA button (optional)
   */
  secondaryCta?: CTAButton;
  /**
   * Statistics/metrics to display (optional)
   */
  stats?: Stat[];
  /**
   * Background image URL
   */
  backgroundImageUrl?: string;
  /**
   * Hero variant - controls height
   * @default 'full'
   */
  variant?: 'full' | 'compact';
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
  variant = 'full',
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
      className={variant === 'compact' ? `${styles.hero} ${styles.heroCompact}` : styles.hero}
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
      }}
    >
      {/* Dark overlay gradient */}
      <div className={backgroundImageUrl ? styles.overlay : styles.overlaySolid} />

      <div className={styles.container}>
        <div className={styles.content}>
          {/* Badge/Pill */}
          {badge && (
            <div className={styles.badge} role="status">
              <svg
                className={styles.badgeIcon}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path d="M19.14 12.94c.04-.31.06-.63.06-.94s-.02-.63-.06-.94l2.03-1.58a.5.5 0 0 0 .12-.64l-1.92-3.32a.5.5 0 0 0-.6-.22l-2.39.96a7.028 7.028 0 0 0-1.63-.94l-.36-2.54A.488.488 0 0 0 13.9 2h-3.8a.488.488 0 0 0-.49.42l-.36 2.54c-.59.24-1.13.55-1.63.94l-2.39-.96a.5.5 0 0 0-.6.22L2.71 8.48a.5.5 0 0 0 .12.64l2.03 1.58c-.04.31-.06.65-.06.94s.02.63.06.94l-2.03 1.58a.5.5 0 0 0-.12.64l1.92 3.32c.13.22.39.31.6.22l2.39-.96c.5.39 1.05.71 1.63.94l.36 2.54c.05.24.25.42.49.42h3.8c.24 0 .44-.18.49-.42l.36-2.54c.59-.24 1.13-.55 1.63-.94l2.39.96c.22.09.47 0 .6-.22l1.92-3.32a.5.5 0 0 0-.12-.64l-2.03-1.58ZM12 15.5A3.5 3.5 0 1 1 12 8.5a3.5 3.5 0 0 1 0 7Z" />
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
          {(primaryCta ?? secondaryCta) && (
            <div className={styles.ctas}>
              {primaryCta && (
                <a
                  href={primaryCta.href}
                  className={`${styles.cta} ${styles.ctaPrimary}`}
                  aria-label={primaryCta.label}
                >
                  {primaryCta.label}
                </a>
              )}
              {secondaryCta && (
                <a
                  href={secondaryCta.href}
                  className={`${styles.cta} ${styles.ctaSecondary}`}
                  aria-label={secondaryCta.label}
                >
                  {secondaryCta.label}
                </a>
              )}
            </div>
          )}

          {/* Stats */}
          {stats && stats.length > 0 && (
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
