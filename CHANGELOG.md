# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Centralized Footer configuration with `footerData.ts` for consistent layout across all pages
- Shared component data configs documentation pattern in ARCHITECTURE.md
- Comprehensive TESTING_GUIDE.md with testing patterns, best practices, and examples
- Documentation board in docs/README.md showing status of all documentation topics
- ESLINT_CONFIG.md in docs/ folder with ESLint setup details
- SETUP.md in docs/ folder with comprehensive setup and installation guide

### Changed
- Updated README.md with "Shared Data Configs" section explaining Footer centralization pattern
- Updated README.md with "Application Pages" table documenting all 7 routes
- Updated README.md with "Best Practices & Conventions" section (file naming, component structure, testing patterns, TypeScript best practices, commit checklist)
- Enhanced README.md "Code Style & Quality" section with ESLint, Stylelint, and Prettier details
- Refactored all 7 pages (Home, Acreditacao, Carreiras, EngenhariaClinica, PlanejamentoTecnologico, SobreNos, Contato) to use centralized `defaultFooterData` from Footer component
- Updated ARCHITECTURE.md with "Shared Component Data Configs" section and usage examples
- Complete rewrite of TESTING_GUIDE.md (previously mixed Portuguese/English, now comprehensive English documentation)
- Reorganized documentation by moving ESLINT_CONFIG.md from root to docs/ folder
- Reorganized documentation by moving SETUP.md from root to docs/ folder
- Updated docs/README.md with section describing ESLINT_CONFIG.md
- Updated docs/README.md with section describing SETUP.md
- Updated docs/README.md Documentation Board table to include ESLint Configuration and Project Setup entries

### Deprecated
- ESLINT_CONFIG.md in root directory (moved to docs/ESLINT_CONFIG.md)
- SETUP.md in root directory (moved to docs/SETUP.md)

### Removed
- Duplicate footerData configurations from all 7 page components
- Mixed language content from TESTING_GUIDE.md (now English-only)

### Fixed
- N/A

### Security
- N/A
