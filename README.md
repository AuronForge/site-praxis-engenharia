# Praxis Engenharia

> A modern React + TypeScript application with enterprise-grade tooling and automated quality gates.

[![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-18.3-61dafb)](https://reactjs.org/)
[![Test Coverage](https://img.shields.io/badge/coverage-98%25-brightgreen)](https://jestjs.io/)
[![Code Style](https://img.shields.io/badge/code%20style-prettier-ff69b4)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow)](https://conventionalcommits.org)

## 🚀 Features

- ⚛️ **React 18.3** with TypeScript 5.3
- ⚡ **Vite 5** for lightning-fast development
- 🎨 **SCSS Modules** with Stylelint validation
- 🧪 **Jest** testing with 90%+ coverage requirement
- 📝 **ESLint** + **Prettier** for code quality
- 🔧 **Conventional Commits** with automated validation
- 🪝 **Husky Git Hooks** preventing bad commits
- 📦 **Automated Releases** with changelog generation
- 🎯 **Path Aliases** for clean imports (@pages, @core, etc.)

## 📋 Prerequisites

Before you begin, ensure you have:

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git** >= 2.0.0

Check your versions:

```bash
node --version  # v18.0.0+
npm --version   # 9.0.0+
git --version   # 2.0.0+
```

## 🛠️ Quick Start

### 1. Clone and Install

```bash
# Clone the repository
git clone <repository-url>
cd site-praxis-engenharia

# Install dependencies
npm install

# Initialize git hooks (runs automatically after npm install)
npm run prepare
```

### 2. Start Development

```bash
# Start development server (http://localhost:4200)
npm run dev
```

### 3. Verify Setup

```bash
# Run all quality checks
npm run lint        # Lint all files
npm test            # Run tests
npm run type-check  # TypeScript validation
```

If all commands pass, you're ready to develop! 🎉

## 📜 Available Scripts

### Development

| Command              | Description                               |
| -------------------- | ----------------------------------------- |
| `npm run dev`        | Start dev server at http://localhost:4200 |
| `npm run build`      | Build for production (output in `dist/`)  |
| `npm run preview`    | Preview production build locally          |
| `npm run type-check` | Run TypeScript compiler checks            |

### Testing

| Command                 | Description                                |
| ----------------------- | ------------------------------------------ |
| `npm test`              | Run all tests                              |
| `npm run test:watch`    | Run tests in watch mode                    |
| `npm run test:coverage` | Run tests with coverage report             |
| `npm run test:ci`       | Run tests in CI mode (2 workers, coverage) |

Coverage reports are generated in `coverage/lcov-report/index.html`

### Code Quality

| Command                  | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `npm run lint`           | Run ALL linters (ESLint + Stylelint + HTMLHint) |
| `npm run lint:eslint`    | Lint TypeScript/React files                     |
| `npm run lint:stylelint` | Lint CSS/SCSS files                             |
| `npm run lint:html`      | Lint HTML files                                 |
| `npm run lint:fix`       | Auto-fix linting issues                         |
| `npm run format`         | Format all files with Prettier                  |
| `npm run format:check`   | Check if files are formatted                    |

### Git & Releases

| Command                 | Description                                  |
| ----------------------- | -------------------------------------------- |
| `npm run commit`        | Interactive commit with Conventional Commits |
| `npm run release`       | Create new release (auto-version)            |
| `npm run release:minor` | Force minor version bump                     |
| `npm run release:major` | Force major version bump                     |

## 📝 Commit Guidelines (Conventional Commits)

This project enforces **Conventional Commits** specification. All commits must follow this format:

### Format

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Commit Types

| Type       | Description                  | Version Impact |
| ---------- | ---------------------------- | -------------- |
| `feat`     | New feature                  | Minor (1.x.0)  |
| `fix`      | Bug fix                      | Patch (1.0.x)  |
| `docs`     | Documentation changes        | None           |
| `style`    | Code style (formatting, etc) | None           |
| `refactor` | Code refactoring             | None           |
| `perf`     | Performance improvement      | Patch          |
| `test`     | Test changes                 | None           |
| `build`    | Build system changes         | None           |
| `ci`       | CI configuration changes     | None           |
| `chore`    | Other changes (configs, etc) | None           |
| `revert`   | Revert previous commit       | Depends        |

### Breaking Changes

To trigger a **MAJOR** version bump (x.0.0):

```bash
# Option 1: Exclamation mark
git commit -m "feat!: redesign API authentication"

# Option 2: BREAKING CHANGE footer
git commit -m "feat: redesign authentication

BREAKING CHANGE: Authentication now requires OAuth2 tokens.
Session-based auth is no longer supported."
```

### Good Commit Examples

```bash
# Feature
feat: add user profile page
feat(auth): implement password reset

# Bug fix
fix: resolve navigation bug on mobile
fix(api): handle timeout errors properly

# Documentation
docs: update installation instructions
docs(readme): add deployment section

# Refactoring
refactor: simplify validation logic
refactor(utils): extract date formatting

# Performance
perf: optimize image loading
perf(dashboard): reduce re-renders

# Tests
test: add Button component tests
test(validation): add edge cases
```

### Bad Commit Examples ❌

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
```

### Using Interactive Commit

The easiest way to create valid commits:

```bash
npm run commit
```

This launches an interactive CLI that guides you through creating a properly formatted commit.

## 🎯 Quality Gates

All commits are automatically validated through git hooks:

### Pre-Commit Hook

**What runs:**

1. **lint-staged** - Lints and formats only staged files:
   - `*.{ts,tsx,js,jsx}` → ESLint --fix + Prettier
   - `*.{css,scss}` → Stylelint --fix + Prettier
   - `*.{md,json,yml,yaml}` → Prettier

2. **npm run test:ci** - Runs full test suite with coverage

**Why tests run AFTER lint-staged:**

Linting can modify files (auto-fix). We must test the modified code, not the original.

### Commit-Msg Hook

**What runs:**

- **commitlint** - Validates commit message format

**Why it blocks:**

Invalid commit messages break:

- Automated changelog generation
- Semantic versioning
- Git history clarity

### CI/CD (Recommended)

On pull requests and main branch, run:

```bash
npm run lint          # All linters
npm run type-check    # TypeScript validation
npm run test:ci       # Tests with coverage
npm run build         # Production build
```

See [docs/QUALITY_GATES.md](docs/QUALITY_GATES.md) for details.

## 🔄 Release Process

This project uses **standard-version** for automated releases.

### How It Works

1. Analyzes commits since last release
2. Determines version bump (MAJOR/MINOR/PATCH)
3. Updates `package.json` version
4. Generates/updates `CHANGELOG.md`
5. Creates release commit and git tag

### Creating a Release

```bash
# Automatic version (recommended)
npm run release

# Manual version
npm run release:minor  # 1.0.0 → 1.1.0
npm run release:major  # 1.0.0 → 2.0.0
```

### What Happens

```bash
$ npm run release

✔ Running prerelease hook (lint + tests)
✔ Analyzing commits...
  - 3 feat commits → MINOR bump
  - 2 fix commits  → Already covered by MINOR
✔ Bumping version: 1.0.0 → 1.1.0
✔ Updated package.json
✔ Generated CHANGELOG.md
✔ Created commit: chore(release): 1.1.0
✔ Created tag: v1.1.0

✓ Run: git push --follow-tags origin main
```

### Publishing

```bash
git push --follow-tags origin main
```

**First release:**

```bash
npx standard-version --first-release
```

**Dry run (preview without changes):**

```bash
npx standard-version --dry-run
```

See [CHANGELOG.md](CHANGELOG.md) for version history.

## 📁 Project Structure

```
src/
├── pages/              # Application pages/routes
│   ├── Home/
│   │   ├── Home.tsx           # Page component
│   │   ├── Home.test.tsx      # Tests
│   │   ├── Home.module.scss   # Styles
│   │   └── index.ts           # Barrel export
│   └── ...
│
├── core/               # Core business logic
│   ├── types/          # TypeScript types
│   │   ├── user.types.ts
│   │   └── api.types.ts
│   ├── utils/          # Pure utility functions
│   │   ├── validation.ts
│   │   ├── validation.test.ts
│   │   └── date.ts
│   ├── hooks/          # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── useApi.ts
│   └── constants/      # App-wide constants
│       └── app.constants.ts
│
├── ui-components/      # Reusable UI components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.module.scss
│   │   └── index.ts
│   ├── Input/
│   └── Card/
│
├── services/           # External services & API
│   ├── api/
│   │   ├── client.ts          # HTTP client
│   │   ├── client.test.ts
│   │   └── endpoints.ts       # API endpoints
│   └── auth/
│       └── authService.ts
│
├── App.tsx             # Root component
├── App.test.tsx
├── main.tsx            # Application entry point
└── setupTests.ts       # Test configuration
```

### Import Aliases

Clean imports using path aliases:

```typescript
// ❌ Bad - Relative paths
import { Button } from '../../../ui-components/Button';
import { validateEmail } from '../../core/utils/validation';

// ✅ Good - Path aliases
import { Button } from '@ui-components/Button';
import { validateEmail } from '@core/utils/validation';
```

**Available aliases:**

- `@pages/*` → `src/pages/*`
- `@core/*` → `src/core/*`
- `@ui-components/*` → `src/ui-components/*`
- `@services/*` → `src/services/*`

## 🏗️ Architecture Rules

1. **Components don't fetch data directly**
   - Use service layer (`@services/api`)
   - Components consume hooks or props

2. **Business logic in `core/`**
   - Keep components thin
   - Reusable logic goes to `core/utils` or `core/hooks`

3. **UI components are presentational**
   - Accept props, render UI
   - No API calls, minimal state
   - Maximum reusability

4. **Pages orchestrate**
   - Compose UI components
   - Fetch data via services/hooks
   - Handle page-level state

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for details.

## 📖 Documentation

- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute
- **[docs/ARCHITECTURE.md](docs/ARCHITECTURE.md)** - Architecture guide
- **[docs/QUALITY_GATES.md](docs/QUALITY_GATES.md)** - Quality gates details
- **[docs/TESTING_GUIDE.md](docs/TESTING_GUIDE.md)** - Testing best practices
- **[CHANGELOG.md](CHANGELOG.md)** - Version history

## 🤝 Contributing

We welcome contributions! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting pull requests.

Quick checklist:

- ✅ Follow Conventional Commits
- ✅ Write tests (maintain 90% coverage)
- ✅ Pass all linters
- ✅ Update documentation
- ✅ Create feature branch

## 📄 License

This project is private and proprietary to Praxis Engenharia.

## 🆘 Troubleshooting

### Git hooks not working?

```bash
npm run prepare
```

### Tests failing?

```bash
# Clear cache
npx jest --clearCache

# Run tests in verbose mode
npm test -- --verbose
```

### Linting issues?

```bash
# Auto-fix most issues
npm run lint:fix

# Format all files
npm run format
```

### Coverage below 90%?

```bash
# Check coverage report
npm run test:coverage

# Open HTML report
# Open: coverage/lcov-report/index.html
```

---

**Built with ❤️ by Praxis Engenharia**
