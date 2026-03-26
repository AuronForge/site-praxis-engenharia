# ESLint Configuration for React + TypeScript

Complete ESLint setup for a React + TypeScript project with comprehensive linting rules.

## Configuration File

**`.eslintrc.cjs`** - CommonJS format for maximum compatibility

## Parser & Plugins

### Parser

- `@typescript-eslint/parser` - Parses TypeScript code for ESLint

### Plugins

- `@typescript-eslint` - TypeScript-specific linting rules
- `react` - React-specific linting rules
- `react-hooks` - React Hooks linting rules
- `import` - Import/export syntax validation and organization

## Extended Configurations

The configuration extends the following presets:

- `eslint:recommended` - ESLint's recommended rules
- `plugin:@typescript-eslint/recommended` - TypeScript recommended rules
- `plugin:@typescript-eslint/recommended-requiring-type-checking` - Type-aware TypeScript rules
- `plugin:react/recommended` - React recommended rules
- `plugin:react/jsx-runtime` - React 17+ JSX transform
- `plugin:react-hooks/recommended` - React Hooks recommended rules
- `plugin:import/recommended` - Import plugin recommended rules
- `plugin:import/typescript` - TypeScript-specific import rules
- `prettier` - Disables ESLint rules that conflict with Prettier

## Key Rules

### TypeScript Rules

- **`@typescript-eslint/no-unused-vars`**: Error on unused variables, but ignores arguments starting with `_`

  ```typescript
  // ✅ Valid
  function example(_unusedArg: string, usedArg: number) {
    return usedArg * 2;
  }

  // ❌ Invalid
  function example(unusedArg: string, usedArg: number) {
    return usedArg * 2;
  }
  ```

- **`@typescript-eslint/explicit-function-return-type`**: Requires explicit return types
- **`@typescript-eslint/no-explicit-any`**: Disallows `any` type
- **`@typescript-eslint/prefer-nullish-coalescing`**: Prefers `??` over `||`
- **`@typescript-eslint/prefer-optional-chain`**: Prefers optional chaining `?.`

### React Rules

- **`react/react-in-jsx-scope`**: OFF - Not needed with React 17+ JSX transform
- **`react/prop-types`**: OFF - Using TypeScript for type checking

### Import Rules

- **`import/order`**: Enforces consistent import order with blank lines between groups

  ```typescript
  // ✅ Valid
  import React from 'react';

  import { something } from 'external-library';

  import { InternalComponent } from '@/components';

  import { localUtil } from './utils';

  import type { MyType } from './types';

  // ❌ Invalid (no blank lines between groups)
  import React from 'react';
  import { something } from 'external-library';
  import { InternalComponent } from '@/components';
  ```

  **Import groups order:**
  1. Built-in Node.js modules
  2. External libraries (React first)
  3. Internal modules (@/...)
  4. Parent/sibling imports
  5. Index imports
  6. Type imports

  **Settings:**
  - `newlines-between: 'always'` - Requires blank lines between groups
  - `alphabetize: { order: 'asc' }` - Sorts imports alphabetically

- **`import/no-unresolved`**: Ensures imports point to existing files
- **`import/no-duplicates`**: Prevents duplicate imports
- **`import/no-cycle`**: Warns about circular dependencies
- **`import/newline-after-import`**: Requires blank line after imports

## Lint Commands

### Check all files

```bash
npm run lint:eslint
# or
eslint "src/**/*.{ts,tsx,js,jsx}" --max-warnings=0
```

### Auto-fix issues

```bash
npm run lint:fix
# or
eslint "src/**/*.{ts,tsx,js,jsx}" --fix
```

### Check specific file

```bash
eslint src/components/Button.tsx
```

### Check with specific extensions

```bash
# TypeScript only
eslint "src/**/*.{ts,tsx}"

# JavaScript only
eslint "src/**/*.{js,jsx}"

# All supported extensions
eslint "src/**/*.{ts,tsx,js,jsx}"
```

## Package.json Scripts

```json
{
  "scripts": {
    "lint": "npm run lint:eslint && npm run lint:stylelint && npm run lint:html",
    "lint:eslint": "eslint \"src/**/*.{ts,tsx,js,jsx}\" --max-warnings=0",
    "lint:fix": "npm run lint:eslint -- --fix && npm run lint:stylelint -- --fix"
  }
}
```

## Required Dependencies

### Production

```bash
npm install react react-dom
```

### Development

```bash
npm install -D \
  eslint \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  eslint-plugin-react \
  eslint-plugin-react-hooks \
  eslint-plugin-import \
  eslint-config-prettier \
  prettier \
  typescript
```

## Integration with Other Tools

### Prettier Integration

The configuration includes `prettier` in extends to disable conflicting rules. Make sure to run Prettier after ESLint:

```bash
eslint "src/**/*.{ts,tsx,js,jsx}" --fix && prettier --write "src/**/*.{ts,tsx,js,jsx}"
```

### Git Hooks (Husky + lint-staged)

```json
{
  "lint-staged": {
    "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

### VS Code Integration

Add to `.vscode/settings.json`:

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.validate": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```

## Import Resolver Settings

The configuration includes TypeScript path resolution:

```javascript
settings: {
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true,
      project: './tsconfig.json',
    },
    node: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
}
```

This allows ESLint to understand TypeScript path mappings defined in `tsconfig.json`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@components/*": ["src/components/*"]
    }
  }
}
```

## Ignored Patterns

The following patterns are ignored by ESLint:

- `dist/` - Build output
- `build/` - Build output
- `node_modules/` - Dependencies
- `coverage/` - Test coverage reports
- `*.config.js` - Configuration files
- `*.config.ts` - Configuration files
- `vite.config.ts` - Vite configuration

## Example File with Proper Imports

```typescript
// src/components/Button/Button.tsx
import React from 'react';

import { clsx } from 'clsx';

import { useTheme } from '@/hooks/useTheme';
import { ButtonVariant } from '@/types/components';

import { StyledButton } from './Button.styles';

import type { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {
  const theme = useTheme();

  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};
```

## Troubleshooting

### "Cannot find module" errors

If you get import resolution errors, make sure:

1. `tsconfig.json` exists and is properly configured
2. Path aliases in `tsconfig.json` match the import paths
3. The `import/resolver` settings in `.eslintrc.cjs` point to the correct `tsconfig.json`

### Performance issues

For large projects, you can:

1. Use `.eslintignore` to exclude unnecessary directories
2. Run ESLint only on changed files in CI/CD
3. Use `--cache` flag: `eslint --cache "src/**/*.{ts,tsx}"`

### Conflicting rules with Prettier

Make sure `prettier` is the last item in the `extends` array to properly override conflicting rules.

## References

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [typescript-eslint](https://typescript-eslint.io/)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react)
- [eslint-plugin-import](https://github.com/import-js/eslint-plugin-import)
