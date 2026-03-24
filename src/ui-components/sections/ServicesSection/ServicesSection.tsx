import React from 'react';

import { ServiceCard, type ServiceCardProps } from '@ui-components/cards/ServiceCard';

import styles from './ServicesSection.module.scss';

export interface ServicesSectionCtaBanner {
  title: string;
  text: string;
  buttonLabel: string;
  href: string;
}

export interface ServicesSectionProps {
  title: string;
  description: string;
  services: ServiceCardProps[];
  ctaBanner?: ServicesSectionCtaBanner;
}

/**
 * ServicesSection Component
 *
 * Displays the main services offered:
 * - Section header with title and description
 * - Service cards in a responsive grid
 * - Each card has icon, title, description, and feature list
 * - Optional CTA banner at bottom
 *
 * @param props - Services section data
 */
export function ServicesSection({
  title,
  description,
  services,
  ctaBanner,
}: ServicesSectionProps): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 id="services-title" className={styles.title}>
            {title}
          </h2>
          <p className={styles.description}>{description}</p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={`${service.title}-${index}`} {...service} />
          ))}
        </div>

        {ctaBanner ? (
          <div className={styles.banner}>
            <div className={styles.bannerContent}>
              <h3 className={styles.bannerTitle}>{ctaBanner.title}</h3>
              <p className={styles.bannerText}>{ctaBanner.text}</p>
            </div>
            <a href={ctaBanner.href} className={styles.bannerButton}>
              {ctaBanner.buttonLabel}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M10 5l3 3-3 3"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
