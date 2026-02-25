import React from 'react';

import styles from './StatsRow.module.scss';

export interface StatItem {
  /**
   * Statistic value (e.g., "25+", "100%", "500+")
   */
  value: string;
  /**
   * Statistic label/description
   */
  label: string;
  /**
   * Optional helper/subtitle text
   */
  helper?: string;
}

export interface StatsRowProps {
  /**
   * Array of statistics to display
   */
  items: StatItem[];
  /**
   * Visual variant for different backgrounds
   * @default "light"
   */
  variant?: 'light' | 'dark';
}

/**
 * StatsRow Component
 *
 * Displays a horizontal list of statistics with semantic HTML.
 * Responsive layout that wraps on smaller screens.
 *
 * Uses <dl>, <dt>, <dd> for proper accessibility.
 *
 * @example
 * ```tsx
 * <StatsRow
 *   items={[
 *     { value: '25+', label: 'Anos de Experiência' },
 *     { value: '500+', label: 'Projetos Concluídos', helper: 'Em todo Brasil' },
 *     { value: '100%', label: 'Conformidade ANVISA' },
 *   ]}
 *   variant="dark"
 * />
 * ```
 */
export const StatsRow: React.FC<StatsRowProps> = ({
  items,
  variant = 'light',
}): React.ReactElement => {
  return (
    <div className={`${styles.statsRow} ${styles[variant]}`}>
      {items.map((item, index) => (
        <dl key={index} className={styles.stat}>
          <dt className={styles.value}>{item.value}</dt>
          <dd className={styles.label}>{item.label}</dd>
          {item.helper && <dd className={styles.helper}>{item.helper}</dd>}
        </dl>
      ))}
    </div>
  );
};

StatsRow.displayName = 'StatsRow';
