# Praxis Engenharia

A modern React + TypeScript application with industry-standard tooling and quality gates.

## 🚀 Features

- ⚛️ **React 18** with TypeScript
- 🎨 **CSS/SCSS** support with Stylelint
- 🧪 **Jest** testing with 90% coverage requirement
- 📝 **ESLint** for TypeScript/React
- 💅 **Prettier** for code formatting
- 🔧 **Conventional Commits** with validation
- 🪝 **Husky** git hooks for quality enforcement
- 📦 **Vite** for fast development and building
- 🔄 **Automated releases** with standard-version

## 📋 Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

## 🛠️ Installation

```bash
# Clone the repository
git clone <repository-url>
cd site-praxis-engenharia

# Install dependencies
npm install

# Prepare git hooks
npm run prepare
```

## 🏃 Usage

### Development

```bash
# Start development server
npm run dev
```

### Building

```bash
# Type check
npm run type-check

# Build for production
npm run build

# Preview production build
npm run preview
```

### Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage

# Run tests in CI mode
npm run test:ci
```

### Linting & Formatting

```bash
# Run all linters
npm run lint

# Run TypeScript linter
npm run lint:ts

# Run CSS linter
npm run lint:css

# Run HTML linter
npm run lint:html

# Fix auto-fixable issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check
```

### Commits

```bash
# Interactive commit (recommended)
npm run commit

# Or use conventional commit format manually
git commit -m "feat: add new feature"
git commit -m "fix: resolve bug"
git commit -m "docs: update readme"
```

### Versioning & Releases

This project uses **Semantic Versioning** (SemVer) with automated releases via **standard-version**.

#### Understanding Semantic Versioning

Version format: `MAJOR.MINOR.PATCH` (e.g., `1.2.3`)

- **MAJOR** (1.x.x): Breaking changes - incompatible API changes
- **MINOR** (x.2.x): New features - backwards-compatible functionality
- **PATCH** (x.x.3): Bug fixes - backwards-compatible fixes

#### How Conventional Commits Drive Versioning

The version bump is **automatically determined** from your commit messages:

| Commit Type                  | Version Bump | Example           |
| ---------------------------- | ------------ | ----------------- |
| `fix:`                       | **PATCH**    | `1.0.0` → `1.0.1` |
| `feat:`                      | **MINOR**    | `1.0.0` → `1.1.0` |
| `BREAKING CHANGE:` in footer | **MAJOR**    | `1.0.0` → `2.0.0` |
| `feat!:` or `fix!:`          | **MAJOR**    | `1.0.0` → `2.0.0` |

**Example:**

```bash
# Commits since last release:
git log --oneline
a1b2c3d feat: add user profile page           # → MINOR bump
d4e5f6g fix: resolve login redirect issue     # → PATCH bump
g7h8i9j docs: update API documentation        # → No bump (docs)
j0k1l2m chore: update dependencies            # → No bump (chore)

# Running release will bump MINOR version (feat takes precedence)
npm run release  # 1.0.0 → 1.1.0
```

#### Creating a Release

**Automatic version bump (recommended):**

```bash
# Analyzes commits and determines version automatically
npm run release
```

This will:

1. ✅ Run `npm run lint` (verify code quality)
2. ✅ Run `npm run test:ci` (verify all tests pass)
3. ✅ Analyze commits since last tag
4. ✅ Determine version bump (MAJOR/MINOR/PATCH)
5. ✅ Update `package.json` version
6. ✅ Generate/update `CHANGELOG.md`
7. ✅ Create git commit: `chore(release): x.y.z`
8. ✅ Create git tag: `vx.y.z`

**Manual version specification:**

```bash
# Force a minor release (1.0.0 → 1.1.0)
npm run release:minor

# Force a major release (1.0.0 → 2.0.0)
npm run release:major

# Create a pre-release (1.0.0 → 1.0.1-0)
npx standard-version --prerelease

# Create a named pre-release (1.0.0 → 1.0.1-alpha.0)
npx standard-version --prerelease alpha
```

#### Publishing the Release

After creating the release, push to remote:

```bash
# Push commits and tags
git push --follow-tags origin main

