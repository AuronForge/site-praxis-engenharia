import React from 'react';

export interface CTALink {
  text: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface HeroProps {
  title: string;
  subtitle: string;
  description: string;
  primaryCTA: CTALink;
  secondaryCTA: CTALink;
  stats: Stat[];
  backgroundImage: string;
}

/**
 * Hero Component
 *
 * Above-the-fold hero section with:
 * - Large headline with gradient/colored text
 * - Description text
 * - Primary and secondary CTAs
 * - Stats/metrics row
 * - Background image with overlay
 *
 * @param props - Hero section data
 */
export function Hero({
  title,
  subtitle,
  _description,
  _primaryCTA,
  _secondaryCTA,
  _stats,
  _backgroundImage,
}: HeroProps): React.ReactElement {
  // TODO: Implement Hero component
  // - Background image with dark overlay
  // - Gradient or colored subtitle text (e.g., "de Excelência" in blue)
  // - Two CTA buttons (primary solid, secondary outline)
  // - Stats row with icons
  // - Responsive layout (stack on mobile)

  return (
    <section aria-label={`${title} ${subtitle}`}>
      {/* TODO: Background image with overlay */}
      {/* TODO: Content container */}
      {/* TODO: Title with colored subtitle */}
      {/* TODO: Description */}
      {/* TODO: CTA buttons */}
      {/* TODO: Stats row */}
      <p>Hero - TODO: Implement hero section with background and CTAs</p>
    </section>
  );
}
