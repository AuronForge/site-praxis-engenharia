import React from 'react';

import styles from './SegmentsSection.module.scss';

export interface Segment {
  icon?: React.ReactNode;
  iconName?: string;
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

const segmentIconMap: Record<string, string> = {
  hospital: '/images/icon-hospital.svg',
  heart: '/images/icon-heart.svg',
  lab: '/images/icon-lab.svg',
  building: '/images/icon-building.svg',
};

function getSegmentIcon(iconName?: string): string {
  if (!iconName || !segmentIconMap[iconName]) {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/></svg>';
  }
  return segmentIconMap[iconName];
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
                {segment.iconName && segmentIconMap[segment.iconName] ? (
                  <img src={segmentIconMap[segment.iconName]} alt="" width="42" height="42" />
                ) : segment.icon ? (
                  segment.icon
                ) : (
                  <img src={getSegmentIcon(segment.iconName)} alt="" width="42" height="42" />
                )}
              </span>
              <p className={styles.value}>{segment.value}</p>
              <p className={styles.label}>{segment.label}</p>
              {segment.description && (
                <p className={styles.cardDescription}>{segment.description}</p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