# Or push separately
git push origin main
git push origin --tags
```

#### CHANGELOG.md Generation

The `CHANGELOG.md` is automatically generated from commit messages:

**Included in changelog:**

- ✅ `feat:` commits → **✨ Features** section
- ✅ `fix:` commits → **🐛 Bug Fixes** section
- ✅ `perf:` commits → **⚡ Performance Improvements** section
- ✅ `docs:` commits → **📝 Documentation** section
- ✅ `refactor:` commits → **♻️ Code Refactoring** section

**Excluded from changelog:**

- ❌ `chore:` commits (maintenance, configs)
- ❌ `test:` commits (test additions/changes)
- ❌ `style:` commits (formatting changes)
- ❌ `build:` commits (build system changes)
- ❌ `ci:` commits (CI configuration)

**Configuration:** See [.versionrc.json](.versionrc.json)

#### Breaking Changes

To trigger a **MAJOR** version bump, use one of these formats:

**Option 1: Exclamation mark notation**

```bash
git commit -m "feat!: redesign authentication system"
# or
git commit -m "fix!: change API response format"
```

**Option 2: BREAKING CHANGE footer**

```bash
git commit -m "feat: redesign authentication system

BREAKING CHANGE: Authentication now requires OAuth2 instead of session cookies.
Clients must update their authentication flow."
```

**Both will:**

- Bump MAJOR version (1.x.x → 2.0.0)
- Add "BREAKING CHANGES" section to CHANGELOG.md
- Clearly highlight the breaking change for users

#### Example Workflow

```bash
# 1. Make changes and commit using conventional commits
git add .
npm run commit  # Interactive commit helper

# or manually:
git commit -m "feat: add dark mode toggle"
git commit -m "fix: resolve mobile menu overflow"
git commit -m "docs: update installation guide"

# 2. When ready to release
npm run release

# Output:
# ✔ Linting passed
# ✔ Tests passed (60/60)
# ✔ bumping version in package.json from 1.0.0 to 1.1.0
# ✔ created CHANGELOG.md
# ✔ committed changes
# ✔ tagged release v1.1.0

# 3. Push to remote
git push --follow-tags origin main

# 4. Done! Version 1.1.0 is released 🎉
```

#### First Release

For the very first release of the project:

```bash
# Initialize with version 1.0.0
npx standard-version --first-release

# Or specify initial version
npx standard-version --first-release --release-as 1.0.0
```

#### Dry Run

Test what would happen without making changes:

```bash
npx standard-version --dry-run
```

This shows:

- Version bump that would occur
- CHANGELOG.md changes
- Without modifying any files

#### Best Practices

1. **Always use conventional commits** - Version bumps depend on them
2. **Run tests before release** - Pre-release hook ensures quality
3. **Review CHANGELOG** - Check generated changelog before pushing
4. **Use semantic versioning correctly**:
   - PATCH: Bug fixes, minor improvements
   - MINOR: New features, backwards-compatible
   - MAJOR: Breaking changes, API redesigns
5. **Document breaking changes** - Always explain BREAKING CHANGES in detail
6. **Push tags** - Don't forget `--follow-tags` or `--tags`

## 📁 Project Structure

```
src/
├── pages/           # Page components
├── core/            # Core business logic, utilities, types
├── ui-components/   # Reusable UI components
└── services/        # API services and external integrations
```

## 🎯 Quality Gates

All commits must pass the following quality gates:

1. **Lint-staged**: Auto-fix and format changed files
2. **Tests**: All tests must pass with >= 90% coverage
3. **Commit message**: Must follow Conventional Commits format

See [QUALITY_GATES.md](docs/QUALITY_GATES.md) for details.

## 🤝 Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## 📖 Documentation

- [Architecture](docs/ARCHITECTURE.md)
- [Quality Gates](docs/QUALITY_GATES.md)
- [Contributing](CONTRIBUTING.md)

## 📄 License

This project is private and proprietary to Praxis Engenharia.
