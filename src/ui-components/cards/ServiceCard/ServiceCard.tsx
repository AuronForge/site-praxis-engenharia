import React from 'react';
import { Link } from 'react-router-dom';

import styles from './ServiceCard.module.scss';

export interface ServiceCardProps {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  icon?: React.ReactNode;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  bullets,
  href,
  icon,
}): React.ReactElement => {
  // Check if href is an internal route (starts with /)
  const isInternalRoute = href.startsWith('/');

  return (
    <article className={styles.card}>
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

      {isInternalRoute ? (
        <Link to={href} className={styles.link}>
          Saiba mais
        </Link>
      ) : (
        <a href={href} className={styles.link}>
          Saiba mais
        </a>
      )}
    </article>
  );
};

ServiceCard.displayName = 'ServiceCard';
