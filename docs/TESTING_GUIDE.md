# Test Structure for UI Components

Este documento apresenta a estrutura recomendada e exemplos de testes para componentes UI.

## 📁 Estrutura de Arquivos

```
src/ui-components/
├── Button/
│   ├── Button.tsx              # Componente
│   ├── Button.test.tsx         # Testes
│   ├── Button.module.scss      # Estilos
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

## 🧪 Anatomia de um Teste de Componente

### Estrutura Básica

```typescript
import { render, screen, fireEvent } from '@testing-library/react';
import { ComponentName, ComponentProps } from './ComponentName';

describe('ComponentName', () => {
  // Props padrão para reutilização
  const defaultProps: ComponentProps = {
    // ...props
  };

  // Helper para renderizar com props padrão
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
});
```

## 📋 Categorias de Testes

### 1. Testes de Renderização

Verificam se o componente renderiza corretamente.

```typescript
describe('Rendering', () => {
  it('should render with correct text', () => {
    renderComponent({ children: 'Click me' });
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should render with custom className', () => {
    renderComponent({ className: 'custom' });
    const element = screen.getByTestId('component');
    expect(element).toHaveClass('custom');
  });

  it('should apply correct styles', () => {
    renderComponent({ variant: 'primary' });
    const element = screen.getByTestId('component');
    expect(element.className).toContain('component--primary');
  });
});
```

### 2. Testes de Variantes

Verificam diferentes variações visuais do componente.

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

### 3. Testes de Tamanhos

Verificam diferentes tamanhos do componente.

```typescript
describe('Sizes', () => {
  it('should render medium size by default', () => {
    renderComponent();
    expect(screen.getByTestId('button')).toHaveClass('button--medium');
  });

  it('should render small size', () => {
    renderComponent({ size: 'small' });
    expect(screen.getByTestId('button')).toHaveClass('button--small');
  });

  it('should render large size', () => {
    renderComponent({ size: 'large' });
    expect(screen.getByTestId('button')).toHaveClass('button--large');
  });
});
```

### 4. Testes de Estados

Verificam diferentes estados do componente.

```typescript
describe('States', () => {
  it('should not be disabled by default', () => {
    renderComponent();
    expect(screen.getByTestId('element')).not.toBeDisabled();
  });

  it('should be disabled when disabled prop is true', () => {
    renderComponent({ disabled: true });
    expect(screen.getByTestId('element')).toBeDisabled();
  });

  it('should show loading state', () => {
    renderComponent({ loading: true });
    expect(screen.getByTestId('loader')).toBeInTheDocument();
  });

  it('should show error state', () => {
    renderComponent({ error: 'Error message' });
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });
});
```

### 5. Testes de Interações

Verificam eventos e callbacks do usuário.

```typescript
describe('Interactions', () => {
  it('should call onClick when clicked', () => {
    const onClick = jest.fn();
    renderComponent({ onClick });

    fireEvent.click(screen.getByTestId('button'));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const onClick = jest.fn();
    renderComponent({ onClick, disabled: true });

    fireEvent.click(screen.getByTestId('button'));
    expect(onClick).not.toHaveBeenCalled();
  });

  it('should handle multiple clicks', () => {
    const onClick = jest.fn();
    renderComponent({ onClick });

    const button = screen.getByTestId('button');
    fireEvent.click(button);
    fireEvent.click(button);
    fireEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(3);
  });
});
```

### 6. Testes de Acessibilidade

Verificam conformidade com práticas de acessibilidade.

```typescript
describe('Accessibility', () => {
  it('should have correct aria-label', () => {
    renderComponent({ ariaLabel: 'Close modal' });
    expect(screen.getByLabelText('Close modal')).toBeInTheDocument();
  });

  it('should have correct role', () => {
    renderComponent();
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should be keyboard accessible', () => {
    const onClick = jest.fn();
    renderComponent({ onClick });

    const button = screen.getByTestId('button');
    fireEvent.keyDown(button, { key: 'Enter', code: 'Enter' });
    expect(onClick).toHaveBeenCalled();
  });
});
```

### 7. Testes de Children/Content

Verificam renderização de conteúdo dinâmico.

```typescript
describe('Children', () => {
  it('should render text children', () => {
    renderComponent({ children: 'Hello World' });
    expect(screen.getByText('Hello World')).toBeInTheDocument();
  });

  it('should render element children', () => {
    renderComponent({
      children: <span data-testid="custom-child">Custom</span>,
    });
    expect(screen.getByTestId('custom-child')).toBeInTheDocument();
  });

  it('should render multiple children', () => {
    renderComponent({
      children: (
        <>
          <span>First</span>
          <span>Second</span>
        </>
      ),
    });
    expect(screen.getByText('First')).toBeInTheDocument();
    expect(screen.getByText('Second')).toBeInTheDocument();
  });
});
```

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
