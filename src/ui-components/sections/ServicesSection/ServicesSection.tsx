import React from 'react';

export interface ServiceLink {
  text: string;
  href: string;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  link: ServiceLink;
}

export interface CTABanner {
  title: string;
  description: string;
  buttonText: string;
  buttonHref: string;
}

export interface ServicesSectionProps {
  title: string;
  subtitle: string;
  description: string;
  services: Service[];
  ctaBanner: CTABanner;
}

/**
 * ServicesSection Component
 *
 * Displays the main services offered:
 * - Section header with title and description
 * - 3 service cards in a grid
 * - Each card has icon, title, description, feature list, and link
 * - Blue CTA banner at bottom
 *
 * @param props - Services section data
 */
export function ServicesSection({
  title,
  _subtitle,
  _description,
  _services,
  _ctaBanner,
}: ServicesSectionProps): React.ReactElement {
  // TODO: Implement ServicesSection component
  // - Section header (centered)
  // - 3-column grid of service cards (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
  // - Service cards with icon, title, description, checkmark list, "Saiba mais" link
  // - Blue CTA banner with centered text and button

  return (
    <section aria-labelledby="services-title">
      {/* TODO: Section header */}
      <h2 id="services-title">{title}</h2>
      {/* TODO: Service cards grid */}
      {/* TODO: CTA banner */}
      <p>ServicesSection - TODO: Implement 3 service cards + CTA banner</p>
    </section>
  );
}
