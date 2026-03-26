# Documentation

This folder contains comprehensive documentation for the Praxis Engenharia project.

## 📚 Available Documentation

### [ARCHITECTURE.md](ARCHITECTURE.md)

Detailed architecture and patterns including:

- **Layered architecture pattern** with Pages, UI Components, Core, and Services layers
- **Folder structure** and organization
- **Module responsibilities** and data flow
- **Dependency rules** and constraints
- **Shared component data configs** (centralized configs, Footer example)
- **Best practices** for organizing code

**Key sections:**

- Separation of concerns and dependency injection
- Type safety approach
- Reusability patterns
- Real-world component examples

### [QUALITY_GATES.md](QUALITY_GATES.md)

Quality enforcement and testing standards:

- **Pre-commit gates**: lint-staged, Jest tests
- **Commit-msg gates**: CommitLint validation
- **CI/CD pipeline**: GitHub Actions example
- **Coverage requirements**: 90% minimum threshold
- **Quality metrics** and current status
- **Troubleshooting** tips

**Key sections:**

- Why tests run AFTER linting
- Conventional Commits specification
- Complete CI/CD workflow example
- Quality metrics dashboard

### [TESTING_GUIDE.md](TESTING_GUIDE.md)

Testing patterns, best practices, and examples:

- **Coverage requirements**: 90% minimum across all metrics
- **Test structure** for UI components
- **Testing patterns**: Rendering, interactions, states, accessibility
- **Best practices**: Behavior vs implementation, semantic queries
- **Common issues** and solutions
- **Resources** for further learning

**Key sections:**

- Anatomy of a component test
- Semantic query priority
- Testing user interactions properly
- Accessibility testing practices
- How to achieve 90% coverage

### [ESLINT_CONFIG.md](ESLINT_CONFIG.md)

ESLint configuration and linting rules:

- **Parser and plugins** setup for TypeScript and React
- **Key linting rules** with examples
- **Import organization** with proper grouping
- **Integration** with Prettier, Husky, and VS Code
- **Troubleshooting** common linting issues
- **Commands** for checking and fixing code

**Key sections:**

- TypeScript and React-specific rules
- Import order enforcement
- Path resolution and alias setup
- Performance optimization tips
- VS Code integration

### [SETUP.md](SETUP.md)

Complete setup and installation guide:

- **Installation** and dependency management
- **Configuration files** overview (TypeScript, ESLint, Prettier, etc.)
- **Available scripts** for development, testing, and releases
- **Quality gates** explanation (pre-commit and commit message).
- **Folder structure** and path aliases
- **Getting started** steps and quick reference

**Key sections:**

- Production and development dependencies
- All available npm scripts
- Pre-commit and commit message validation
- Path alias configuration and usage
- Initial setup workflow

## 🔗 Related Documentation

- [Main README](../README.md) - Getting started, scripts, project overview
- [Contributing Guide](../CONTRIBUTING.md) - How to contribute to the project
- [Changelog](../CHANGELOG.md) - Version history and releases

## ✅ Documentation Standards

When adding or modifying documentation:

1. **Use clear, concise language** - Avoid jargon or explain when necessary
2. **Include code examples** - Show patterns and anti-patterns
3. **Keep it up to date** - Update docs when code changes
4. **Use proper Markdown** - Consistent formatting and structure
5. **Cross-reference** - Link to related documentation
6. **Test examples** - Ensure code samples actually work

## 🆘 Getting Help

**Can't find what you're looking for?**

1. Check the [main README](../README.md) for project overview
2. Review [CONTRIBUTING.md](../CONTRIBUTING.md) for contribution guidelines
3. Look at existing code in `src/` for real examples
4. Search for similar patterns in the codebase
5. Ask team members

## 📝 Documentation Board

| Topic                | Location                                               | Status      |
| -------------------- | ------------------------------------------------------ | ----------- |
| Getting Started      | [README.md](../README.md#-quick-start)                 | ✅ Complete |
| Project Setup        | [SETUP.md](SETUP.md)                                   | ✅ Complete |
| Project Structure    | [README.md](../README.md#-project-structure)           | ✅ Complete |
| Architecture         | [ARCHITECTURE.md](ARCHITECTURE.md)                     | ✅ Complete |
| Quality Gates        | [QUALITY_GATES.md](QUALITY_GATES.md)                   | ✅ Complete |
| Testing              | [TESTING_GUIDE.md](TESTING_GUIDE.md)                   | ✅ Complete |
| ESLint Configuration | [ESLINT_CONFIG.md](ESLINT_CONFIG.md)                   | ✅ Complete |
| Contributing         | [CONTRIBUTING.md](../CONTRIBUTING.md)                  | ✅ Complete |
| Best Practices       | [README.md](../README.md#-best-practices--conventions) | ✅ Complete |
| Deployment           | [README.md](../README.md#-deploy-no-vercel)            | ✅ Complete |
