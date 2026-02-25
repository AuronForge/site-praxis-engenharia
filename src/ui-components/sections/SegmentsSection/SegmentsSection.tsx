import React from 'react';

export interface Segment {
  icon: string;
  value: string;
  label: string;
  description: string;
}

export interface SegmentsSectionProps {
  title: string;
  description: string;
  segments: Segment[];
}

/**
 * SegmentsSection Component
 *
 * Displays market segments served with metrics:
 * - Section header
 * - 4 segment cards in horizontal row
 * - Each card has icon, metric value, label, description
 *
 * @param props - Segments data
 */
export function SegmentsSection({
  title,
  _description,
  _segments,
}: SegmentsSectionProps): React.ReactElement {
  // TODO: Implement SegmentsSection component
  // - Centered section header
  // - 4-column grid (responsive: 1-2 cols mobile, 4 cols desktop)
  // - Segment cards with:
  //   - Icon (at top)
  //   - Large metric value (e.g., "80+")
  //   - Bold label (e.g., "Hospitais Gerais")
  //   - Small description text
  // - Light background for cards

  return (
    <section aria-labelledby="segments-title">
      <h2 id="segments-title">{title}</h2>
      {/* TODO: Description */}
      {/* TODO: Segments grid */}
      <p>SegmentsSection - TODO: Implement 4 segment metric cards</p>
    </section>
  );
}
