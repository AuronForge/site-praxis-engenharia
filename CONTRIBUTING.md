# Contributing to Praxis Engenharia

Thank you for your interest in contributing to Praxis Engenharia! This document provides guidelines and instructions for contributing.

## 🔄 Development Workflow

### 1. Setting Up Your Environment

```bash
# Clone the repository
git clone <repository-url>
cd site-praxis-engenharia

# Install dependencies
npm install

# Prepare git hooks
npm run prepare
```

### 2. Creating a Branch

```bash
# Create a new branch for your feature/fix
git checkout -b feat/your-feature-name
# or
git checkout -b fix/your-bug-fix
```

Branch naming conventions:
- `feat/` - New features
- `fix/` - Bug fixes
- `docs/` - Documentation changes
- `refactor/` - Code refactoring
- `test/` - Test additions or modifications
- `chore/` - Build process or auxiliary tool changes

### 3. Making Changes

1. Write clean, maintainable code
2. Follow the existing code style
3. Add tests for new features
4. Update documentation as needed
5. Ensure all linters pass

### 4. Testing Your Changes

```bash
# Run linters
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Run tests
npm test

# Check coverage
npm run test:coverage

# Type check
npm run type-check
```

### 5. Committing Your Changes

We use **Conventional Commits** specification. Use the interactive commit helper:

```bash
npm run commit
```

Or manually follow the format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Types:**
- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that don't affect code meaning (white-space, formatting)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `perf`: Code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Reverts a previous commit

**Examples:**

```bash
feat: add user authentication
fix: resolve navigation bug on mobile
docs: update API documentation
refactor: simplify calculation logic
test: add unit tests for Button component
```

### 6. Pre-commit Quality Gates

Before each commit, the following will run automatically:

1. **lint-staged**: Lints and formats only staged files
2. **test:ci**: Runs all tests with coverage check

If any of these fail, the commit will be blocked. Fix the issues and try again.

### 7. Submitting a Pull Request

1. Push your branch to the remote repository
2. Create a Pull Request with a clear title and description
3. Ensure all CI checks pass
4. Request review from team members
5. Address any feedback

## 📏 Code Style

### TypeScript

- Use TypeScript for all new files
- Prefer explicit return types for functions
- Avoid `any` type
- Use proper typing for React components

### React

- Use functional components with hooks
- Follow React hooks rules
- Keep components small and focused
- Use meaningful component and prop names

### CSS/SCSS

- Follow BEM or similar naming convention
- Keep styles modular and scoped
- Use variables for colors and common values

## 🧪 Testing

### Coverage Requirements

All code must maintain >= 90% coverage for:
- Branches
- Functions
- Lines
- Statements

### Writing Tests

- Write unit tests for all new features
- Test edge cases and error conditions
- Use descriptive test names
- Follow AAA pattern (Arrange, Act, Assert)

Example:

```typescript
describe('Button', () => {
  it('should render with correct text', () => {
    // Arrange
    const text = 'Click me';
    
    // Act
    render(<Button>{text}</Button>);
    
    // Assert
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
```

## 📦 Dependencies

### Adding Dependencies

Before adding a new dependency:

1. Consider if it's truly necessary
2. Check its maintenance status and popularity
3. Verify license compatibility
4. Add to appropriate section:
   - `dependencies`: Required for production
   - `devDependencies`: Development and build tools only

```bash
# Production dependency
npm install <package-name>

# Development dependency
npm install -D <package-name>
```

## 🚫 Common Pitfalls

- ❌ Committing without running tests
- ❌ Using non-conventional commit messages
- ❌ Ignoring linter warnings
- ❌ Decreasing test coverage
- ❌ Committing commented-out code
- ❌ Leaving console.log statements

## 🆘 Getting Help

If you need help:

1. Check the documentation in `/docs`
2. Review existing code for examples
3. Ask team members for guidance
4. Create an issue for discussion

## 📝 Release Process

Releases are automated using `standard-version`:

```bash
# Patch release (1.0.0 -> 1.0.1)
npm run release

# Minor release (1.0.0 -> 1.1.0)
npm run release:minor

# Major release (1.0.0 -> 2.0.0)
npm run release:major
```

This will:
1. Run tests and linters
2. Bump version in package.json
3. Generate/update CHANGELOG.md
4. Create a git tag
5. Commit the changes

Then push with tags:

```bash
git push --follow-tags origin main
```

## ✅ Checklist Before Submitting

- [ ] Code follows project style guidelines
- [ ] All tests pass
- [ ] Test coverage is >= 90%
- [ ] No linter errors or warnings
- [ ] Documentation is updated
- [ ] Commit messages follow Conventional Commits
- [ ] Branch is up to date with main
- [ ] Self-review completed

Thank you for contributing to Praxis Engenharia! 🎉
