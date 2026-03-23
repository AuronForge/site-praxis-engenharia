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
  services: ServiceCardProps[];
  ctaBanner: ServicesSectionCtaBanner;
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
export function ServicesSection({ services, ctaBanner }: ServicesSectionProps): React.ReactElement {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Serviços Especializados</span>
          <h2 id="services-title" className={styles.title}>
            Soluções Completas em Engenharia Clínica
          </h2>
          <p className={styles.description}>
            Integramos tecnologia, conformidade e operação para garantir segurança, disponibilidade
            e performance em todo o ciclo de vida dos equipamentos.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <ServiceCard key={`${service.title}-${index}`} {...service} />
          ))}
        </div>

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
      </div>
    </section>
  );
}
