import React from 'react';

import styles from './PlatformSection.module.scss';

export interface PlatformFeature {
  icon: string;
  title: string;
  description: string;
}

export interface PlatformSectionProps {
  title: string;
  description: string;
  features: PlatformFeature[];
}

/**
 * PlatformSection Component
 *
 * Dark-themed section showcasing platform features:
 * - Dark navy/blue background
 * - White text
 * - Centered section header
 * - 6 feature cards in 3x2 grid
 * - Each card has icon, title, description
 *
 * @param props - Platform features data
 */
export function PlatformSection({
  title,
  description,
  features,
}: PlatformSectionProps): React.ReactElement {
  const getIconLabel = (icon: string): string => {
    const iconMap: Record<string, string> = {
      brain: '🧠',
      gauge: '📈',
      shield: '🛡️',
      settings: '⚙️',
      bell: '🔔',
      monitor: '🖥️',
    };

    return iconMap[icon] ?? '•';
  };

  return (
    <section className={styles.section} aria-labelledby="platform-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="platform-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <article key={`${feature.title}-${index}`} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                {getIconLabel(feature.icon)}
              </span>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
