export type RegisterFormData = {
  name: string;
  email: string;
  confirmEmail: string;
  password: string;
  confirmPassword: string;
};

export type RegisterErrors = Partial<Record<keyof RegisterFormData, string>>;

export type ValidateRegisterResult = {
  isValid: boolean;
  errors: RegisterErrors;
};
