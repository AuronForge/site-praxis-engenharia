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
   * Prevent stat labels from wrapping on larger screens
   */
  singleLineStatLabels?: boolean;
  /**
   * Background image URL
   */
  backgroundImageUrl?: string;
  /**
   * Hero variant - controls height
   * @default 'full'
   */
  variant?: 'full' | 'compact';
  /**
   * Horizontal alignment of hero content
   * @default 'left'
   */
  contentAlignment?: 'left' | 'center';
  /**
   * Optional scroll hint shown below hero stats
   */
  scrollIndicator?: CTAButton;
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
  singleLineStatLabels = false,
  backgroundImageUrl,
  variant = 'full',
  contentAlignment = 'left',
  scrollIndicator,
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

  const heroClassName = [
    styles.hero,
    variant === 'compact' ? styles.heroCompact : '',
    scrollIndicator && variant !== 'compact' ? styles.heroWithScrollIndicator : '',
  ]
    .filter(Boolean)
    .join(' ');

  const contentClassName = [
    styles.content,
    contentAlignment === 'center' ? styles.contentCentered : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section
      className={heroClassName}
      style={{
        backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined,
      }}
    >
      {/* Dark overlay gradient */}
      <div className={backgroundImageUrl ? styles.overlay : styles.overlaySolid} />

      <div className={styles.container}>
        <div className={contentClassName}>
          {/* Badge/Pill */}
          {badge && (
            <div className={styles.badge} role="status">
              <svg
                className={styles.badgeIcon}
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M12 3.25L18 5.9V11.66C18 16.38 14.78 19.29 12 20.62C9.22 19.29 6 16.38 6 11.66V5.9L12 3.25Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
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
              <StatsRow items={stats} variant="light" singleLineLabels={singleLineStatLabels} />
            </div>
          )}
        </div>
      </div>

      {scrollIndicator && (
        <a
          href={scrollIndicator.href}
          className={styles.scrollIndicator}
          aria-label={scrollIndicator.label}
        >
          <span className={styles.scrollLabel}>{scrollIndicator.label}</span>
          <span className={styles.scrollMouse} aria-hidden="true">
            <span className={styles.scrollWheel} />
          </span>
        </a>
      )}
    </section>
  );
};

HeroSection.displayName = 'HeroSection';
