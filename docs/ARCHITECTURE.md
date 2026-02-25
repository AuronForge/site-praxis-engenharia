# Architecture

This document describes the architecture and design principles of the Praxis Engenharia application.

## 🏗️ Overview

Praxis Engenharia is built using a modern React + TypeScript stack with a focus on maintainability, testability, and developer experience.

## 📐 Architecture Principles

### 1. Separation of Concerns

- Clear separation between UI, business logic, and data access
- Each module has a single, well-defined responsibility

### 2. Component-Based Architecture

- Reusable, composable UI components
- Props-driven component design
- Container/Presentational pattern where appropriate

### 3. Type Safety

- Comprehensive TypeScript usage
- Strict type checking enabled
- No implicit any types

### 4. Testability

- Components designed for easy testing
- High test coverage requirements (>= 90%)
- Dependency injection where needed

### 5. Scalability

- Modular folder structure
- Clear naming conventions
- Easy to locate and modify code

## 📁 Folder Structure

```
src/
├── pages/              # Application pages/routes
│   ├── Home/
│   │   ├── Home.tsx
│   │   ├── Home.test.tsx
│   │   ├── Home.module.scss
│   │   └── index.ts
│   └── ...
│
├── core/               # Core business logic
│   ├── types/          # TypeScript type definitions
│   │   ├── user.types.ts
│   │   └── ...
│   ├── utils/          # Utility functions
│   │   ├── validation.ts
│   │   └── ...
│   ├── hooks/          # Custom React hooks
│   │   ├── useAuth.ts
│   │   └── ...
│   └── constants/      # Application constants
│       └── ...
│
├── ui-components/      # Reusable UI components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.module.scss
│   │   └── index.ts
│   ├── Input/
│   └── ...
│
└── services/           # External services & API
    ├── api/
    │   ├── client.ts
    │   └── endpoints.ts
    ├── auth/
    └── ...
```

## 🔄 Data Flow

```
User Interaction → Page Component → Service → API
                      ↓
                  UI Components
                      ↓
                  Core Logic/Hooks
```

### Flow Description:

1. **User Interaction**: User interacts with UI
2. **Page Component**: Coordinates between UI components and services
3. **UI Components**: Presentational components (reusable)
4. **Core Logic**: Business logic, calculations, transformations
5. **Services**: API calls, external integrations
6. **API**: Backend communication

## 📦 Module Descriptions

### Pages (`src/pages/`)

**Purpose**: Application routes and page-level components

**Characteristics**:

- One folder per page/route
- Coordinates between UI components and services
- Manages page-level state
- Handles routing logic

**Example**:

```typescript
// pages/Home/Home.tsx
import { Button } from '@ui-components/Button';
import { useUsers } from '@core/hooks/useUsers';

export const Home: React.FC = () => {
  const { users, loading } = useUsers();

  return (
    <div>
      <h1>Home Page</h1>
      <Button onClick={handleClick}>Click me</Button>
    </div>
  );
};
```

### Core (`src/core/`)

**Purpose**: Business logic, utilities, types, hooks

**Subdirectories**:

- **types/**: TypeScript interfaces and types
- **utils/**: Pure utility functions
- **hooks/**: Custom React hooks
- **constants/**: Application-wide constants

**Characteristics**:

- Framework-agnostic where possible
- Highly testable
- No UI concerns

**Example**:

```typescript
// core/utils/validation.ts
export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

// core/hooks/useAuth.ts
export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  // ... auth logic
  return { user, login, logout };
};
```

### UI Components (`src/ui-components/`)

**Purpose**: Reusable, generic UI components

**Characteristics**:

- Presentational (dumb) components
- Props-driven
- No business logic
- Highly reusable
- Well-documented
- Fully tested

**Component Structure**:

```
Button/
├── Button.tsx          # Component implementation
├── Button.test.tsx     # Component tests
├── Button.module.scss  # Component styles
└── index.ts            # Public exports
```

**Example**:

```typescript
// ui-components/Button/Button.tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
}) => {
  return (
    <button
      className={`button button--${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

### Services (`src/services/`)

**Purpose**: External integrations, API communication

**Characteristics**:

- Handles all external communication
- API client configuration
- Error handling
- Request/response transformations

**Example**:

```typescript
// services/api/client.ts
import axios from 'axios';

export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 10000,
});

// services/api/users.ts
import { apiClient } from './client';
import { User } from '@core/types/user.types';

export const userService = {
  getAll: async (): Promise<User[]> => {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
  },

  getById: async (id: string): Promise<User> => {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
  },
};
```

## 🎨 Styling Strategy

### CSS Modules

- Component-scoped styles using CSS Modules
- Naming: `ComponentName.module.scss`
- Prevents style conflicts
- Better maintainability

### SCSS

- Variables for colors, spacing, etc.
- Mixins for reusable patterns
- Nested selectors (use sparingly)

### Example:

```scss
// ui-components/Button/Button.module.scss
.button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &--primary {
    background-color: #007bff;
    color: white;
  }

  &--secondary {
    background-color: #6c757d;
    color: white;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
```

## 🧪 Testing Strategy

### Unit Tests

- Test individual components and functions in isolation
- Mock external dependencies
- Focus on behavior, not implementation

### Coverage Requirements

- Minimum 90% coverage for all metrics
- Enforced at commit time

### Test Organization

- Co-located with components (`*.test.tsx`)
- Descriptive test names
- AAA pattern (Arrange, Act, Assert)

### Example:

```typescript
// ui-components/Button/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('should render with correct text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText('Click me')).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should not call onClick when disabled', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick} disabled>Click me</Button>);

    fireEvent.click(screen.getByText('Click me'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

## 🔒 Type Safety

### TypeScript Configuration

- Strict mode enabled
- No implicit any
- Explicit return types for functions
- Proper typing for React components

### Type Definitions

```typescript
// core/types/user.types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

export type UserCreateInput = Omit<User, 'id'>;
export type UserUpdateInput = Partial<UserCreateInput>;
```

## 🔌 State Management

### Local State

- Use `useState` for component-local state
- Use `useReducer` for complex state logic

### Global State

- Context API for app-wide state
- Custom hooks to encapsulate state logic

### Server State

- React Query (if needed) for server state management
- Caching, background updates, optimistic updates

## 🚀 Build & Deployment

### Development

```bash
npm run dev    # Vite dev server with HMR
```

### Production

```bash
npm run build  # TypeScript compilation + Vite build
npm run preview # Preview production build locally
```

### Build Output

- Optimized and minified
- Code splitting
- Asset hashing
- Tree shaking

## 🔄 CI/CD Integration

### Quality Gates

1. Linting (ESLint, Stylelint, HTMLHint)
2. Type checking
3. Testing with coverage
4. Build verification

### Automated Checks

- Pre-commit hooks via Husky
- Conventional commits validation
- Automated releases with standard-version

## 📚 Best Practices

1. **Keep components small**: Single responsibility
2. **Use TypeScript properly**: Avoid `any`, use proper types
3. **Test your code**: Maintain high coverage
4. **Follow conventions**: Naming, folder structure, commits
5. **Document when needed**: Complex logic, APIs, architecture decisions
6. **Review your code**: Self-review before submitting
7. **Keep dependencies updated**: Regular updates for security and features

## 🔮 Future Considerations

- State management library (Redux Toolkit, Zustand) if complexity grows
- React Query for server state management
- Micro-frontend architecture if scaling requires it
- Performance monitoring and error tracking
- Internationalization (i18n) if multi-language support needed

---

This architecture is designed to evolve with the project's needs while maintaining quality and developer experience.
