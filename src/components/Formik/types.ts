import { ReactNode } from 'react';

export interface Group {
  className: string;
  name?: string;
  labelText?: string;
  children: ReactNode;
}
