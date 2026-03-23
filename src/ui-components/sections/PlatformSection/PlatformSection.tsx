import React, { type ReactNode } from 'react';

import styles from './PlatformSection.module.scss';

// Icon mapping
const iconMap: Record<string, string> = {
  database: '/images/icon-database.svg',
  chart: '/images/icon-chart.svg',
  shield: '/images/icon-shield.svg',
  document: '/images/icon-document.svg',
  bell: '/images/icon-bell.svg',
  gauge: '/images/icon-gauge.svg',
};

export interface PlatformFeature {
  icon?: ReactNode;
  iconName?: string;
  title: string;
  description: string;
}

export interface PlatformSectionProps {
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
export function PlatformSection({ features }: PlatformSectionProps): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="platform-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.pill}>Plataforma Tecnológica</span>
          <h2 id="platform-title" className={styles.title}>
            Sistema de Gestão Avançado
          </h2>
          <p className={styles.description}>
            Tecnologia proprietária desenvolvida especificamente para as necessidades da engenharia
            clínica moderna, integrando gestão, compliance e inteligência de dados.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <article key={`${feature.title}-${index}`} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                {feature.iconName && iconMap[feature.iconName] ? (
                  <img src={iconMap[feature.iconName]} alt="" width="24" height="24" />
                ) : feature.icon ? (
                  feature.icon
                ) : (
                  '•'
                )}
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
