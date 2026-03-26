# Project Setup Summary

## Installation

```bash
npm install
```

## Dependencies

### Production Dependencies

- `react@^18.3.1` - React library
- `react-dom@^18.3.1` - React DOM rendering

### Development Dependencies

#### Build Tools

- `vite@^5.0.11` - Fast build tool and dev server
- `@vitejs/plugin-react@^4.2.1` - Vite React plugin
- `typescript@^5.3.3` - TypeScript compiler
- `ts-node@^10.9.2` - TypeScript execution engine

#### TypeScript & Types

- `@types/react@^18.3.1` - React type definitions
- `@types/react-dom@^18.3.0` - React DOM type definitions
- `@types/node@^20.11.5` - Node.js type definitions
- `@types/jest@^29.5.11` - Jest type definitions

#### Linters

- `eslint@^8.56.0` - JavaScript/TypeScript linter
- `@typescript-eslint/parser@^6.19.0` - TypeScript parser for ESLint
- `@typescript-eslint/eslint-plugin@^6.19.0` - TypeScript rules for ESLint
- `eslint-plugin-react@^7.33.2` - React-specific linting rules
- `eslint-plugin-react-hooks@^4.6.0` - React hooks linting rules
- `eslint-plugin-jsx-a11y@^6.8.0` - Accessibility linting rules
- `eslint-plugin-jest@^27.6.3` - Jest linting rules
- `eslint-config-prettier@^9.1.0` - Disable ESLint rules that conflict with Prettier
- `stylelint@^16.2.0` - CSS/SCSS linter
- `stylelint-config-standard@^36.0.0` - Standard CSS rules
- `stylelint-config-standard-scss@^13.0.0` - Standard SCSS rules
- `stylelint-scss@^6.1.0` - SCSS-specific rules
- `htmlhint@^1.1.4` - HTML linter

#### Formatter

- `prettier@^3.2.4` - Code formatter

#### Git Hooks & Commits

- `husky@^8.0.3` - Git hooks manager
- `lint-staged@^15.2.0` - Run linters on staged files
- `@commitlint/cli@^18.6.0` - Commit message linter
- `@commitlint/config-conventional@^18.6.0` - Conventional commits config
- `commitizen@^4.3.0` - Interactive commit helper
- `cz-conventional-changelog@^3.3.0` - Conventional commits adapter
- `standard-version@^9.5.0` - Automated versioning and changelog

#### Testing

- `jest@^29.7.0` - Testing framework
- `ts-jest@^29.1.1` - TypeScript preprocessor for Jest
- `jest-environment-jsdom@^29.7.0` - DOM environment for Jest
- `@testing-library/react@^14.1.2` - React testing utilities
- `@testing-library/jest-dom@^6.2.0` - Custom Jest matchers for DOM
- `@testing-library/user-event@^14.5.2` - User interaction simulation
- `identity-obj-proxy@^3.0.0` - CSS modules mock for Jest

## Configuration Files

### TypeScript

- **tsconfig.json**: TypeScript compiler configuration with strict mode and path aliases

### Linters

- **.eslintrc.json**: ESLint configuration for TypeScript/React
- **.eslintignore**: Files to ignore for ESLint
- **.stylelintrc.json**: Stylelint configuration for CSS/SCSS
- **.htmlhintrc**: HTMLHint configuration for HTML files
- **commitlint.config.js**: Commitlint configuration for commit messages

### Formatter

- **.prettierrc.json**: Prettier formatting rules
- **.prettierignore**: Files to ignore for Prettier

### Editor

- **.editorconfig**: Editor configuration for consistent coding styles

### Testing

- **jest.config.js**: Jest test configuration with 90% coverage threshold
- **src/setupTests.ts**: Jest setup file

### Git Hooks

- **.husky/pre-commit**: Pre-commit hook (lint-staged + tests)
- **.husky/commit-msg**: Commit message validation hook

### Build

- **vite.config.ts**: Vite build configuration with path aliases
- **index.html**: HTML entry point
- **src/main.tsx**: Application entry point

### Versioning

- **.versionrc.json**: Standard-version configuration

### Other

- **.gitignore**: Git ignore patterns
- **package.json**: Project configuration and scripts

## Available Scripts

### Development

```bash
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build
```

### Testing

```bash
npm test                 # Run tests
npm run test:watch       # Run tests in watch mode
npm run test:coverage    # Run tests with coverage report
npm run test:ci          # Run tests in CI mode (for hooks)
```

### Linting & Formatting

```bash
npm run lint             # Run all linters
npm run lint:ts          # Run TypeScript linter
npm run lint:css         # Run CSS/SCSS linter
npm run lint:html        # Run HTML linter
npm run lint:fix         # Fix auto-fixable linting issues
npm run format           # Format all files
npm run format:check     # Check formatting without changes
npm run type-check       # Run TypeScript type checking
```

### Commits & Releases

```bash
npm run commit           # Interactive commit (recommended)
npm run release          # Create patch release
npm run release:minor    # Create minor release
npm run release:major    # Create major release
```

### Setup

```bash
npm run prepare          # Install git hooks (runs automatically after install)
```

## Quality Gates

### Pre-commit (Automated)

1. **Lint-staged**: Auto-fix and format changed files
   - ESLint with auto-fix on `.ts`, `.tsx` files
   - Stylelint with auto-fix on `.css`, `.scss` files
   - Prettier formatting on all applicable files

2. **Tests**: All tests must pass with >= 90% coverage
   - Branches: 90%
   - Functions: 90%
   - Lines: 90%
   - Statements: 90%

### Commit Message (Automated)

- **Commitlint**: Validates Conventional Commits format
- Types: feat, fix, docs, style, refactor, perf, test, build, ci, chore, revert
- Format: `type(scope): subject`

## Folder Structure

```
src/
├── pages/              # Page components (routes)
│   └── Home/
│       ├── Home.tsx
│       ├── Home.test.tsx
│       ├── Home.module.scss
│       └── index.ts
├── core/               # Core business logic
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── hooks/          # Custom React hooks
│   └── constants/      # Application constants
├── ui-components/      # Reusable UI components
│   └── Button/
│       ├── Button.tsx
│       ├── Button.test.tsx
│       ├── Button.module.scss
│       └── index.ts
└── services/           # External services & API
    └── api/
        ├── client.ts
        └── client.test.ts
```

## Path Aliases

The following path aliases are configured:

- `@pages/*` → `src/pages/*`
- `@core/*` → `src/core/*`
- `@ui-components/*` → `src/ui-components/*`
- `@services/*` → `src/services/*`

Example usage:

```typescript
import { Button } from '@ui-components/Button';
import { validateEmail } from '@core/utils/validation';
import { apiClient } from '@services/api/client';
```

## Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Run tests**:

   ```bash
   npm test
   ```

4. **Make a commit**:

   ```bash
   npm run commit
   ```

5. **Create a release**:
   ```bash
   npm run release
   ```

## Additional Resources

- [README.md](README.md) - General project information
- [CONTRIBUTING.md](CONTRIBUTING.md) - Contribution guidelines
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - Architecture details
- [docs/QUALITY_GATES.md](docs/QUALITY_GATES.md) - Quality gates documentation
