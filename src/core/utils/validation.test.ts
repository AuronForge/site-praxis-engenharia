import { validateEmail, validatePassword, validatePhone, isEmpty, validateUrl } from './validation';

describe('validation utilities', () => {
  describe('validateEmail', () => {
    it('should return true for valid email addresses', () => {
      expect(validateEmail('test@example.com')).toBe(true);
      expect(validateEmail('user.name@domain.co.uk')).toBe(true);
      expect(validateEmail('test+tag@example.com')).toBe(true);
    });

    it('should return false for invalid email addresses', () => {
      expect(validateEmail('invalid')).toBe(false);
      expect(validateEmail('invalid@')).toBe(false);
      expect(validateEmail('@invalid.com')).toBe(false);
      expect(validateEmail('invalid@domain')).toBe(false);
      expect(validateEmail('')).toBe(false);
    });
  });

  describe('validatePassword', () => {
    it('should return true for strong passwords', () => {
      expect(validatePassword('Password1')).toBe(true);
      expect(validatePassword('StrongPass123')).toBe(true);
      expect(validatePassword('MyP@ssw0rd')).toBe(true);
    });

    it('should return false for weak passwords', () => {
      expect(validatePassword('password')).toBe(false); // No uppercase, no number
      expect(validatePassword('PASSWORD')).toBe(false); // No lowercase, no number
      expect(validatePassword('Pass1')).toBe(false); // Too short
      expect(validatePassword('12345678')).toBe(false); // No letters
      expect(validatePassword('')).toBe(false);
    });
  });

  describe('validatePhone', () => {
    it('should return true for valid phone numbers', () => {
      expect(validatePhone('1234567890')).toBe(true);
      expect(validatePhone('123-456-7890')).toBe(true);
      expect(validatePhone('(123) 456-7890')).toBe(true);
      expect(validatePhone('123 456 7890')).toBe(true);
    });

    it('should return false for invalid phone numbers', () => {
      expect(validatePhone('123')).toBe(false); // Too short
      expect(validatePhone('abcdefghij')).toBe(false); // No digits
      expect(validatePhone('')).toBe(false);
    });
  });

  describe('isEmpty', () => {
    it('should return true for empty or whitespace strings', () => {
      expect(isEmpty('')).toBe(true);
      expect(isEmpty('   ')).toBe(true);
      expect(isEmpty('\t\n')).toBe(true);
    });

    it('should return false for non-empty strings', () => {
      expect(isEmpty('text')).toBe(false);
      expect(isEmpty('  text  ')).toBe(false);
      expect(isEmpty('a')).toBe(false);
    });
  });

  describe('validateUrl', () => {
    it('should return true for valid URLs', () => {
      expect(validateUrl('https://example.com')).toBe(true);
      expect(validateUrl('http://example.com')).toBe(true);
      expect(validateUrl('https://example.com/path')).toBe(true);
      expect(validateUrl('https://example.com/path?query=value')).toBe(true);
    });

    it('should return false for invalid URLs', () => {
      expect(validateUrl('not-a-url')).toBe(false);
      expect(validateUrl('example.com')).toBe(false);
      expect(validateUrl('')).toBe(false);
      expect(validateUrl('://invalid')).toBe(false);
    });
  });
});
