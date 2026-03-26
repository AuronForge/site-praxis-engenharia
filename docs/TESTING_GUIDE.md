# Testing Guide

> Testing best practices, patterns, and examples for the Praxis Engenharia project.

## 📋 Table of Contents

- [Overview](#-overview)
- [Coverage Requirements](#-coverage-requirements)
- [Test Structure](#-test-structure)
- [Testing Patterns](#-testing-patterns)
- [Best Practices](#-best-practices)
- [Common Issues](#-common-issues)

## 🎯 Overview

This project enforces **90% test coverage minimum**. Testing is not optional—it's part of the quality gates.

**Why 90%?**

- Catches bugs before production
- Documents intended behavior
- Enables confident refactoring
- Reduces maintenance cost

**Coverage is measured by:**

- 📊 **Statements**: % of code statements executed
- 🔀 **Branches**: % of conditional branches tested
- ✅ **Functions**: % of all functions called
- 📍 **Lines**: % of all lines executed

**Current Status:**

| Metric              | Threshold | Current |
| ------------------- | --------- | ------- |
| Statements coverage | >= 90%    | 98.82%  |
| Branch coverage     | >= 90%    | 95.45%  |
| Function coverage   | >= 90%    | 95.23%  |
| Line coverage       | >= 90%    | 100%    |

See [jest.config.cjs](../jest.config.cjs) for configuration.

## 📁 Test Structure for UI Components

```
src/ui-components/
├── Button/
│   ├── Button.tsx              # Component
│   ├── Button.test.tsx         # Tests
│   ├── Button.module.scss      # Styles
│   └── index.ts                # Barrel export
├── Input/
│   ├── Input.tsx
│   ├── Input.test.tsx
│   ├── Input.module.scss
│   └── index.ts
└── Card/
    ├── Card.tsx
    ├── Card.test.tsx
    ├── Card.module.scss
    └── index.ts
```

## 🧪 Testing Patterns

### 1. Component Test Structure

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName, ComponentProps } from './ComponentName';

describe('ComponentName', () => {
  // Default props for reuse
  const defaultProps: ComponentProps = {
    // ...props
  };

  // Helper to render with default props
  const renderComponent = (props: Partial<ComponentProps> = {}) => {
    return render(<ComponentName {...defaultProps} {...props} />);
  };

  describe('Rendering', () => {
    it('should render with correct content', () => {
      // Arrange, Act, Assert
    });
  });

  describe('Interactions', () => {
    it('should handle user interactions', () => {
      // Test user events
    });
  });

  describe('States', () => {
    it('should handle different states', () => {
      // Test component states
    });
  });

  describe('Accessibility', () => {
    it('should be accessible', () => {
      // Test a11y
    });
  });
});
```

### 2. Rendering Tests

Verify the component renders correctly.

```typescript
describe('Rendering', () => {
  it('should render with correct text', () => {
    renderComponent({ children: 'Click me' });
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should render without failing', () => {
    const { container } = renderComponent();
    expect(container).toBeInTheDocument();
  });

  it('should apply correct className', () => {
    renderComponent({ className: 'custom' });
    const element = screen.getByTestId('component');
    expect(element).toHaveClass('custom');
  });
});
```

### 3. Variant Tests

Verify different visual variations.

```typescript
describe('Variants', () => {
  it('should render primary variant by default', () => {
    renderComponent();
    expect(screen.getByTestId('button')).toHaveClass('button--primary');
  });

  it('should render secondary variant', () => {
    renderComponent({ variant: 'secondary' });
    expect(screen.getByTestId('button')).toHaveClass('button--secondary');
  });

  it('should render outline variant', () => {
    renderComponent({ variant: 'outline' });
    expect(screen.getByTestId('button')).toHaveClass('button--outline');
  });
});
```

### 4. Interaction Tests

Verify user interactions work correctly.

```typescript
describe('Interactions', () => {
  it('should call onClick handler', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);

    screen.getByText('Click').click();

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled prop is true', () => {
    render(<Button label="Click" disabled />);

    expect(screen.getByRole('button')).toBeDisabled();
  });
});
```

### 5. State Tests

Verify component state management.

```typescript
describe('States', () => {
  it('should show loading state', () => {
    renderComponent({ loading: true });
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should show error state', () => {
    renderComponent({ error: 'Something went wrong' });
    expect(screen.getByText('Something went wrong')).toBeInTheDocument();
  });
});
```

### 6. Accessibility Tests

Verify component is accessible.

```typescript
describe('Accessibility', () => {
  it('should have proper heading hierarchy', () => {
    renderComponent();
    const headings = screen.getAllByRole('heading');
    expect(headings.length).toBeGreaterThan(0);
  });

  it('should have proper ARIA labels', () => {
    render(<Button label="Submit" aria-label="Submit form" />);
    expect(screen.getByLabelText('Submit form')).toBeInTheDocument();
  });

  it('should be keyboard accessible', () => {
    const handleClick = jest.fn();
    render(<Button label="Click" onClick={handleClick} />);

    const button = screen.getByRole('button');
    button.focus();
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });

    expect(handleClick).toHaveBeenCalled();
  });
});
```

## ✅ Best Practices

### 1. Test Behavior, Not Implementation

```typescript
// ❌ Bad - Tests implementation
it('should update state when button is clicked', () => {
  const wrapper = shallow(<MyComponent />);
  wrapper.find('button').simulate('click');
  expect(wrapper.state('count')).toBe(1);
});

// ✅ Good - Tests behavior
it('should display updated count when button is clicked', () => {
  render(<MyComponent />);
  fireEvent.click(screen.getByRole('button'));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});
```

### 2. Use Semantic Queries

```typescript
// ❌ Bad - Implementation detail
const element = container.querySelector('.button-primary');

// ✅ Good - Semantic query
const button = screen.getByRole('button', { name: /submit/i });
```

**Query priority:**

1. `getByRole()` - Most accessible
2. `getByLabelText()` - For form fields
3. `getByPlaceholderText()` - For inputs
4. `getByText()` - For other content
5. `getByTestId()` - Last resort

### 3. Test User Interactions

```typescript
// ✅ Test actual user events
fireEvent.click(button);
fireEvent.change(input, { target: { value: 'new value' } });
fireEvent.submit(form);

// ✅ Or use userEvent for more realistic interactions
import userEvent from '@testing-library/user-event';

await userEvent.click(button);
await userEvent.type(input, 'new value');
```

### 4. Avoid Testing Internal State

```typescript
// ❌ Don't test internal state
expect(component.state.isOpen).toBe(true);

// ✅ Test what user sees
expect(screen.getByText('Menu is open')).toBeInTheDocument();
```

### 5. Use Setup Functions

```typescript
describe('Complex Component', () => {
  beforeEach(() => {
    // Clean up before each test
    jest.clearAllMocks();
  });

  afterEach(() => {
    // Cleanup if needed
    jest.restoreAllMocks();
  });

  it('test 1', () => {
    // ...
  });

  it('test 2', () => {
    // ...
  });
});
```

## ⚠️ Common Issues

### Issue: "cannot find module" in tests

**Cause:** Path aliases not configured for tests

**Solution:**

```javascript
// jest.config.cjs
module.exports = {
  moduleNameMapper: {
    '^@pages/(.*)$': '<rootDir>/src/pages/$1',
    '^@core/(.*)$': '<rootDir>/src/core/$1',
    '^@ui-components/(.*)$': '<rootDir>/src/ui-components/$1',
    '^@services/(.*)$': '<rootDir>/src/services/$1',
  },
};
```

### Issue: Coverage not meeting 90% threshold

**Solution:**

```bash
# See which files are below threshold
npm run test:coverage

# Open HTML report for detailed view
open coverage/lcov-report/index.html

# Add tests for missing coverage
```

### Issue: Tests timeout

**Cause:** Unresolved async operations

**Solution:**

```typescript
// Use proper async/await
it('should load data', async () => {
  render(<Component />);

  // Wait for async operations
  await screen.findByText('Loaded');

  expect(screen.getByText('Loaded')).toBeInTheDocument();
});
```

### Issue: Tests pass locally but fail in CI

**Common causes:**

- Test order dependency (use random order)
- Timing issues (use proper wait utilities)
- Environment variables not set
- Different Node versions

**Solutions:**

```bash
# Run tests in random order locally
npm test -- --randomize

# Run with CI settings
npm run test:ci

# Check Node version
node --version
```

## 📖 Resources

- [React Testing Library](https://testing-library.com/react)
- [Jest Documentation](https://jestjs.io/)
- [Testing Best Practices](https://kentcdodds.com/blog/common-mistakes-with-react-testing-library)

## 🎯 Exemplo Completo: Input Component

```typescript
// Input.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input, InputProps } from './Input';

describe('Input', () => {
  const defaultProps: InputProps = {
    label: 'Username',
    name: 'username',
  };

  const renderInput = (props: Partial<InputProps> = {}) => {
    return render(<Input {...defaultProps} {...props} />);
  };

  describe('Rendering', () => {
    it('should render with label', () => {
      renderInput();
      expect(screen.getByLabelText('Username')).toBeInTheDocument();
    });

    it('should render with placeholder', () => {
      renderInput({ placeholder: 'Enter username' });
      expect(screen.getByPlaceholderText('Enter username')).toBeInTheDocument();
    });

    it('should render with initial value', () => {
      renderInput({ value: 'john.doe', onChange: jest.fn() });
      expect(screen.getByDisplayValue('john.doe')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render text input by default', () => {
      renderInput();
      expect(screen.getByLabelText('Username')).toHaveAttribute('type', 'text');
    });

    it('should render password input', () => {
      renderInput({ type: 'password' });
      expect(screen.getByLabelText('Username')).toHaveAttribute(
        'type',
        'password'
      );
    });

    it('should render email input', () => {
      renderInput({ type: 'email' });
      expect(screen.getByLabelText('Username')).toHaveAttribute('type', 'email');
    });
  });

  describe('States', () => {
    it('should not be disabled by default', () => {
      renderInput();
      expect(screen.getByLabelText('Username')).not.toBeDisabled();
    });

    it('should be disabled when disabled prop is true', () => {
      renderInput({ disabled: true });
      expect(screen.getByLabelText('Username')).toBeDisabled();
    });

    it('should show error message', () => {
      renderInput({ error: 'Username is required' });
      expect(screen.getByText('Username is required')).toBeInTheDocument();
    });

    it('should apply error styling when error exists', () => {
      renderInput({ error: 'Error' });
      const input = screen.getByLabelText('Username');
      expect(input.className).toContain('input--error');
    });
  });

  describe('Interactions', () => {
    it('should call onChange when user types', async () => {
      const onChange = jest.fn();
      renderInput({ onChange });

      const input = screen.getByLabelText('Username');
      await userEvent.type(input, 'test');

      expect(onChange).toHaveBeenCalled();
    });

    it('should call onBlur when input loses focus', () => {
      const onBlur = jest.fn();
      renderInput({ onBlur });

      const input = screen.getByLabelText('Username');
      fireEvent.blur(input);

      expect(onBlur).toHaveBeenCalledTimes(1);
    });

    it('should call onFocus when input gains focus', () => {
      const onFocus = jest.fn();
      renderInput({ onFocus });

      const input = screen.getByLabelText('Username');
      fireEvent.focus(input);

      expect(onFocus).toHaveBeenCalledTimes(1);
    });
  });

  describe('Validation', () => {
    it('should mark as required when required prop is true', () => {
      renderInput({ required: true });
      expect(screen.getByLabelText('Username')).toBeRequired();
    });

    it('should respect maxLength attribute', () => {
      renderInput({ maxLength: 10 });
      expect(screen.getByLabelText('Username')).toHaveAttribute(
        'maxLength',
        '10'
      );
    });

    it('should respect pattern attribute', () => {
      renderInput({ pattern: '[A-Za-z]+' });
      expect(screen.getByLabelText('Username')).toHaveAttribute(
        'pattern',
        '[A-Za-z]+'
      );
    });
  });
});
```

## 🎨 Exemplo: Card Component

```typescript
// Card.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Card, CardProps } from './Card';

describe('Card', () => {
  const defaultProps: CardProps = {
    title: 'Card Title',
    children: 'Card content',
  };

  const renderCard = (props: Partial<CardProps> = {}) => {
    return render(<Card {...defaultProps} {...props} />);
  };

  describe('Rendering', () => {
    it('should render title', () => {
      renderCard();
      expect(screen.getByText('Card Title')).toBeInTheDocument();
    });

    it('should render children content', () => {
      renderCard();
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('should render header when provided', () => {
      renderCard({ header: <div>Custom Header</div> });
      expect(screen.getByText('Custom Header')).toBeInTheDocument();
    });

    it('should render footer when provided', () => {
      renderCard({ footer: <div>Custom Footer</div> });
      expect(screen.getByText('Custom Footer')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render default variant', () => {
      renderCard();
      expect(screen.getByTestId('card')).toHaveClass('card--default');
    });

    it('should render elevated variant', () => {
      renderCard({ variant: 'elevated' });
      expect(screen.getByTestId('card')).toHaveClass('card--elevated');
    });

    it('should render outlined variant', () => {
      renderCard({ variant: 'outlined' });
      expect(screen.getByTestId('card')).toHaveClass('card--outlined');
    });
  });

  describe('Interactions', () => {
    it('should not be clickable by default', () => {
      renderCard();
      const card = screen.getByTestId('card');
      expect(card.style.cursor).not.toBe('pointer');
    });

    it('should be clickable when onClick is provided', () => {
      const onClick = jest.fn();
      renderCard({ onClick });

      const card = screen.getByTestId('card');
      fireEvent.click(card);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('should apply hover effect when hoverable', () => {
      renderCard({ hoverable: true });
      expect(screen.getByTestId('card')).toHaveClass('card--hoverable');
    });
  });
});
```

## 📏 Boas Práticas

### ✅ DO

- Use `describe` blocks para organizar testes por categoria
- Use helpers como `renderComponent` para evitar repetição
- Teste comportamentos, não implementação
- Use `data-testid` para elementos sem texto/label
- Teste casos de edge (valores vazios, nulos, etc)
- Mantenha testes isolados e independentes
- Use `userEvent` para interações mais realistas

### ❌ DON'T

- Não teste detalhes de implementação interna
- Não acesse state ou métodos privados diretamente
- Não teste estilos CSS específicos (use classes)
- Não crie testes que dependem de outros
- Não ignore warnings do React Testing Library
- Não use `waitFor` desnecessariamente

## 🎯 Cobertura de Testes

Para atingir >= 90% de cobertura:

1. **Statements**: Cada linha de código executada
2. **Branches**: Todos os `if/else`, `switch`, ternários
3. **Functions**: Todas as funções chamadas
4. **Lines**: Todas as linhas executadas

### Exemplo de Cobertura Completa:

```typescript
// Component with full coverage
export const Button = ({ variant = 'primary', disabled, onClick }) => {
  // ✅ Testar variant padrão
  // ✅ Testar variant personalizado
  // ✅ Testar disabled true/false
  // ✅ Testar onClick chamado/não chamado

  return (
    <button
      className={`button button--${variant}`} // ✅ Testar classes
      disabled={disabled} // ✅ Testar estado disabled
      onClick={!disabled ? onClick : undefined} // ✅ Testar branch
    >
      {/* ✅ Testar renderização de children */}
    </button>
  );
};
```

## 🚀 Executando os Testes

```bash
# Rodar todos os testes
npm test

# Rodar em modo watch
npm run test:watch

# Rodar com cobertura
npm run test:coverage

# Rodar em modo CI
npm run test:ci

# Rodar apenas um arquivo
npm test Button.test.tsx

# Rodar testes que correspondem a um padrão
npm test -- Button
```

## 📊 Relatório de Cobertura

Após rodar `npm run test:coverage`, você encontrará:

```
coverage/
├── lcov-report/
│   └── index.html      # Abra no navegador para relatório visual
├── lcov.info           # Formato LCOV para CI
├── coverage-final.json # Dados brutos
└── clover.xml          # Formato Clover
```

Abra `coverage/lcov-report/index.html` para visualização completa da cobertura!
