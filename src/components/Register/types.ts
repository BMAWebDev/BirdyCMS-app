export interface Values {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  role?: string; // only on first user register
}

export interface UserRegistrationConfig {
  username: string;
  email_address: string;
  password: string;
  role?: string;
}
