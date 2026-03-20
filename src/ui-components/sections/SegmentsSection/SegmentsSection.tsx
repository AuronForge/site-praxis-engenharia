import React from 'react';

import styles from './SegmentsSection.module.scss';

export interface Segment {
  icon?: React.ReactNode;
  value: string;
  label: string;
  description: string;
}

export interface SegmentsSectionProps {
  title: string;
  description?: string;
  segments: Segment[];
  pill?: string;
}

const iconMap: Record<string, string> = {
  hospital: '🏥',
  heart: '❤️',
  lab: '🔬',
  building: '🏢',
};

function getIcon(icon?: string): string {
  if (!icon) return '📊';
  return iconMap[icon] ?? '📊';
}

export function SegmentsSection({
  title,
  description,
  segments,
  pill,
}: SegmentsSectionProps): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="segments-title">
      <div className={styles.container}>
        <div className={styles.header}>
          {pill && <span className={styles.pill}>{pill}</span>}
          <h2 id="segments-title" className={styles.title}>
            {title}
          </h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        <div className={styles.grid}>
          {segments.map((segment, index) => (
            <article key={`segment-${index}`} className={styles.card}>
              <span className={styles.icon} aria-hidden="true">
                {segment.icon ?? getIcon(segment.icon as unknown as string)}
              </span>
              <p className={styles.value}>{segment.value}</p>
              <p className={styles.label}>{segment.label}</p>
              {segment.description && <p className={styles.cardDescription}>{segment.description}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
