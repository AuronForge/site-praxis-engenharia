/**
 * User-related TypeScript type definitions
 */

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export enum UserRole {
  ADMIN = 'admin',
  USER = 'user',
  GUEST = 'guest',
}

export type UserCreateInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

export type UserUpdateInput = Partial<UserCreateInput>;

export interface UserListResponse {
  users: User[];
  total: number;
  page: number;
  pageSize: number;
}
