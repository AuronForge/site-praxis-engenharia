import React from 'react';

import { FeatureList, type FeatureListItem } from '@ui-components/data-display/FeatureList';
import { StatsRow, type StatItem } from '@ui-components/data-display/StatsRow';

import styles from './ExperienceSection.module.scss';

export interface ExperienceImage {
  src: string;
  alt: string;
}

export interface ExperienceSectionProps {
  heading: string;
  description: string;
  features: FeatureListItem[];
  images: ExperienceImage[];
  badge?: string;
  stats: StatItem[];
}

/**
 * ExperienceSection Component
 *
 * Showcases company experience and credibility:
 * - Badge "Experiência Comprovada"
 * - Large title "Mais de 25 Anos Servindo à Saúde Brasileira"
 * - Description paragraph
 * - 2-3 feature bullets with icons
 * - Image collage (4 images in grid)
 * - Mini stats (4 metrics in row below images)
 *
 * Layout: Two-column (text left, images right on desktop)
 *
 * @param props - Experience section data
 */
export function ExperienceSection({
  heading,
  description,
  features,
  images,
  badge,
  stats,
}: ExperienceSectionProps): React.ReactElement {
  const collageImages = images.slice(0, 4);

  return (
    <section className={styles.section} aria-labelledby="experience-title">
      <div className={styles.container}>
        <div className={styles.contentGrid}>
          <div className={styles.leftColumn}>
            <span className={styles.pill}>Experiência Comprovada</span>
            <h2 id="experience-title" className={styles.heading}>
              {heading}
            </h2>
            <p className={styles.description}>{description}</p>

            <FeatureList items={features} variant="light" />
          </div>

          <div className={styles.rightColumn}>
            <div className={styles.collage}>
              {collageImages.map((image, index) => (
                <img
                  key={`${image.alt}-${index}`}
                  src={image.src}
                  alt={image.alt}
                  className={`${styles.collageImage} ${styles[`collageImage${index + 1}`]}`}
                />
              ))}

              {badge ? (
                <div className={styles.imageBadge}>
                  <div className={styles.badgeTitle}>ISO 9001</div>
                  <div className={styles.badgeSubtitle}>Certificado</div>
                </div>
              ) : null}
            </div>
          </div>
        </div>

        <div className={styles.statsWrap}>
          <StatsRow items={stats} variant="dark" />
        </div>
      </div>
    </section>
  );
}
