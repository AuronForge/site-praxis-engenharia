import React from 'react';

import styles from './MetricCard.module.scss';

export interface MetricCardProps {
  value: string;
  label: string;
  helper?: string;
  icon?: React.ReactNode;
  variant?: 'light' | 'dark';
}

export const MetricCard: React.FC<MetricCardProps> = ({
  value,
  label,
  helper,
  icon,
  variant = 'light',
}): React.ReactElement => {
  return (
    <article className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.header}>
        {icon ? <div className={styles.icon}>{icon}</div> : null}

        <div className={styles.content}>
          <p className={styles.value}>{value}</p>
          <h3 className={styles.label}>{label}</h3>
        </div>
      </div>

      {helper ? <p className={styles.helper}>{helper}</p> : null}
    </article>
  );
};

MetricCard.displayName = 'MetricCard';
