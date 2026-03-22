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
  /**
   * Optional icon name (trophy, chart, shield)
   */
  icon?: 'trophy' | 'chart' | 'shield';
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
 * Renders the appropriate icon SVG based on the icon name
 */
const StatIcon: React.FC<{ icon: 'trophy' | 'chart' | 'shield' }> = ({ icon }) => {
  const iconPaths = {
    trophy: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9C6 10.5913 6.63214 12.1174 7.75736 13.2426C8.88258 14.3679 10.4087 15 12 15C13.5913 15 15.1174 14.3679 16.2426 13.2426C17.3679 12.1174 18 10.5913 18 9V5H6V9Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V8C2 8.53043 2.21071 9.03914 2.58579 9.41421C2.96086 9.78929 3.46957 10 4 10H6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 5H20C20.5304 5 21.0391 5.21071 21.4142 5.58579C21.7893 5.96086 22 6.46957 22 7V8C22 8.53043 21.7893 9.03914 21.4142 9.41421C21.0391 9.78929 20.5304 10 20 10H18"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 15L8 21H16L15 15"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10 21H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    chart: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 3V21H21"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7 16L12 11L16 15L21 7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M17 7H21V11"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    shield: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M9 12L11 14L15 10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  };

  return <span className={styles.icon}>{iconPaths[icon]}</span>;
};

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
 *     { value: '25+', label: 'Anos de Experiência', icon: 'trophy' },
 *     { value: '500+', label: 'Projetos Concluídos', helper: 'Em todo Brasil', icon: 'chart' },
 *     { value: '100%', label: 'Conformidade ANVISA', icon: 'shield' },
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
          {item.icon && (
            <div className={styles.iconCircle}>
              <StatIcon icon={item.icon} />
            </div>
          )}
          <div className={styles.content}>
            <dt className={styles.value}>{item.value}</dt>
            <dd className={styles.label}>{item.label}</dd>
            {item.helper && <dd className={styles.helper}>{item.helper}</dd>}
          </div>
        </dl>
      ))}
    </div>
  );
};

StatsRow.displayName = 'StatsRow';
