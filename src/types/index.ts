import { ReactNode } from 'react';

export interface UserCollection {
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
  user: UserCollection | null;
}
