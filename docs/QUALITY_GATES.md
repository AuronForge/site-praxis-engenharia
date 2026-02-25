# Quality Gates

This document describes all quality gates enforced in the Praxis Engenharia project to ensure code quality, consistency, and maintainability.

## 🎯 Overview

Quality gates are automated checks that run at different stages of development to catch issues early and maintain high code standards.

## 🔍 Pre-Commit Quality Gates

Before any commit is accepted, the following checks run automatically via Husky hooks:

### 1. Lint-Staged (Auto-fix & Format)

**Purpose**: Fix and format only the files being committed

**What it does**:

- Runs ESLint with auto-fix on TypeScript/React files
- Runs Stylelint with auto-fix on CSS/SCSS files
- Formats all staged files with Prettier

**Configuration**: See `lint-staged` section in [package.json](../package.json)

**Files affected**:

```json
{
  "*.{ts,tsx}": ["eslint --fix", "prettier --write"],
  "*.{css,scss}": ["stylelint --fix", "prettier --write"],
  "*.{json,md}": ["prettier --write"]
}
```

**How to bypass** (NOT RECOMMENDED):

```bash
git commit --no-verify
```

⚠️ **Warning**: Bypassing should only be done in exceptional circumstances and with team approval.

### 2. Jest Tests with Coverage

**Purpose**: Ensure all tests pass and coverage thresholds are met

**What it does**:

- Runs entire test suite
- Generates coverage report
- Fails if coverage is below thresholds

**Coverage Thresholds** (Minimum 90% for each):

- **Branches**: 90%
- **Functions**: 90%
- **Lines**: 90%
- **Statements**: 90%

**Command**:

```bash
npm run test:ci
```

**Configuration**: See [jest.config.js](../jest.config.js)

**If it fails**:

1. Check which tests are failing
2. Fix failing tests
3. Add tests for uncovered code
4. Verify coverage with: `npm run test:coverage`

## 📝 Commit Message Quality Gate

After writing your commit message, validation runs automatically:

### Commitlint Validation

**Purpose**: Ensure commit messages follow Conventional Commits specification

**Format**:

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Allowed Types**:

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style changes (formatting, etc.)
- `refactor`: Code refactoring
- `perf`: Performance improvements
- `test`: Adding or updating tests
- `build`: Build system or dependencies
- `ci`: CI configuration
- `chore`: Other changes
- `revert`: Revert a previous commit

**Rules**:

- Type must be lowercase
- Type is required
- Subject is required
- Subject must not end with a period
- Header max length: 100 characters
- Body must have blank line before it
- Footer must have blank line before it

**Valid Examples**:

```bash
feat: add user authentication
fix: resolve navigation bug on mobile devices
docs: update API documentation
refactor: simplify user validation logic
test: add unit tests for Button component
perf: optimize image loading
```

**Invalid Examples**:

```bash
# ❌ No type
add user authentication

# ❌ Type not lowercase
FEAT: add user authentication

# ❌ Subject ends with period
feat: add user authentication.

# ❌ Type not allowed
feature: add user authentication
```

**Configuration**: See [commitlint.config.js](../commitlint.config.js)

**Recommended Tool**:

```bash
npm run commit
```

This launches an interactive CLI that guides you through creating a valid commit message.

## 🧪 Test Quality Gates

### Coverage Thresholds

**Global Thresholds**: 90% minimum for all metrics

**What's covered**:

```javascript
collectCoverageFrom: [
  'src/**/*.{ts,tsx}',
  '!src/**/*.d.ts',
  '!src/**/*.stories.{ts,tsx}',
  '!src/**/__tests__/**',
  '!src/**/__mocks__/**',
  '!src/main.tsx',
  '!src/vite-env.d.ts',
];
```

**What's excluded**:

- Type definition files (`*.d.ts`)
- Story files (`*.stories.tsx`)
- Test files themselves
- Mock files
- Entry point (`main.tsx`)
- Vite type definitions

### Running Tests Locally

```bash
# Run tests once
npm test

# Watch mode (during development)
npm run test:watch

# With coverage report
npm run test:coverage

# CI mode (pre-commit)
npm run test:ci
```

### Coverage Reports

After running tests with coverage, view the report:

```bash
# HTML report (detailed, visual)
open coverage/index.html

# Terminal summary
npm run test:coverage
```

## 🎨 Linting Quality Gates

### ESLint (TypeScript/React)

**Purpose**: Enforce code quality and consistency rules

**Key Rules**:

- No unused variables (except those prefixed with `_`)
- Explicit function return types required
- No `any` type allowed
- No non-null assertions (`!`)
- Prefer nullish coalescing (`??`)
- Prefer optional chain (`?.`)
- React Hooks rules enforced
- Accessibility rules enforced (jsx-a11y)

**Run manually**:

```bash
npm run lint:ts
npm run lint:ts -- --fix
```

**Configuration**: See [.eslintrc.json](../.eslintrc.json)

### Stylelint (CSS/SCSS)

**Purpose**: Enforce CSS/SCSS code quality and consistency

**Key Rules**:

- Standard CSS rules
- SCSS-specific rules
- Consistent class naming
- Consistent custom property naming

**Run manually**:

```bash
npm run lint:css
npm run lint:css -- --fix
```

**Configuration**: See [.stylelintrc.json](../.stylelintrc.json)

### HTMLHint (HTML)

