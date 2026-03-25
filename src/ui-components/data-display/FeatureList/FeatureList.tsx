import React from 'react';

import styles from './FeatureList.module.scss';

export interface FeatureListItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export interface FeatureListProps {
  items: FeatureListItem[];
  variant?: 'light' | 'dark';
}

export const FeatureList: React.FC<FeatureListProps> = ({
  items,
  variant = 'light',
}): React.ReactElement => {
  const defaultIcon = (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        d="M5 13l4 4L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <ul className={`${styles.list} ${styles[variant]}`}>
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className={styles.item}>
          <div className={styles.iconCircle} aria-hidden="true">
            {item.icon ?? defaultIcon}
          </div>
          <div className={styles.content}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

FeatureList.displayName = 'FeatureList';
