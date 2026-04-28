import type {
  RegisterErrors,
  RegisterFormData,
  ValidateRegisterResult,
} from "@/types/register";

export function validateRegister(
  formData: RegisterFormData
): ValidateRegisterResult {
  const errors: RegisterErrors = {};

  if (!formData.name.trim()) {
    errors.name = "Informe seu nome.";
  }

  if (!formData.email.trim()) {
    errors.email = "Informe seu email.";
  }

  if (!formData.confirmEmail.trim()) {
    errors.confirmEmail = "Confirme seu email.";
  }

  if (
    formData.email.trim() &&
    formData.confirmEmail.trim() &&
    formData.email !== formData.confirmEmail
  ) {
    errors.confirmEmail = "Os emails não conferem.";
  }

  if (!formData.password) {
    errors.password = "Senha é obrigatoria.";
  }

  if (formData.password && formData.password.length < 8) {
    errors.password = "A senha deve ter pelo menos 8 caracteres.";
  }

  if (!formData.confirmPassword) {
    errors.confirmPassword = "Confirme sua senha.";
  }

  if (
    formData.password &&
    formData.confirmPassword &&
    formData.password !== formData.confirmPassword
  ) {
    errors.confirmPassword = "As senhas não conferem.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