**Purpose**: Enforce HTML best practices

**Key Rules**:

- Lowercase tag names
- Lowercase attributes
- Double quotes for attribute values
- Unique IDs
- Required alt attributes
- Valid HTML5 doctype

**Run manually**:

```bash
npm run lint:html
```

**Configuration**: See [.htmlhintrc](../.htmlhintrc)

## 💅 Formatting Quality Gate

### Prettier

**Purpose**: Ensure consistent code formatting

**Settings**:

- Semicolons: Yes
- Single quotes: Yes (TypeScript/JavaScript)
- Trailing commas: ES5
- Print width: 100 characters
- Tab width: 2 spaces
- End of line: LF (Unix)

**Run manually**:

```bash
# Format all files
npm run format

# Check formatting
npm run format:check
```

**Configuration**: See [.prettierrc.json](../.prettierrc.json)

**Ignored files**: See [.prettierignore](../.prettierignore)

## 🔄 CI/CD Quality Gates

### Type Checking

**Purpose**: Ensure TypeScript code compiles without errors

**Run manually**:

```bash
npm run type-check
```

**Configuration**: See [tsconfig.json](../tsconfig.json)

### Build Verification

**Purpose**: Ensure the project builds successfully

**Run manually**:

```bash
npm run build
```

**What it does**:

1. Runs TypeScript compiler
2. Runs Vite build process
3. Outputs production-ready files to `dist/`

## 📊 Quality Metrics

### Minimum Requirements

| Metric                | Threshold | Gate       |
| --------------------- | --------- | ---------- |
| Test Coverage (All)   | >= 90%    | Pre-commit |
| ESLint Errors         | 0         | Pre-commit |
| ESLint Warnings       | 0         | Pre-commit |
| TypeScript Errors     | 0         | Build      |
| Commit Message Format | Valid     | Commit-msg |

### Monitoring

Track these metrics over time:

- Test coverage trends
- Number of linting issues
- Build times
- Bundle size

## 🚨 Handling Failures

### Lint-Staged Fails

**Symptoms**:

- Pre-commit hook fails
- Error messages from ESLint or Prettier

**Solutions**:

1. Read the error messages carefully
2. Run `npm run lint:fix` to auto-fix
3. Manually fix remaining issues
4. Stage fixed files: `git add .`
5. Try committing again

### Tests Fail

**Symptoms**:

- Pre-commit hook fails after lint-staged passes
- Test failures or coverage below threshold

**Solutions**:

1. Run `npm test` to see failures
2. Fix failing tests
3. Add tests for uncovered code
4. Verify: `npm run test:coverage`
5. Try committing again

### Commit Message Fails

**Symptoms**:

- Commit is rejected after entering message
- commitlint error message

**Solutions**:

1. Read the error message
2. Use correct Conventional Commit format
3. Or use: `npm run commit` for guided flow
4. Try again

## 🛠️ Configuration Files Reference

| File                   | Purpose                    |
| ---------------------- | -------------------------- |
| `.eslintrc.json`       | ESLint configuration       |
| `.stylelintrc.json`    | Stylelint configuration    |
| `.prettierrc.json`     | Prettier configuration     |
| `.prettierignore`      | Prettier ignore patterns   |
| `.htmlhintrc`          | HTMLHint configuration     |
| `commitlint.config.js` | Commitlint configuration   |
| `jest.config.js`       | Jest test configuration    |
| `.husky/pre-commit`    | Pre-commit hook script     |
| `.husky/commit-msg`    | Commit message hook script |
| `tsconfig.json`        | TypeScript configuration   |
| `.editorconfig`        | Editor configuration       |

## 🎓 Best Practices

### Writing Testable Code

1. Keep functions small and focused
2. Avoid side effects when possible
3. Use dependency injection
4. Separate concerns (UI, logic, data)

### Maintaining High Coverage

1. Test before you commit
2. Add tests for new features
3. Don't skip edge cases
4. Test error conditions

### Efficient Development Flow

1. Run tests in watch mode: `npm run test:watch`
2. Use auto-fix: `npm run lint:fix`
3. Use interactive commit: `npm run commit`
4. Check overall quality: `npm run lint && npm run test:coverage`

### Debugging Failed Gates

1. **Read error messages carefully**
2. **Run commands locally** before committing
3. **Fix one issue at a time**
4. **Use provided tools** (lint:fix, commit CLI)
5. **Ask for help** if stuck

## 📈 Continuous Improvement

Quality gates should evolve with the project:

1. **Monitor metrics** over time
2. **Adjust thresholds** if needed
3. **Add new rules** as patterns emerge
4. **Remove outdated rules** that don't add value
5. **Document changes** in this file

## ⚡ Quick Reference

### Before Committing Checklist

- [ ] Tests pass: `npm test`
- [ ] Linting passes: `npm run lint`
- [ ] Formatting correct: `npm run format:check`
- [ ] Types correct: `npm run type-check`
- [ ] Coverage >= 90%: `npm run test:coverage`

### Common Commands

```bash
# Fix all auto-fixable issues
npm run lint:fix && npm run format

# Run all quality checks
npm run type-check && npm run lint && npm run test:coverage

# Interactive commit
npm run commit

# Create a release
npm run release
```

---

These quality gates ensure that the Praxis Engenharia codebase remains healthy, maintainable, and of high quality. They are not obstacles, but safeguards that help us deliver better software.
