import React from 'react';

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Image {
  src: string;
  alt: string;
}

export interface MiniStat {
  value: string;
  label: string;
}

export interface ExperienceSectionProps {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  images: Image[];
  stats: MiniStat[];
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
  _badge,
  title,
  _subtitle,
  _description,
  _features,
  _images,
  _stats,
}: ExperienceSectionProps): React.ReactElement {
  // TODO: Implement ExperienceSection component
  // - Badge component (light blue background)
  // - Two-column layout (responsive)
  // - Left column: badge, title, description, feature list
  // - Right column: image collage (2x2 grid), stats row below
  // - Feature items with icon and text
  // - Stats in horizontal row with values and labels

  return (
    <section aria-labelledby="experience-title">
      {/* TODO: Container */}
      {/* TODO: Left column - text content */}
      <h2 id="experience-title">{title}</h2>
      {/* TODO: Right column - images + stats */}
      <p>ExperienceSection - TODO: Implement text + image collage + stats</p>
    </section>
  );
}
