import React from 'react';

import styles from './Button.module.scss';

export interface ButtonProps {
  /**
   * Button content
   */
  children: React.ReactNode;
  /**
   * Click handler
   */
  onClick?: () => void;
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary' | 'outline';
  /**
   * Button size
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;
  /**
   * Button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Full width button
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Additional CSS class
   */
  className?: string;
  /**
   * Test ID for testing
   */
  testId?: string;
}

/**
 * Button component
 * 
 * A reusable button component with multiple variants and sizes.
 * 
 * @example
 * ```tsx
 * <Button onClick={handleClick}>Click me</Button>
 * <Button variant="secondary" size="large">Large Button</Button>
 * <Button disabled>Disabled Button</Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  fullWidth = false,
  className = '',
  testId = 'button',
}): JSX.Element => {
  const buttonClasses = [
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${size}`],
    fullWidth ? styles['button--full-width'] : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      data-testid={testId}
    >
      {children}
    </button>
  );
};

Button.displayName = 'Button';
