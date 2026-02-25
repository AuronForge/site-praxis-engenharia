/**
 * Validation utility functions
 */

/**
 * Validates an email address
 * @param email - Email address to validate
 * @returns True if valid, false otherwise
 */
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

/**
 * Validates a password strength
 * @param password - Password to validate
 * @returns True if strong enough, false otherwise
 */
export const validatePassword = (password: string): boolean => {
  // At least 8 characters, one uppercase, one lowercase, one number
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  return regex.test(password);
};

/**
 * Validates a phone number (basic validation)
 * @param phone - Phone number to validate
 * @returns True if valid, false otherwise
 */
export const validatePhone = (phone: string): boolean => {
  // Basic format: allows digits, spaces, dashes, parentheses
  const regex = /^[\d\s\-()]+$/;
  return regex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

/**
 * Checks if a string is empty or contains only whitespace
 * @param value - String to check
 * @returns True if empty, false otherwise
 */
export const isEmpty = (value: string): boolean => {
  return !value || value.trim().length === 0;
};

/**
 * Validates a URL
 * @param url - URL to validate
 * @returns True if valid, false otherwise
 */
export const validateUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};
