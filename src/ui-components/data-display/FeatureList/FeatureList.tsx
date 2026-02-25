import React from 'react';

import styles from './FeatureList.module.scss';

export interface FeatureListItem {
  title: string;
  description: string;
}

export interface FeatureListProps {
  items: FeatureListItem[];
  variant?: 'light' | 'dark';
}

export const FeatureList: React.FC<FeatureListProps> = ({
  items,
  variant = 'light',
}): React.ReactElement => {
  return (
    <ul className={`${styles.list} ${styles[variant]}`}>
      {items.map((item, index) => (
        <li key={`${item.title}-${index}`} className={styles.item}>
          <span className={styles.bullet} aria-hidden="true" />
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
