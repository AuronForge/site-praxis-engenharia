# Contributing to Praxis Engenharia

> Thank you for your interest in contributing! This guide will help you understand our development workflow and quality standards.

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Development Workflow](#-development-workflow)
- [Branch Strategy](#-branch-strategy)
- [Code Quality](#-code-quality)
- [Commit Guidelines](#-commit-guidelines)
- [Pull Request Process](#-pull-request-process)
- [Testing Requirements](#-testing-requirements)

## 🚀 Quick Start

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0
- Git >= 2.0.0

### Initial Setup

```bash
# 1. Clone and install
git clone <repository-url>
cd site-praxis-engenharia
npm install

# 2. Verify setup
npm run lint        # Should pass
npm test            # Should pass with 90%+ coverage
npm run type-check  # Should pass

# 3. Start development
npm run dev         # Opens http://localhost:4200
```

## 🔄 Development Workflow

### 1. Create a Branch

```bash
# Update main branch
git checkout main
git pull origin main

# Create feature branch
git checkout -b feat/your-feature-name
```

**Branch Naming Conventions:**

| Prefix      | Purpose                  | Example                 |
| ----------- | ------------------------ | ----------------------- |
| `feat/`     | New features             | `feat/user-profile`     |
| `fix/`      | Bug fixes                | `fix/login-redirect`    |
| `docs/`     | Documentation            | `docs/api-guide`        |
| `refactor/` | Code refactoring         | `refactor/auth-service` |
| `test/`     | Test additions           | `test/button-component` |
| `chore/`    | Config/tooling changes   | `chore/update-deps`     |
| `perf/`     | Performance improvements | `perf/image-loading`    |

### 2. Make Changes

Write code following our architecture:

- **Components** → `src/ui-components/` (presentational only)
- **Pages** → `src/pages/` (orchestrate components + data)
- **Business Logic** → `src/core/` (utils, hooks, types)
- **API Calls** → `src/services/` (never in components)

See [Architecture Guide](docs/ARCHITECTURE.md) for details.

### 3. Test Your Changes

Run these commands frequently during development:

```bash
# Development (watch mode)
npm run test:watch   # Tests auto-run on file changes

# Before committing
npm run lint         # Lint all files
npm run lint:fix     # Auto-fix linting issues
npm test             # Run all tests
npm run type-check   # TypeScript validation
```

Run these commands frequently during development:

```bash
# Development (watch mode)
npm run test:watch   # Tests auto-run on file changes

# Before committing
npm run lint         # Lint all files
npm run lint:fix     # Auto-fix linting issues
npm test             # Run all tests
npm run type-check   # TypeScript validation
```

**What each linter checks:**

```bash
# ESLint - TypeScript/React code quality
npm run lint:eslint

# Stylelint - CSS/SCSS formatting
npm run lint:stylelint

# HTMLHint - HTML validation
npm run lint:html

# Prettier - Code formatting
npm run format       # Format all files
npm run format:check # Check formatting only
```

### 4. Commit Your Work

Use **Conventional Commits** format. The easiest way:

```bash
# Interactive commit helper
npm run commit
```

Or manually:

```bash
git add .
git commit -m "feat: add user profile page"
```

See [Commit Guidelines](#-commit-guidelines) below for details.

## 🌿 Branch Strategy

We follow a **feature branch workflow**:

```
main (protected)
  ├── feat/user-authentication
  ├── fix/mobile-navigation
  └── docs/api-documentation
```

**Rules:**

- `main` branch is protected
- All changes via Pull Requests
- Branches deleted after merge
- Keep branches short-lived (< 1 week)

**Rules:**

- `main` branch is protected
- All changes via Pull Requests
- Branches deleted after merge
- Keep branches short-lived (< 1 week)

## 🎨 Code Quality

### Linting & Formatting

All code must pass linting before commit:

| Tool          | What It Checks                    | Command                  |
| ------------- | --------------------------------- | ------------------------ |
| **ESLint**    | TypeScript/React code quality     | `npm run lint:eslint`    |
| **Stylelint** | CSS/SCSS formatting & conventions | `npm run lint:stylelint` |
| **HTMLHint**  | HTML structure & accessibility    | `npm run lint:html`      |
| **Prettier**  | Code formatting consistency       | `npm run format`         |

**Auto-fix most issues:**

```bash
npm run lint:fix   # Fix ESLint + Stylelint
npm run format     # Format with Prettier
```

### Code Style Guidelines

**TypeScript:**

```typescript
// ✅ Good
export interface User {
  id: string;
  name: string;
  email: string;
}

export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

// ❌ Bad
export const validateEmail = (email: any) => {
  // No 'any' type
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // Missing semicolon
};
```

**React Components:**

```tsx
// ✅ Good - Functional component with explicit types
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ children, onClick, disabled = false }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

// ❌ Bad - Class component, implicit types
export class Button extends React.Component {
  render() {
    return <button>{this.props.children}</button>;
  }
}
```

**Import Organization:**

ESLint will automatically organize imports:

```tsx
// ✅ Good - Organized by groups
import React, { useState } from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from '@ui-components/Button';
import { validateEmail } from '@core/utils/validation';

import styles from './Component.module.scss';

// ❌ Bad - Random order
import styles from './Component.module.scss';
import { validateEmail } from '../../core/utils/validation';
import React from 'react';
```

## 📝 Commit Guidelines

## 📝 Commit Guidelines

This project enforces **Conventional Commits** specification. This enables:

- ✅ Automated changelog generation
- ✅ Automatic semantic versioning
- ✅ Clear and searchable git history
- ✅ Better collaboration and code reviews

### Commit Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Example:**

```bash
feat(auth): add password reset functionality

Implemented email-based password reset flow with token validation.
Reset tokens expire after 1 hour.

Closes #123
```

### Commit Types

| Type       | Purpose                       | Version Impact | In Changelog? |
| ---------- | ----------------------------- | -------------- | ------------- |
| `feat`     | New feature                   | Minor          | ✅ Yes        |
| `fix`      | Bug fix                       | Patch          | ✅ Yes        |
| `docs`     | Documentation only            | None           | ✅ Yes        |
| `style`    | Formatting (no code change)   | None           | ❌ No         |
| `refactor` | Code refactoring              | None           | ✅ Yes        |
| `perf`     | Performance improvement       | Patch          | ✅ Yes        |
| `test`     | Add/update tests              | None           | ❌ No         |
| `build`    | Build system changes          | None           | ❌ No         |
| `ci`       | CI configuration              | None           | ❌ No         |
| `chore`    | Other changes (configs, deps) | None           | ❌ No         |
| `revert`   | Revert previous commit        | Depends        | ✅ Yes        |

### Interactive Commit (Recommended)

```bash
npm run commit
```

This interactive CLI will guide you through creating a valid commit.

### Good Examples

```bash
# Simple feature
feat: add dark mode toggle

# Feature with scope
feat(auth): implement OAuth2 login

# Bug fix
fix: prevent memory leak in dashboard

# Bug fix with scope
fix(api): handle network timeout errors

# Documentation
docs: update installation instructions

# Refactoring with body
refactor(validation): extract email regex to constant

Moved regex pattern to constants file for reusability
across multiple validation functions.

# Performance improvement
perf(images): implement lazy loading

# Breaking change (triggers MAJOR version)
feat!: redesign authentication API

BREAKING CHANGE: Authentication now uses JWT tokens instead
of session cookies. All API clients must update.
```

### Bad Examples ❌

```bash
# Missing type
"Add new feature"

# Type capitalized
"Feat: add feature"

# Missing colon
"feat add feature"

# Subject ends with period
"feat: add feature."

# Too vague
"fix: fix bug"
"chore: update stuff"
"feat: changes"

# Past tense
"feat: added feature"
```

### Commit Rules

✅ **DO:**

- Use present tense ("add" not "added")
- Use imperative mood ("move cursor" not "moves cursor")
- Keep subject under 100 characters
- Start subject lowercase (after type)
- No period at end of subject
- Leave blank line between subject and body
- Explain _what_ and _why_ in body, not _how_

❌ **DON'T:**

- Use past tense or passive voice
- Capitalize subject (after type and colon)
- End subject with period
- Write vague messages
- Mix multiple unrelated changes

### Breaking Changes

Triggers **MAJOR** version bump (1.x.x → 2.0.0):

```bash
# Option 1: Exclamation mark
feat!: change API response format
fix!: rename user field to userId

# Option 2: BREAKING CHANGE footer
feat: redesign authentication

BREAKING CHANGE: Session-based auth removed.
All clients must now use OAuth2 tokens.
```

## 🔀 Pull Request Process

### 1. Pre-flight Checks

## 🔀 Pull Request Process

### 1. Pre-flight Checks

Before creating a PR, ensure:

```bash
# All linters pass
npm run lint         # ✅ 0 errors

# All tests pass
npm test             # ✅ 60/60 passing

# TypeScript compiles
npm run type-check   # ✅ No errors

# Coverage meets threshold
npm run test:coverage # ✅ >= 90%

# Production build works
npm run build        # ✅ Builds successfully
```

### 2. Push Your Branch

```bash
# Push feature branch
git push origin feat/your-feature-name
```

### 3. Create Pull Request

**PR Title:** Use Conventional Commits format

```
feat(auth): add OAuth2 login support
fix(api): resolve timeout handling
docs: update contribution guide
```

**PR Description Template:**

```markdown
## Description

Brief description of changes

## Type of Change

- [ ] Bug fix (non-breaking change fixing an issue)
- [ ] New feature (non-breaking change adding functionality)
- [ ] Breaking change (fix or feature causing existing functionality to change)
- [ ] Documentation update

## How Has This Been Tested?

- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing

## Checklist

- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Comments added for complex code
- [ ] Documentation updated
- [ ] No new warnings generated
- [ ] Tests added/updated
- [ ] All tests pass
- [ ] Coverage >= 90%
```

### 4. Code Review

**As Author:**

- Respond to feedback promptly
- Make requested changes in new commits
- Don't force-push (preserves review context)
- Mark conversations as resolved when addressed

**As Reviewer:**

- Be constructive and specific
- Test the changes locally
- Check for edge cases
- Verify tests are adequate

### 5. Merge

After approval:

1. Ensure CI passes
2. Squash or rebase if needed
3. Merge to `main`
4. Delete feature branch

## 🎯 Pre-commit Quality Gates

Git hooks automatically run before each commit:

**1. lint-staged** - Lints and formats staged files

```bash
# What runs automatically:
*.{ts,tsx,js,jsx}  → eslint --fix, prettier --write
*.{css,scss}       → stylelint --fix, prettier --write
*.{md,json,yml}    → prettier --write
```

**2. npm run test:ci** - Runs all tests

```bash
# Runs with:
- 2 worker processes (faster)
- Coverage collection
- No watch mode
```

**If hooks fail:**

```bash
# Fix issues
npm run lint:fix
npm run format

# Run tests
npm test

# Try commit again
git commit -m "feat: your feature"
```

**Bypass hooks (NOT RECOMMENDED):**

```bash
git commit --no-verify -m "feat: emergency fix"
```

## 🧪 Testing Requirements

### Coverage Threshold

Maintain **>= 90%** coverage for:

- **Branches**: 90%
- **Functions**: 90%
- **Lines**: 90%
- **Statements**: 90%

### Writing Tests

Follow AAA pattern (Arrange, Act, Assert):

```typescript
// ✅ Good test structure
describe('Button', () => {
  it('should call onClick when clicked', () => {
    // Arrange
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    // Act
    fireEvent.click(screen.getByText('Click me'));

    // Assert
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

// ❌ Bad - unclear, no AAA structure
it('test button', () => {
  const fn = jest.fn();
  render(<Button onClick={fn}>Click</Button>);
  fireEvent.click(screen.getByText('Click'));
  expect(fn).toHaveBeenCalled();
});
```

### Test Categories

```bash
# Unit tests - Test individual functions/components
src/core/utils/validation.test.ts
src/ui-components/Button/Button.test.tsx

# Integration tests - Test component interactions
src/pages/Login/Login.test.tsx

# Service tests - Test API calls (mocked)
src/services/api/client.test.ts
```

See [Testing Guide](docs/TESTING_GUIDE.md) for more examples.

## 📦 Dependencies

### Before Adding Dependencies

Consider:

1. **Is it necessary?** Can we implement it ourselves?
2. **Is it maintained?** Check last commit date
3. **Is it popular?** Check npm downloads and GitHub stars
4. **License compatible?** Check license type
5. **Bundle size impact?** Check bundlephobia.com

### Adding a Dependency

```bash
# Production dependency
npm install <package-name>

# Development dependency
npm install -D <package-name>

# Then commit the change
git add package.json package-lock.json
git commit -m "build: add <package-name> for <purpose>"
```

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update specific package
npm update <package-name>

# Update all (carefully)
npm update

# Commit
git commit -m "chore(deps): update dependencies"
```

## ❌ Common Mistakes to Avoid

| Mistake                    | Why It's Bad           | Solution                    |
| -------------------------- | ---------------------- | --------------------------- |
| Committing without testing | Breaks CI/CD           | Always run `npm test`       |
| Invalid commit messages    | Breaks changelog       | Use `npm run commit`        |
| Ignoring linter warnings   | Code quality degrades  | Fix with `npm run lint:fix` |
| Decreasing coverage        | Makes codebase fragile | Add tests for new code      |
| Committing `console.log`   | Pollutes production    | Remove debug statements     |
| Large, unfocused PRs       | Hard to review         | Keep PRs small and focused  |
| Not updating docs          | Documentation drift    | Update docs with code       |

## 📚 Additional Resources

- [Architecture Guide](docs/ARCHITECTURE.md) - Project structure and patterns
- [Quality Gates](docs/QUALITY_GATES.md) - Detailed quality gate information
- [Testing Guide](docs/TESTING_GUIDE.md) - Testing best practices
- [Conventional Commits](https://conventionalcommits.org) - Official specification
- [Semantic Versioning](https://semver.org) - Version numbering guide

## ✅ Pre-Submission Checklist

Before submitting your PR:

- [ ] Branch follows naming convention (`feat/`, `fix/`, etc.)
- [ ] All commits use Conventional Commits format
- [ ] All linters pass (`npm run lint`)
- [ ] All tests pass (`npm test`)
- [ ] TypeScript compiles (`npm run type-check`)
- [ ] Coverage >= 90% (`npm run test:coverage`)
- [ ] No commented-out code or debug statements
- [ ] Documentation updated (if needed)
- [ ] Self-review completed
- [ ] Feature branch is up to date with `main`

## 🆘 Getting Help

If you're stuck:

1. **Check documentation** in `/docs`
2. **Review existing code** for patterns
3. **Run diagnostics:**
   ```bash
   npm run lint          # Check code quality
   npm run test:coverage # Check test failures
   npm run type-check    # Check TypeScript errors
   ```
4. **Ask for help** - Create an issue or ask team members

---

Thank you for contributing to Praxis Engenharia! 🎉
