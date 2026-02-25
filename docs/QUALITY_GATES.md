# Quality Gates

> Automated quality enforcement at every step to ensure code reliability, consistency, and maintainability.

## 📋 Table of Contents

- [Overview](#-overview)
- [Pre-Commit Gates](#-pre-commit-gates)
- [Commit-Msg Gates](#-commit-msg-gates)
- [CI/CD Pipeline](#-cicd-pipeline)
- [Quality Metrics](#-quality-metrics)
- [Troubleshooting](#-troubleshooting)

## 🎯 Overview

Quality gates are automatic checkpoints that prevent problematic code from entering the codebase. They run **locally** (git hooks) and should also run in **CI/CD** (continuous integration).

**Three enforcement points:**

1. **Pre-commit** - Before code is committed
2. **Commit-msg** - After commit message is written
3. **CI/CD** - Before code is merged

## 🔒 Pre-Commit Gates

Runs **automatically** before each commit via Husky `.husky/pre-commit` hook.

### Gate 1: lint-staged

**Purpose:** Lint and format only staged files (fast!)

**What runs:**

```bash
# TypeScript/React files
*.{ts,tsx,js,jsx}
  → eslint --fix        # Auto-fix code issues
  → prettier --write    # Format code

# CSS/SCSS files
*.{css,scss}
  → stylelint --fix     # Auto-fix style issues
  → prettier --write    # Format styles

# Other files
*.{md,json,yml,yaml}
  → prettier --write    # Format markup/data files
```

**Why only staged files?**

- Faster (only lints what you're committing)
- Doesn't break when legacy code has issues
- Gradually improves codebase

**Manual run:**

```bash
# Lint and fix all staged files
git add .
npm run lint:fix
```

**Configuration:** `package.json` → `lint-staged` section

### Gate 2: Jest Tests with Coverage

**Purpose:** Ensure all tests pass and coverage meets 90% threshold

**What runs:**

```bash
npm run test:ci
```

**Equivalent to:**

```bash
jest --ci --coverage --maxWorkers=2
```

**What it checks:**

| Metric     | Threshold | Current |
| ---------- | --------- | ------- |
| Branches   | >= 90%    | 95.45%  |
| Functions  | >= 90%    | 95.23%  |
| Lines      | >= 90%    | 100%    |
| Statements | >= 90%    | 98.82%  |

**Files included in coverage:**

```javascript
src/**/*.{ts,tsx}
  EXCEPT:
  - *.d.ts           // Type definitions
  - *.stories.tsx    // Storybook stories
  - __tests__/**     // Test files
  - __mocks__/**     // Mock files
  - main.tsx         // Entry point (tested via E2E)
```

**Configuration:** [jest.config.cjs](../jest.config.cjs)

**Manual run:**

```bash
# Run once
npm test

# Watch mode (development)
npm run test:watch

# With coverage report
npm run test:coverage

# Open HTML report
# coverage/lcov-report/index.html
```

### Why Tests Run AFTER Linting

```
Stage files
  ↓
Run lint-staged (may modify files with --fix)
  ↓
Run tests (test the FIXED code, not original)
```

If tests ran first, they'd test the original code, not the auto-fixed version.

## 📝 Commit-Msg Gates

Runs **automatically** after writing commit message via Husky `.husky/commit-msg` hook.

### CommitLint Validation

**Purpose:** Enforce Conventional Commits specification

**Required format:**

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

**Rules enforced:**

| Rule              | Description                     | Example             |
| ----------------- | ------------------------------- | ------------------- |
| Type required     | Must start with valid type      | `feat:`, `fix:`     |
| Type lowercase    | Type must be lowercase          | `feat` ✅ `Feat` ❌ |
| Type valid        | Must be allowed type (11 types) | See table below     |
| Subject required  | Must have subject after colon   | `: add feature`     |
| Header max length | Header <= 100 characters        | Full commit line    |
| No period at end  | Subject must not end with `.`   | `add feature` ✅    |

**Allowed commit types:**

| Type       | Purpose                 | Version Impact | In CHANGELOG? |
| ---------- | ----------------------- | -------------- | ------------- |
| `feat`     | New feature             | Minor (x.1.0)  | ✅ Yes        |
| `fix`      | Bug fix                 | Patch (x.x.1)  | ✅ Yes        |
| `docs`     | Documentation           | None           | ✅ Yes        |
| `style`    | Code style (formatting) | None           | ❌ No         |
| `refactor` | Code refactoring        | None           | ✅ Yes        |
| `perf`     | Performance improvement | Patch          | ✅ Yes        |
| `test`     | Test changes            | None           | ❌ No         |
| `build`    | Build system changes    | None           | ❌ No         |
| `ci`       | CI configuration        | None           | ❌ No         |
| `chore`    | Other changes           | None           | ❌ No         |
| `revert`   | Revert previous commit  | Depends        | ✅ Yes        |

**Valid examples:**

```bash
feat: add user profile page
fix: resolve navigation bug on mobile
docs: update installation guide
refactor(auth): simplify validation logic
perf(images): implement lazy loading
test: add Button component tests
```

**Invalid examples:**

```bash
# ❌ Missing type
"add user profile"

# ❌ Type capitalized
"Feat: add profile"

# ❌ Type not in allowed list
"feature: add profile"

# ❌ Missing colon
"feat add profile"

# ❌ Subject ends with period
"feat: add profile."

# ❌ Too long (> 100 chars)
"feat: add a really long description that exceeds one hundred characters which is way too verbose"
```

**Recommended: Interactive commit**

```bash
npm run commit
```

Guides you through creating a valid commit message.

**Configuration:** [commitlint.config.cjs](../commitlint.config.cjs)

## 🔄 CI/CD Pipeline

### Recommended CI Workflow

Run these checks on **every pull request** and **main branch push**:

#### Step 1: Install Dependencies

```yaml
- name: Install dependencies
  run: npm ci
```

Use `npm ci` (not `npm install`) for reproducible builds.

#### Step 2: TypeScript Validation

```yaml
- name: Type check
  run: npm run type-check
```

**What it does:**

- Runs `tsc --noEmit` (TypeScript compiler)
- Checks for type errors WITHOUT generating files
- Fails if any type errors exist

**Local equivalent:**

```bash
npm run type-check
```

#### Step 3: Linting

```yaml
- name: Lint code
  run: npm run lint
```

**What runs:**

```bash
npm run lint:eslint     # ESLint (TS/React)
npm run lint:stylelint  # Stylelint (CSS/SCSS)
npm run lint:html       # HTMLHint (HTML)
```

**Must return 0 errors and 0 warnings.**

**Local equivalent:**

```bash
npm run lint

# Auto-fix most issues
npm run lint:fix
```

#### Step 4: Tests with Coverage

```yaml
- name: Run tests
  run: npm run test:ci
```

**What it does:**

- Runs all Jest tests
- Collects coverage
- Fails if coverage < 90% for any metric
- Uses 2 workers for speed

**Local equivalent:**

```bash
npm run test:ci
```

#### Step 5: Production Build

```yaml
- name: Build
  run: npm run build
```

**What it does:**

- Runs Vite production build
- Outputs to `dist/` folder
- Fails if build errors occur

**Why important:**

- Catches issues that only appear in production mode
- Verifies all import paths resolve
- Ensures bundle optimization works

**Local equivalent:**

```bash
npm run build

# Preview build
npm run preview
```

### Complete CI Example (GitHub Actions)

```yaml
name: CI

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

jobs:
  quality:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Type check
        run: npm run type-check

      - name: Lint
        run: npm run lint

      - name: Test
        run: npm run test:ci

      - name: Build
        run: npm run build
```

### CI vs Local Checks Comparison

| Check              | Local (Git Hook)     | CI (Pipeline) |
| ------------------ | -------------------- | ------------- |
| **lint-staged**    | ✅ Only staged files | ❌ Not needed |
| **Tests**          | ✅ Full suite        | ✅ Full suite |
| **Type check**     | ❌ Optional          | ✅ Required   |
| **Lint all files** | ❌ Only staged       | ✅ All files  |
| **Build**          | ❌ Optional          | ✅ Required   |

**Why CI checks more:**

- Git hooks = fast feedback (only changed files)
- CI = comprehensive check (entire codebase)
- CI catches issues in files you didn't change

## 📊 Quality Metrics

### Current Status

| Metric                     | Threshold | Current | Status  |
| -------------------------- | --------- | ------- | ------- |
| Test Coverage (Branches)   | >= 90%    | 95.45%  | ✅ Pass |
| Test Coverage (Functions)  | >= 90%    | 95.23%  | ✅ Pass |
| Test Coverage (Lines)      | >= 90%    | 100%    | ✅ Pass |
| Test Coverage (Statements) | >= 90%    | 98.82%  | ✅ Pass |
| ESLint Errors              | 0         | 0       | ✅ Pass |
| ESLint Warnings            | 0         | 0       | ✅ Pass |
| Stylelint Errors           | 0         | 0       | ✅ Pass |
| TypeScript Errors          | 0         | 0       | ✅ Pass |
| Tests Passing              | 100%      | 60/60   | ✅ Pass |

### Monitoring Over Time

Track these metrics in your CI:

```bash
# Coverage trend
npm run test:coverage -- --json --outputFile=coverage-summary.json

# Bundle size
npm run build
ls -lh dist/assets/*.js

# Build time
time npm run build
```

## 🚨 Troubleshooting

### Pre-commit Hook Fails

**Symptom:** Commit is blocked after `git commit`

**Check which gate failed:**

#### If lint-staged failed:

```bash
# See specific errors
npm run lint

# Auto-fix
npm run lint:fix

# Stage fixed files
git add .

# Try again
git commit -m "feat: your message"
```

#### If tests failed:

```bash
# See which tests failed
npm test

# See coverage report
npm run test:coverage

# Fix tests, then try again
git commit -m "feat: your message"
```

### Commit-msg Hook Fails

**Symptom:** Commit rejected after entering message

**Solutions:**

```bash
# Use interactive helper
npm run commit

# Or follow format manually
git commit -m "type: description"

# Valid types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
```

### Bypass Hooks (Emergency Only)

```bash
# Skip ALL hooks (NOT RECOMMENDED)
git commit --no-verify -m "emergency fix"

# Why you shouldn't:
# - Breaks automated changelog
# - May introduce bugs
# - Bypasses coverage check
# - Others may reject your PR
```

**When it's acceptable:**

-✨ True emergency (production down)

- ⚠️ You'll fix issues immediately after
- 📢 You've notified the team

### Coverage Below 90%

**Find uncovered code:**

```bash
# Generate HTML report
npm run test:coverage

# Open report
# coverage/lcov-report/index.html

# Look for red/yellow highlights
```

**Add tests:**

```typescript
// Example: Add test for uncovered branch
describe('validateEmail', () => {
  it('should return false for invalid email', () => {
    expect(validateEmail('invalid')).toBe(false); // ← This line was red
  });
});
```

### Linting Errors Won't Fix

**Check specific linter:**

```bash
# ESLint only
npm run lint:eslint

# Stylelint only
npm run lint:stylelint

# HTMLHint only
npm run lint:html
```

**Disable rule (last resort):**

```typescript
// Disable for one line
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const data: any = fetchData();

// Disable for file (top of file)
/* eslint-disable @typescript-eslint/no-explicit-any */
```

⚠️ **Use sparingly!** Better to fix the issue than disable the rule.

## 🎯 Best Practices

### Development Workflow

```bash
# 1. Start watch mode for tests
npm run test:watch

# 2. Make changes

# 3. See tests auto-run and pass

# 4. Before committing, run full check
npm run lint && npm run type-check && npm test

# 5. Commit (hooks will run automatically)
npm run commit
```

### Maintaining High Quality

**DO:**

- ✅ Write tests as you code
- ✅ Run `npm run lint:fix` regularly
- ✅ Use `npm run commit` for valid messages
- ✅ Keep coverage above 90%
- ✅ Fix warnings immediately

**DON'T:**

- ❌ Bypass hooks without team approval
- ❌ Commit commented-out code
- ❌ Leave `console.log` statements
- ❌ Ignore TypeScript errors
- ❌ Decrease test coverage

### Pre-Commit Checklist

Before running `git commit`:

- [ ] All tests pass (`npm test`)
- [ ] No linting errors (`npm run lint`)
- [ ] TypeScript compiles (`npm run type-check`)
- [ ] Coverage >= 90% (`npm run test:coverage`)
- [ ] No `console.log` or debug code
- [ ] No commented-out code

## 📦 Configuration Files

| File                    | Purpose                     | Location                         |
| ----------------------- | --------------------------- | -------------------------------- |
| `.husky/pre-commit`     | Pre-commit hook script      | [Link](../.husky/pre-commit)     |
| `.husky/commit-msg`     | Commit message hook script  | [Link](../.husky/commit-msg)     |
| `commitlint.config.cjs` | Commit message rules        | [Link](../commitlint.config.cjs) |
| `jest.config.cjs`       | Test configuration          | [Link](../jest.config.cjs)       |
| `.eslintrc.cjs`         | ESLint rules                | [Link](../.eslintrc.cjs)         |
| `.stylelintrc.json`     | Stylelint rules             | [Link](../.stylelintrc.json)     |
| `.prettierrc.json`      | Prettier formatting         | [Link](../.prettierrc.json)      |
| `.htmlhintrc`           | HTMLHint rules              | [Link](../.htmlhintrc)           |
| `tsconfig.json`         | TypeScript compiler options | [Link](../tsconfig.json)         |
| `package.json`          | lint-staged configuration   | [Link](../package.json)          |

## ⚡ Quick Reference

### All Quality Commands

```bash
# Linting
npm run lint              # All linters
npm run lint:eslint       # ESLint only
npm run lint:stylelint    # Stylelint only
npm run lint:html         # HTMLHint only
npm run lint:fix          # Auto-fix all

# Formatting
npm run format            # Format all files
npm run format:check      # Check formatting

# Testing
npm test                  # Run tests once
npm run test:watch        # Watch mode
npm run test:coverage     # With coverage
npm run test:ci           # CI mode

# Type checking
npm run type-check        # TypeScript validation

# Building
npm run build             # Production build
npm run preview           # Preview build

# Commits
npm run commit            # Interactive commit helper

# Full quality check
npm run lint && npm run type-check && npm run test:coverage && npm run build
```

---

**Quality gates exist to help us, not hinder us.** They catch bugs early, maintain consistency, and make collaboration easier. When a gate fails, it's protecting you from future problems.

For more information:

- [Contributing Guide](../CONTRIBUTING.md)
- [Architecture Guide](ARCHITECTURE.md)
- [Testing Guide](TESTING_GUIDE.md)

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
