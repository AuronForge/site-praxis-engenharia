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

### Releases

```bash
# Create a new patch release
npm run release

# Create a minor release
npm run release:minor

# Create a major release
npm run release:major
```

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
