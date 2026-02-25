/**
 * Jest Configuration for React + TypeScript
 * @see https://jestjs.io/docs/configuration
 */

module.exports = {
  // Use ts-jest preset for TypeScript support
  preset: 'ts-jest',

  // Use jsdom environment for React components testing
  testEnvironment: 'jsdom',

  // Root directory for tests
  roots: ['<rootDir>/src'],

  // File extensions to consider
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],

  // Pattern to find test files
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],

  // Transform TypeScript files using ts-jest
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: {
          jsx: 'react-jsx', // Use React 17+ JSX transform
          esModuleInterop: true,
          allowSyntheticDefaultImports: true,
        },
      },
    ],
  },

  // Coverage collection configuration
  collectCoverageFrom: [
    // Include all TypeScript files in src
    'src/**/*.{ts,tsx}',

    // Exclude TypeScript definition files
    '!src/**/*.d.ts',

    // Exclude Storybook stories
    '!src/**/*.stories.{ts,tsx}',

    // Exclude test files from coverage
    '!src/**/__tests__/**',
    '!src/**/__mocks__/**',
    '!src/**/*.test.{ts,tsx}',
    '!src/**/*.spec.{ts,tsx}',

    // Exclude entry point
    '!src/main.tsx',
    '!src/vite-env.d.ts',

    // Exclude barrel files (index files that only re-export)
    '!src/**/index.ts',
    '!src/**/index.tsx',

    // Exclude type-only files
    '!src/**/*.types.ts',
    '!src/**/*.types.tsx',
  ],

  // Coverage thresholds - all metrics must be >= 90%
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },

  // Module path aliases (must match tsconfig.json paths)
  moduleNameMapper: {
    // CSS modules and style files
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',

    // Path aliases
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@ui-components/(.*)$': '<rootDir>/src/ui-components/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
  },

  // Setup files to run after test environment is set up
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],

  // Clear mocks between tests
  clearMocks: true,
  resetMocks: true,
  restoreMocks: true,

  // Show detailed test results
  verbose: true,

  // Coverage output directory
  coverageDirectory: 'coverage',

  // Coverage report formats
  coverageReporters: [
    'text', // Console output
    'text-summary', // Summary in console
    'html', // HTML report in coverage/
    'lcov', // LCOV format for CI tools
    'json', // JSON format
  ],

  // Test timeout (milliseconds)
  testTimeout: 10000,

  // Ignore patterns for test execution
  testPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/coverage/',
  ],

  // Watch mode ignore patterns
  watchPathIgnorePatterns: [
    '/node_modules/',
    '/dist/',
    '/build/',
    '/coverage/',
  ],

  // Maximum number of workers for parallel test execution
  // CI environments should use --maxWorkers flag instead
  maxWorkers: '50%',

  // Error on deprecated APIs
  errorOnDeprecated: true,

  // Notify on test completion (useful in watch mode)
  notify: false,

  // Display individual test results with the test suite hierarchy
  verbose: true,
};
