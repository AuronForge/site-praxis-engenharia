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

const segmentIconMap: Record<string, React.ReactElement> = {
  hospital: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16" />
      <path d="M3 21h18" />
      <path d="M9 7h6" />
      <path d="M9 11h6" />
      <path d="M9 15h6" />
    </svg>
  ),
  heart: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  ),
  lab: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <polyline points="14,2 14,8 20,8" />
      <path d="M12 18v-6" />
      <path d="M8 18v-1" />
      <path d="M16 18v-3" />
    </svg>
  ),
  building: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  ),
};

function getSegmentIcon(iconName?: string): React.ReactElement {
  if (!iconName || !segmentIconMap[iconName]) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="10" />
      </svg>
    );
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
                {segment.icon ?? getSegmentIcon(segment.iconName)}
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
