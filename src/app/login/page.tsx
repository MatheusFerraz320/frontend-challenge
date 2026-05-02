"use client";

import AuthLogo from "@/components/AuthLogo";
import RegisterInput from "@/components/RegisterInput";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type LoginFormData = {
  email: string;
  password: string;
};

type LoginErrors = {
  email?: string;
  password?: string;
};

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginErrors>({});
  const [rememberMe, setRememberMe] = useState(false);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function validateLogin() {
    const newErrors: LoginErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Informe seu e-mail.";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Informe sua senha.";
    }

    return newErrors;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = validateLogin();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      router.push("/");
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-6 py-10">
      <section className="auth-fade w-full max-w-[430px]">
        <AuthLogo className="mx-auto mb-10 flex w-fit items-center gap-3" />

        <div className="mb-8 text-center">
          <p className="mb-3 text-sm font-medium text-[#792BF9]">
            Acesse sua conta
          </p>

          <h1 className="text-3xl font-semibold text-gray-950 sm:text-4xl">
            Bem-vindo de volta
          </h1>

          <p className="mt-3 text-sm leading-6 text-gray-600">
            Entre para continuar seus cursos e acompanhar sua evolução.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <RegisterInput
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="teste@cliente.com"
          >
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">{errors.email}</p>
            )}
          </RegisterInput>

          <RegisterInput
            label="Senha"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Digite sua senha"
          >
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">{errors.password}</p>
            )}
          </RegisterInput>

          <div className="flex items-center justify-between gap-4">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
                className="h-4 w-4 rounded border-gray-300 accent-[#792BF9]"
              />
              Lembrar-me
            </label>

            <Link
              href="#"
              className="text-sm font-medium text-[#792BF9] transition hover:text-[#6821DD]"
            >
              Esqueci minha senha
            </Link>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#792BF9] py-3 text-sm font-semibold text-white transition hover:bg-[#6821DD]"
          >
            Entrar
          </button>
        </form>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 rounded-lg border border-gray-200 px-5 py-4 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-600">Não possui conta ainda?</p>

          <Link
            href="/register"
            className="rounded-md border border-[#792BF9] px-4 py-2 text-sm font-semibold text-[#792BF9] transition hover:bg-[#792BF9] hover:text-white"
          >
            Registrar-se
          </Link>
        </div>
      </section>
    </main>
  );
}
