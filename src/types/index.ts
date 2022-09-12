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

export interface PageProps {
  isAuthenticated: boolean;
}

export interface Button {
  href?: string;
  children: ReactNode;
  target?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}
