/**
 * Commitlint Configuration
 * Enforces Conventional Commits specification
 * @see https://www.conventionalcommits.org/
 * @see https://commitlint.js.org/
 */

module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    // Type enum - allowed commit types
    'type-enum': [
      2,
      'always',
      [
        'feat', // New feature
        'fix', // Bug fix
        'docs', // Documentation only changes
        'style', // Changes that don't affect code meaning (formatting, etc)
        'refactor', // Code change that neither fixes a bug nor adds a feature
        'perf', // Performance improvement
        'test', // Adding missing tests or correcting existing tests
        'build', // Changes to build system or dependencies
        'ci', // Changes to CI configuration files and scripts
        'chore', // Other changes that don't modify src or test files
        'revert', // Reverts a previous commit
      ],
    ],

    // Enforce lowercase for type
    'type-case': [2, 'always', 'lower-case'],

    // Type is required
    'type-empty': [2, 'never'],

    // Scope must be lowercase if present
    'scope-case': [2, 'always', 'lower-case'],

    // Subject is required
    'subject-empty': [2, 'never'],

    // Subject must not end with period
    'subject-full-stop': [2, 'never', '.'],

    // Header (first line) max length
    'header-max-length': [2, 'always', 100],

    // Body must have blank line before it
    'body-leading-blank': [2, 'always'],

    // Footer must have blank line before it
    'footer-leading-blank': [2, 'always'],
  },
};

/**
 * COMMIT MESSAGE EXAMPLES
 *
 * ✅ VALID COMMITS:
 *
 * feat: add user authentication system
 * feat(auth): implement JWT token validation
 * feat(api): add pagination to user list endpoint
 *
 * fix: resolve navigation bug on mobile devices
 * fix(button): correct disabled state styling
 * fix(api): handle network timeout errors properly
 *
 * docs: update installation instructions in README
 * docs(api): add JSDoc comments to client methods
 * docs(contributing): clarify commit message guidelines
 *
 * style: format code according to prettier rules
 * style(components): fix indentation in Button component
 *
 * refactor: simplify validation logic
 * refactor(auth): extract token validation to separate utility
 * refactor(api): use async/await instead of promises
 *
 * test: add unit tests for Button component
 * test(validation): add edge cases for email validation
 * test(integration): add e2e tests for login flow
 *
 * perf: improve rendering performance of large lists
 * perf(api): add caching layer for frequently accessed data
 *
 * build: update vite to version 5.0
 * build(deps): upgrade react to 18.3
 *
 * ci: add automated deployment workflow
 * ci(github): configure dependabot for security updates
 *
 * chore: update .gitignore with IDE folders
 * chore(deps): update development dependencies
 *
 * revert: revert "feat: add experimental feature"
 *
 * ❌ INVALID COMMITS:
 *
 * Add new feature          → Missing type
 * Feat: add feature        → Type must be lowercase
 * feat add feature         → Missing colon after type
 * feat: Add feature.       → Subject should not end with period
 * feat: add new awesome amazing feature for user authentication system → Header too long (>100 chars)
 *
 * COMMIT WITH BODY AND FOOTER:
 *
 * feat(api): add rate limiting to API endpoints
 *
 * Implemented rate limiting using token bucket algorithm to prevent
 * API abuse. Default limit is 100 requests per minute per user.
 *
 * BREAKING CHANGE: API now requires authentication for all endpoints
 * Closes #123
 */
