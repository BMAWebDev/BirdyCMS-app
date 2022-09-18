import { ReactNode } from 'react';

export interface UserType {
  id: number;
  username: string;
  email: string;
  password: string;
  role: string;
}

export interface TokenJWT {
  id: number;
  username: string;
}

export interface Button {
  className?: string;
  href?: string;
  children: ReactNode;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export interface PageProps {
  user: UserType | null;
}

// Admin panel types
export interface Type {
  id: number;
  name: string;
  is_editable: boolean;
  created_at: Date;
}

export interface AdminProps {
  user: UserType | null;
  types: Array<Type>;
}
