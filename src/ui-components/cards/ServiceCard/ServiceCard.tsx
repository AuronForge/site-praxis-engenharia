import React from 'react';

import { Link } from 'react-router-dom';

import styles from './ServiceCard.module.scss';

export interface ServiceCardProps {
  title: string;
  description: string;
  bullets: string[];
  href?: string;
  icon?: React.ReactNode;
  variant?: 'default' | 'planning';
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  bullets,
  href,
  icon,
  variant = 'default',
}): React.ReactElement => {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      {icon ? <div className={styles.iconArea}>{icon}</div> : null}

      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <ul className={styles.bullets}>
        {bullets.map((bullet, index) => (
          <li key={index} className={styles.bulletItem}>
            {bullet}
          </li>
        ))}
      </ul>

      {href ? (
        <Link to={href} className={styles.link}>
          Saiba mais
          <svg
            className={styles.arrow}
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
        </Link>
      ) : null}
    </article>
  );
};

ServiceCard.displayName = 'ServiceCard';
