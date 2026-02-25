import React from 'react';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface TestimonialsSectionProps {
  title: string;
  testimonials: Testimonial[];
  clientLogos: ClientLogo[];
}

/**
 * TestimonialsSection Component
 *
 * Showcases client testimonials and logos:
 * - Section title
 * - 3 testimonial cards with quotes
 * - Client logos strip at bottom
 *
 * @param props - Testimonials and client logos data
 */
export function TestimonialsSection({
  title,
  _testimonials,
  _clientLogos,
}: TestimonialsSectionProps): React.ReactElement {
  // TODO: Implement TestimonialsSection component
  // - Section title (centered)
  // - 3-column grid of testimonial cards (responsive)
  // - Testimonial card design:
  //   - Quote icon
  //   - Quote text (larger font)
  //   - Author name (bold)
  //   - Role and organization (smaller, gray)
  //   - Optional: avatar image
  // - Client logos strip (horizontal scrollable row)
  // - Logos should be grayscale, hover to color

  return (
    <section aria-labelledby="testimonials-title">
      <h2 id="testimonials-title">{title}</h2>
      {/* TODO: Testimonials grid */}
      {/* TODO: Client logos strip */}
      <p>TestimonialsSection - TODO: Implement 3 testimonial cards + client logos</p>
    </section>
  );
}
