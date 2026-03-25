import React from 'react';

import { MetricCard } from '@ui-components/cards/MetricCard';

import styles from './ManagementSection.module.scss';

export interface WhyChooseItem {
  text: string;
}

export interface Metric {
  value: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

export interface ManagementSectionProps {
  title: string;
  description: string;
  methodology: string;
  whyChooseTitle: string;
  whyChooseItems: WhyChooseItem[];
  metrics: Metric[];
  spacing?: 'default' | 'compact';
}

/**
 * ManagementSection Component
 *
 * Section showcasing professional management approach with:
 * - Title and description
 * - Methodology details
 * - Why choose box with feature list
 * - Key performance metrics
 *
 * @param props - Management section data
 */
export function ManagementSection({
  title,
  description,
  methodology,
  whyChooseTitle,
  whyChooseItems,
  metrics,
  spacing = 'default',
}: ManagementSectionProps): React.ReactElement {
  const checkIcon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M8 12l3 3 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <section
      className={
        spacing === 'compact' ? `${styles.section} ${styles.sectionCompact}` : styles.section
      }
      aria-labelledby="management-title"
    >
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Content */}
          <div className={styles.content}>
            <h2 id="management-title" className={styles.title}>
              {title}
            </h2>
            <p className={styles.description}>{description}</p>
            <p className={styles.methodology}>{methodology}</p>

            {/* Why Choose Box */}
            <div className={styles.whyChoose}>
              <h3 className={styles.whyChooseTitle}>{whyChooseTitle}</h3>
              <ul className={styles.featureList}>
                {whyChooseItems.map((item, index) => (
                  <li key={`why-${index}`} className={styles.featureItem}>
                    <span className={styles.checkIcon}>{checkIcon}</span>
                    <span className={styles.featureText}>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Metrics */}
          <div className={styles.metrics}>
            {metrics.map((metric, index) => (
              <MetricCard
                key={`metric-${index}`}
                value={metric.value}
                label={metric.label}
                helper={metric.description}
                icon={metric.icon}
                variant="light"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

ManagementSection.displayName = 'ManagementSection';
