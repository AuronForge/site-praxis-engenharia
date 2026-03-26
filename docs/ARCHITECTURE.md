# Architecture Guide

> Modern React + TypeScript architecture with clear separation of concerns and enforced quality standards.

## 📋 Table of Contents

- [Overview](#-overview)
- [Architecture Principles](#-architecture-principles)
- [Folder Structure](#-folder-structure)
- [Layer Responsibilities](#-layer-responsibilities)
- [Architectural Rules](#-architectural-rules)
- [Data Flow](#-data-flow)
- [Code Examples](#-code-examples)

## 🎯 Overview

Praxis Engenharia follows a **layered architecture** pattern:

```
┌─────────────────────────────────────┐
│          Pages Layer                │  ← Routes & orchestration
├─────────────────────────────────────┤
│       UI Components Layer           │  ← Presentational components
├─────────────────────────────────────┤
│          Core Layer                 │  ← Business logic & utilities
├─────────────────────────────────────┤
│        Services Layer               │  ← API & external integrations
└─────────────────────────────────────┘
```

**Key Characteristics:**

- ✅ **Type-safe**: Full TypeScript with strict mode
- ✅ **Testable**: 90%+ coverage requirement
- ✅ **Maintainable**: Clear boundaries and responsibilities
- ✅ **Scalable**: Modular structure supports growth
- ✅ **Modern**: React 18 + Vite 5 + TypeScript 5.3

## 📐 Architecture Principles

### 1. Separation of Concerns

Each layer has a **single, well-defined purpose**:

- **Pages**: Orchestrate the application
- **UI Components**: Present data and handle user interactions
- **Core**: House business logic and utilities
- **Services**: Communicate with external systems

### 2. Dependency Rule

Dependencies flow **downward** only:

```
Pages
  ↓ can use
UI Components + Core + Services
  ↓ can use
Core + Services
  ↓ can use
Core
```

**❌ Never:**

- UI components calling services directly
- Core importing from UI components or pages
- Services importing from pages or UI components

### 3. Type Safety

- All code written in TypeScript
- Strict mode enabled in `tsconfig.json`
- Explicit return types for functions
- No `any` types (use `unknown` if truly necessary)

### 4. Testability

- Every module designed to be testable
- Dependencies injected, not hardcoded
- Pure functions preferred
- 90% coverage enforced

### 5. Reusability

- UI components are generic and composable
- Business logic lives in `core/`, not scattered in components
- Service layer abstracts API details

## 📁 Folder Structure

```
src/
├── pages/                    # Application routes/pages
│   ├── Home/
│   │   ├── Home.tsx          # Page component
│   │   ├── Home.test.tsx     # Page tests
│   │   ├── Home.module.scss  # Page styles
│   │   └── index.ts          # Barrel export: export { Home } from './Home'
│   │
│   └── About/
│       └── ...
│
├── core/                     # Core business logic
│   ├── types/                # TypeScript interfaces & types
│   │   ├── user.types.ts     # User-related types
│   │   ├── api.types.ts      # API request/response types
│   │   └── index.ts          # Barrel export all types
│   │
│   ├── utils/                # Pure utility functions
│   │   ├── validation.ts     # Email, phone, etc validation
│   │   ├── validation.test.ts
│   │   ├── date.ts           # Date formatting utilities
│   │   └── index.ts
│   │
│   ├── hooks/                # Custom React hooks
│   │   ├── useAuth.ts        # Authentication hook
│   │   ├── useAuth.test.ts
│   │   ├── useApi.ts         # Generic API hook
│   │   └── index.ts
│   │
│   └── constants/            # Application constants
│       ├── app.constants.ts  # General constants
│       ├── routes.ts         # Route paths
│       └── index.ts
│
├── ui-components/            # Reusable UI components
│   ├── Button/
│   │   ├── Button.tsx
│   │   ├── Button.test.tsx
│   │   ├── Button.module.scss
│   │   └── index.ts
│   │
│   ├── Input/
│   │   └── ...
│   │
│   ├── Card/
│   │   └── ...
│   │
│   └── index.ts              # Barrel export all components
│
├── services/                 # External integrations
│   ├── api/
│   │   ├── client.ts         # Axios/Fetch config
│   │   ├── client.test.ts
│   │   ├── endpoints.ts      # API endpoint URLs
│   │   └── index.ts
│   │
│   ├── auth/
│   │   ├── authService.ts    # Authentication service
│   │   ├── authService.test.ts
│   │   └── index.ts
│   │
│   └── users/
│       ├── userService.ts    # User CRUD operations
│       ├── userService.test.ts
│       └── index.ts
│
├── App.tsx                   # Root component
├── App.test.tsx
├── main.tsx                  # Application entry point
└── setupTests.ts             # Test environment setup
```

### Path Aliases

Import using path aliases, not relative paths:

```typescript
// ❌ Bad - Relative paths
import { Button } from '../../../ui-components/Button';
import { validateEmail } from '../../core/utils/validation';
import { userService } from '../../../services/users/userService';

// ✅ Good - Path aliases
import { Button } from '@ui-components/Button';
import { validateEmail } from '@core/utils/validation';
import { userService } from '@services/users';
```

**Configured aliases:**

- `@pages/*` → `src/pages/*`
- `@core/*` → `src/core/*`
- `@ui-components/*` → `src/ui-components/*`
- `@services/*` → `src/services/*`

See [tsconfig.json](../tsconfig.json) and [vite.config.ts](../vite.config.ts).

### Shared Component Data Configs

Components used across multiple pages should have their configuration data centralized to:

- Reduce duplication
- Ensure consistency
- Simplify maintenance
- Facilitate updates

**Example: Footer Component**

```typescript
// ✅ Centralized - Single source of truth
// ui-components/sections/Footer/footerData.ts
export const defaultFooterData: FooterProps = {
  logo: { src: '/images/logo.jpg', alt: 'Praxis' },
  description: 'Company description...',
  sections: [...],
  social: [...],
  copyright: '© 2026 Praxis',
  legalLinks: [...]
};

// Export from barrel for easy imports
// ui-components/sections/Footer/index.ts
export { Footer } from './Footer';
export { defaultFooterData } from './footerData';

// Usage in any page:
import { Footer, defaultFooterData } from '@ui-components/sections/Footer';

export function HomePage(): JSX.Element {
  return <Footer {...defaultFooterData} />;
}
```

**When to centralize:**

- Component used on 2+ pages
- Data is the same across all usages
- Data changes should apply everywhere

**When NOT to centralize:**

- Component only used on one page
- Data varies significantly per page
- Specific page needs custom behavior

## 🏗️ Layer Responsibilities

### Pages Layer (`src/pages/`)

**Purpose:** Application routes and page orchestration

**Responsibilities:**

- ✅ Define page routes
- ✅ Compose UI components
- ✅ Fetch data via services or hooks
- ✅ Manage page-level state
- ✅ Handle page-specific logic

**Characteristics:**

- One folder per page
- Uses UI components as building blocks
- Calls services through hooks (preferred) or directly
- Contains page-specific business logic

**Example:**

```typescript
// pages/UserProfile/UserProfile.tsx
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Card } from '@ui-components/Card';
import { Button } from '@ui-components/Button';
import { userService } from '@services/users';
import type { User } from '@core/types';

export function UserProfile() {
  const { userId } = useParams<{ userId: string }>();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const data = await userService.getById(userId!);
        setUser(data);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [userId]);

  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>{user.name}</h1>
      <Card>
        <p>Email: {user.email}</p>
        <p>Role: {user.role}</p>
      </Card>
      <Button onClick={() => {}}>Edit Profile</Button>
    </div>
  );
}
```

### UI Components Layer (`src/ui-components/`)

**Purpose:** Reusable, presentational components

**Responsibilities:**

- ✅ Accept props and render UI
- ✅ Handle user interactions (via callbacks)
- ✅ Manage internal UI state (e.g., dropdown open/closed)
- ✅ Emit events to parent components

**Characteristics:**

- **Presentational** (dumb components)
- **Props-driven** (no hardcoded data)
- **Generic** (reusable across pages)
- **No business logic**
- **No API calls**
- **Styled** (CSS Modules)

**Example:**

```typescript
// ui-components/Button/Button.tsx
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export function Button({
  children,
  onClick,
  variant = 'primary',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[`button--${variant}`]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
```

### Core Layer (`src/core/`)

**Purpose:** Business logic, utilities, and types

**Subdirectories:**

#### `core/types/` - Type Definitions

```typescript
// core/types/user.types.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

export type UserCreateDTO = Omit<User, 'id' | 'createdAt'>;
export type UserUpdateDTO = Partial<UserCreateDTO>;
```

#### `core/utils/` - Pure Utility Functions

```typescript
// core/utils/validation.ts
export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validatePhoneNumber(phone: string): boolean {
  const regex = /^\+?[1-9]\d{1,14}$/;
  return regex.test(phone);
}

export function capitalizeFirstLetter(text: string): string {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
```

#### `core/hooks/` - Custom React Hooks

```typescript
// core/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { authService } from '@services/auth';
import type { User } from '@core/types';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const checkAuth = async () => {
      const currentUser = await authService.getCurrentUser();
      setUser(currentUser);
      setLoading(false);
    };
    checkAuth();
  }, []);

  const login = async (email: string, password: string) => {
    const user = await authService.login(email, password);
    setUser(user);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return { user, loading, login, logout };
}
```

#### `core/constants/` - Application Constants

```typescript
// core/constants/app.constants.ts
export const APP_NAME = 'Praxis Engenharia';
export const API_TIMEOUT = 10000;
export const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB

// core/constants/routes.ts
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  USER_PROFILE: '/users/:userId',
  LOGIN: '/login',
} as const;
```

### Services Layer (`src/services/`)

**Purpose:** External integrations and API communication

**Responsibilities:**

- ✅ Configure HTTP clients (Axios, Fetch)
- ✅ Make API requests
- ✅ Handle request/response transformation
- ✅ Handle errors and retries
- ✅ Manage authentication tokens

**Characteristics:**

- **Centralized** API logic
- **Type-safe** requests and responses
- **Tested** with mocked HTTP calls

**Example:**

```typescript
// services/api/client.ts
import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add auth token to requests
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('authToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// services/users/userService.ts
import { apiClient } from '@services/api/client';
import type { User, UserCreateDTO, UserUpdateDTO } from '@core/types';

export const userService = {
  async getAll(): Promise<User[]> {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
  },

  async getById(id: string): Promise<User> {
    const response = await apiClient.get<User>(`/users/${id}`);
    return response.data;
  },

  async create(data: UserCreateDTO): Promise<User> {
    const response = await apiClient.post<User>('/users', data);
    return response.data;
  },

  async update(id: string, data: UserUpdateDTO): Promise<User> {
    const response = await apiClient.patch<User>(`/users/${id}`, data);
    return response.data;
  },

  async delete(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  },
};
```

## 🚨 Architectural Rules

These rules are **enforced** and must be followed:

### Rule 1: UI Components NEVER Call APIs Directly

**❌ Wrong:**

```typescript
// ui-components/UserCard/UserCard.tsx
export function UserCard({ userId }: { userId: string }) {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // ❌ BAD: Component calling API directly
    fetch(`/api/users/${userId}`)
      .then(res => res.json())
      .then(setUser);
  }, [userId]);

  return <div>{user?.name}</div>;
}
```

**✅ Correct:**

```typescript
// pages/UserProfile/UserProfile.tsx
export function UserProfile() {
  const { userId } = useParams();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // ✅ GOOD: Page uses service layer
    userService.getById(userId!).then(setUser);
  }, [userId]);

  return <UserCard user={user} />;
}

// ui-components/UserCard/UserCard.tsx
interface UserCardProps {
  user: User | null;
}

export function UserCard({ user }: UserCardProps) {
  if (!user) return <div>Loading...</div>;
  return <div>{user.name}</div>;
}
```

**Why?**

- UI components should be reusable and testable
- Data fetching is a page/container responsibility
- Service layer provides centralized error handling

### Rule 2: Business Logic Lives in `core/`, Not Components

**❌ Wrong:**

```typescript
// pages/Checkout/Checkout.tsx
export function Checkout() {
  const calculateTotal = (items: CartItem[]) => {
    // ❌ BAD: Business logic in component
    let total = 0;
    items.forEach((item) => {
      const itemTotal = item.price * item.quantity;
      const discount = item.discount || 0;
      const tax = itemTotal * 0.1;
      total += itemTotal - discount + tax;
    });
    return total;
  };

  // Component JSX...
}
```

**✅ Correct:**

```typescript
// core/utils/pricing.ts
export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => {
    const itemTotal = item.price * item.quantity;
    const discount = item.discount || 0;
    const tax = itemTotal * 0.1;
    return total + itemTotal - discount + tax;
  }, 0);
}

// pages/Checkout/Checkout.tsx
import { calculateCartTotal } from '@core/utils/pricing';

export function Checkout() {
  const total = calculateCartTotal(cartItems);
  // Component JSX...
}
```

**Why?**

- Business logic is reusable across components
- Easier to test (pure functions)
- Clearer component responsibilities

### Rule 3: Services Only Import from `core/`

**❌ Wrong:**

```typescript
// services/users/userService.ts
import { UserCard } from '@ui-components/UserCard'; // ❌ BAD

export const userService = {
  async getAll() {
    // Service should NOT know about UI components
  },
};
```

**✅ Correct:**

```typescript
// services/users/userService.ts
import type { User } from '@core/types'; // ✅ GOOD
import { apiClient } from '@services/api/client';

export const userService = {
  async getAll(): Promise<User[]> {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
  },
};
```

### Rule 4: Pages Orchestrate, Components Present

**❌ Wrong:**

```typescript
// ui-components/ProductList/ProductList.tsx
export function ProductList() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sorting, setSorting] = useState('price');

  useEffect(() => {
    // ❌ BAD: Too much logic in presentational component
    productService.getAll(filters, sorting).then(setProducts);
  }, [filters, sorting]);

  // Complex JSX with filtering, sorting, pagination...
}
```

**✅ Correct:**

```typescript
// pages/Products/Products.tsx
export function Products() {
  // ✅ Page handles data fetching and state
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({});
  const [sorting, setSorting] = useState('price');

  useEffect(() => {
    productService.getAll(filters, sorting).then(setProducts);
  }, [filters, sorting]);

  return (
    <ProductList
      products={products}
      onFilterChange={setFilters}
      onSortChange={setSorting}
    />
  );
}

// ui-components/ProductList/ProductList.tsx
interface ProductListProps {
  products: Product[];
  onFilterChange: (filters: Filters) => void;
  onSortChange: (sort: string) => void;
}

export function ProductList({ products, onFilterChange, onSortChange }: ProductListProps) {
  // ✅ Component is presentational
  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
```

### Rule 5: No Circular Dependencies

**❌ Wrong:**

```typescript
// core/hooks/useUsers.ts
import { UsersPage } from '@pages/Users'; // ❌ BAD

// pages/Users/Users.tsx
import { useUsers } from '@core/hooks/useUsers'; // Creates circular dependency
```

**✅ Correct:**

Dependencies flow **downward only**:

```
pages/ → ui-components/ + core/ + services/
ui-components/ → core/
services/ → core/
core/ → (nothing from src/)
```

## 🔄 Data Flow

### Read Flow (Displaying Data)

```
1. User navigates to page
          ↓
2. Page component loads
          ↓
3. Page calls service (via hook or directly)
          ↓
4. Service makes API request
          ↓
5. Service returns typed data
          ↓
6. Page stores data in state
          ↓
7. Page passes data to UI components as props
          ↓
8. UI components render data
```

**Example:**

```typescript
// 1-2: User navigates, page loads
export function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 3-5: Fetch data from service
    userService.getAll()
      .then(data => {
        // 6: Store in state
        setUsers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  // 7-8: Pass to UI component
  return <UserTable users={users} />;
}
```

### Write Flow (Updating Data)

```
1. User interacts with UI component (button click, form submit)
          ↓
2. Component calls callback prop (onClick, onSubmit)
          ↓
3. Page handler receives event
          ↓
4. Page calls service method (create, update, delete)
          ↓
5. Service makes API request
          ↓
6. Service returns result
          ↓
7. Page updates local state
          ↓
8. UI components re-render with new data
```

**Example:**

```typescript
// pages/UserManagement/UserManagement.tsx
export function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);

  // 3: Page handler
  const handleDeleteUser = async (userId: string) => {
    try {
      // 4-6: Call service
      await userService.delete(userId);

      // 7: Update state
      setUsers(prev => prev.filter(u => u.id !== userId));
    } catch (error) {
      console.error('Failed to delete user:', error);
    }
  };

  // 8: UI re-renders
  return (
    <UserTable
      users={users}
      onDelete={handleDeleteUser}  // 2: Callback prop
    />
  );
}

// ui-components/UserTable/UserTable.tsx
interface UserTableProps {
  users: User[];
  onDelete: (userId: string) => void;
}

export function UserTable({ users, onDelete }: UserTableProps) {
  return (
    <table>
      {users.map(user => (
        <tr key={user.id}>
          <td>{user.name}</td>
          <td>
            {/* 1: User clicks */}
            <Button onClick={() => onDelete(user.id)}>Delete</Button>
          </td>
        </tr>
      ))}
    </table>
  );
}
```

## 📝 Code Examples

### Complete Feature Example

Let's build a "User Management" feature following the architecture:

#### 1. Define Types (`core/types/user.types.ts`)

```typescript
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

export type UserCreateDTO = Omit<User, 'id'>;
export type UserUpdateDTO = Partial<UserCreateDTO>;
```

#### 2. Create Service (`services/users/userService.ts`)

```typescript
import { apiClient } from '@services/api/client';
import type { User, UserCreateDTO, UserUpdateDTO } from '@core/types';

export const userService = {
  getAll: () => apiClient.get<User[]>('/users').then((res) => res.data),
  getById: (id: string) => apiClient.get<User>(`/users/${id}`).then((res) => res.data),
  create: (data: UserCreateDTO) => apiClient.post<User>('/users', data).then((res) => res.data),
  update: (id: string, data: UserUpdateDTO) =>
    apiClient.patch<User>(`/users/${id}`, data).then((res) => res.data),
  delete: (id: string) => apiClient.delete(`/users/${id}`),
};
```

#### 3. Create Custom Hook (`core/hooks/useUsers.ts`)

```typescript
import { useState, useEffect } from 'react';
import { userService } from '@services/users';
import type { User } from '@core/types';

export function useUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    userService
      .getAll()
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));
  }, []);

  const refresh = () => {
    setLoading(true);
    userService
      .getAll()
      .then(setUsers)
      .catch(setError)
      .finally(() => setLoading(false));
  };

  return { users, loading, error, refresh };
}
```

#### 4. Create UI Component (`ui-components/UserCard/UserCard.tsx`)

```typescript
import styles from './UserCard.module.scss';
import type { User } from '@core/types';

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (userId: string) => void;
}

export function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  return (
    <div className={styles.card}>
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <span className={styles.badge}>{user.role}</span>
      <div className={styles.actions}>
        <button onClick={() => onEdit(user)}>Edit</button>
        <button onClick={() => onDelete(user.id)}>Delete</button>
      </div>
    </div>
  );
}
```

#### 5. Create Page (`pages/Users/Users.tsx`)

```typescript
import { useState } from 'react';
import { UserCard } from '@ui-components/UserCard';
import { useUsers } from '@core/hooks/useUsers';
import { userService } from '@services/users';
import type { User } from '@core/types';

export function Users() {
  const { users, loading, error, refresh } = useUsers();
  const [editing, setEditing] = useState<User | null>(null);

  const handleDelete = async (userId: string) => {
    if (!confirm('Delete this user?')) return;

    try {
      await userService.delete(userId);
      refresh();
    } catch (err) {
      alert('Failed to delete user');
    }
  };

  const handleEdit = (user: User) => {
    setEditing(user);
    // Open modal/form...
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Users</h1>
      <div className="grid">
        {users.map(user => (
          <UserCard
            key={user.id}
            user={user}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}
```

### Testing Example

```typescript
// services/users/userService.test.ts
import { userService } from './userService';
import { apiClient } from '@services/api/client';

jest.mock('@services/api/client');

describe('userService', () => {
  it('should fetch all users', async () => {
    const mockUsers = [{ id: '1', name: 'John', email: 'john@example.com', role: 'user' }];
    (apiClient.get as jest.Mock).mockResolvedValue({ data: mockUsers });

    const users = await userService.getAll();

    expect(apiClient.get).toHaveBeenCalledWith('/users');
    expect(users).toEqual(mockUsers);
  });
});

// ui-components/UserCard/UserCard.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { UserCard } from './UserCard';

describe('UserCard', () => {
  const mockUser = { id: '1', name: 'John Doe', email: 'john@example.com', role: 'user' as const };
  const mockOnEdit = jest.fn();
  const mockOnDelete = jest.fn();

  it('should render user information', () => {
    render(<UserCard user={mockUser} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('should call onDelete when delete button is clicked', () => {
    render(<UserCard user={mockUser} onEdit={mockOnEdit} onDelete={mockOnDelete} />);

    fireEvent.click(screen.getByText('Delete'));

    expect(mockOnDelete).toHaveBeenCalledWith('1');
  });
});
```

## 🎓 Best Practices

### Component Design

**DO:**

- ✅ Keep components small (< 250 lines)
- ✅ Use TypeScript interfaces for props
- ✅ Export component and props interface
- ✅ Use CSS Modules for styles
- ✅ Write comprehensive tests

**DON'T:**

- ❌ Mix business logic with UI rendering
- ❌ Hardcode data or configuration
- ❌ Use `any` types
- ❌ Create god components (do everything)

### Code Organization

**DO:**

- ✅ One component per file
- ✅ Co-locate tests with components
- ✅ Use barrel exports (`index.ts`)
- ✅ Group related files in folders
- ✅ Use path aliases for imports

**DON'T:**

- ❌ Deep folder nesting (max 3 levels)
- ❌ Scattered utility functions
- ❌ Inconsistent naming conventions

### State Management

**Local state (useState):**

Use for UI-only state:

- Form inputs
- Modal open/closed
- Accordion expanded/collapsed

**Custom hooks:**

Use for shared stateful logic:

- Data fetching
- Authentication
- Form validation

**Context API:**

Use for app-wide state:

- Current user
- Theme (dark/light mode)
- Language preference

## 🔮 Future Considerations

As the project grows, consider:

1. **State Management Library**
   - Redux Toolkit for complex global state
   - Zustand for lightweight state management

2. **Data Fetching Library**
   - React Query for server state
   - SWR for stale-while-revalidate pattern

3. **Component Library**
   - Radix UI for accessible primitives
   - Headless UI for unstyled components

4. **Performance**
   - Code splitting with React.lazy
   - Route-based code splitting
   - Virtual scrolling for large lists

5. **Documentation**
   - Storybook for component documentation
   - TypeDoc for API documentation

## 📚 Additional Resources

- [Contributing Guide](../CONTRIBUTING.md)
- [Quality Gates](QUALITY_GATES.md)
- [Testing Guide](TESTING_GUIDE.md)
- [React Documentation](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

---

**This architecture is designed to scale.** Start simple, follow the rules, and evolve as needed.

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
