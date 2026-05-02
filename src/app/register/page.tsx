"use client";

import AuthLayout from "@/components/AuthLayout";
import RegisterInput from "@/components/RegisterInput";
import type { RegisterErrors, RegisterFormData } from "@/types/register";
import { validateRegister } from "@/utils/validateRegister";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<RegisterFormData>({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<RegisterErrors>({});

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validation = validateRegister(formData);
    setErrors(validation.errors);

    if (validation.isValid) {
      router.push("/register/success");
    }
  }

  return (
    <AuthLayout>
      <div className="mb-8">
        <h1 className="text-4xl font-semibold text-gray-950">Criar conta</h1>

        <p className="mt-3 text-sm leading-6 text-gray-600 md:hidden">
          Start turning your ideas into reality.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <RegisterInput
          label="Nome"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        >
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name}</p>
          )}
        </RegisterInput>

        <RegisterInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        >
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </RegisterInput>

        <RegisterInput
          label="Confirme Email"
          type="email"
          name="confirmEmail"
          value={formData.confirmEmail}
          onChange={handleInputChange}
        >
          {errors.confirmEmail && (
            <p className="mt-1 text-sm text-red-500">{errors.confirmEmail}</p>
          )}
        </RegisterInput>

        <RegisterInput
          label="Crie uma senha"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          helperText="Deve ter pelo menos 8 caracteres."
        >
          {errors.password && (
            <p className="mt-1 text-sm text-red-500">{errors.password}</p>
          )}
        </RegisterInput>

        <RegisterInput
          label="Confirme a sua senha"
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleInputChange}
          helperText="A senha deve ser igual a criada acima."
        >
          {errors.confirmPassword && (
            <p className="mt-1 text-sm text-red-500">
              {errors.confirmPassword}
            </p>
          )}
        </RegisterInput>

        <button
          type="submit"
          className="w-full rounded-lg bg-[#792BF9] py-3 text-white transition hover:bg-[#6821DD]"
        >
          Iniciar curso
        </button>
      </form>

      <div className="mt-8 flex w-full items-start justify-center gap-1">
        <p className="text-sm text-gray-600">Já tem uma conta?</p>
        <Link
          href="#"
          className="text-sm font-medium text-[#792BF9] hover:underline"
        >
          Entrar
        </Link>
      </div>
    </AuthLayout>
  );
}
