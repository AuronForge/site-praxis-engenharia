import React from 'react';

import styles from './TestimonialsSection.module.scss';

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  avatar?: string;
}

export interface ClientLogo {
  src: string;
  alt: string;
}

export interface TestimonialsSectionProps {
  title: string;
  description?: string;
  testimonials: Testimonial[];
  clientLogos: ClientLogo[];
  pill?: string;
}

const QuoteIcon: React.FC = () => (
  <svg className={styles.quoteIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export function TestimonialsSection({
  title,
  description,
  testimonials,
  clientLogos,
  pill,
}: TestimonialsSectionProps): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="testimonials-title">
      <div className={styles.container}>
        <div className={styles.header}>
          {pill && <span className={styles.pill}>{pill}</span>}
          <h2 id="testimonials-title" className={styles.title}>
            {title}
          </h2>
          {description && <p className={styles.description}>{description}</p>}
        </div>

        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial) => (
            <article key={testimonial.id} className={styles.testimonialCard}>
              <QuoteIcon />
              <blockquote className={styles.quote}>{testimonial.quote}</blockquote>
              <div className={styles.authorInfo}>
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className={styles.avatar}
                  />
                ) : (
                  <div className={styles.avatar} />
                )}
                <div className={styles.authorDetails}>
                  <p className={styles.authorName}>{testimonial.author}</p>
                  <p className={styles.authorRole}>
                    {testimonial.role} - {testimonial.organization}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {clientLogos.length > 0 && (
          <div className={styles.clientLogos}>
            <p className={styles.logosTitle}>Empresas que confiam em nós</p>
            <div className={styles.logosGrid}>
              {clientLogos.map((logo, index) => (
                <img key={`logo-${index}`} src={logo.src} alt={logo.alt} className={styles.logo} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
