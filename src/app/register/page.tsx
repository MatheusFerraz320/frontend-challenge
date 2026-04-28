"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type RegisterFormData = {
  nome: string;
  email: string;
  confirmeEmail: string;
  senha: string;
  confirmeSenha: string;
};

export default function RegisterPage() {
  const [formData, setFormData] = useState<RegisterFormData>({
    nome: "",
    email: "",
    confirmeEmail: "",
    senha: "",
    confirmeSenha: "",
  });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log(formData);
  }

  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      <section className="flex min-h-screen flex-col justify-center px-6 py-10 sm:px-10 lg:px-16 xl:px-24">
        <Link href="/" className="mb-10 flex w-fit items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#792BF9]">
            <Image src="/evobLogo.png" alt="EVOB" width={24} height={24} />
          </span>
          <span className="text-sm font-bold tracking-wide text-gray-950">
            EVOB
          </span>
        </Link>

        <div className="w-full max-w-md">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold text-[#792BF9]">
              Comece agora
            </p>
            <h1 className="text-3xl font-bold text-gray-950">Criar conta</h1>
            <p className="mt-3 text-sm leading-6 text-gray-600">
              Preencha seus dados para criar seu acesso e iniciar o curso.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="nome"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                id="nome"
                name="nome"
                type="text"
                value={formData.nome}
                onChange={handleInputChange}
                placeholder="Digite aqui"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-[#792BF9] focus:ring-2 focus:ring-[#792BF9]/20"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Digite aqui"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-[#792BF9] focus:ring-2 focus:ring-[#792BF9]/20"
              />
            </div>

            <div>
              <label
                htmlFor="confirmeEmail"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Confirme Email
              </label>
              <input
                id="confirmeEmail"
                name="confirmeEmail"
                type="email"
                value={formData.confirmeEmail}
                onChange={handleInputChange}
                placeholder="Digite aqui"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-[#792BF9] focus:ring-2 focus:ring-[#792BF9]/20"
              />
            </div>

            <div>
              <label
                htmlFor="senha"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Crie uma senha
              </label>
              <input
                id="senha"
                name="senha"
                type="password"
                value={formData.senha}
                onChange={handleInputChange}
                placeholder="Digite aqui"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-[#792BF9] focus:ring-2 focus:ring-[#792BF9]/20"
              />
              <p className="mt-1 text-xs text-gray-500">
                Deve ter pelo menos 8 caracteres.
              </p>
            </div>

            <div>
              <label
                htmlFor="confirmeSenha"
                className="mb-1 block text-sm font-medium text-gray-700"
              >
                Confirme a sua senha
              </label>
              <input
                id="confirmeSenha"
                name="confirmeSenha"
                type="password"
                value={formData.confirmeSenha}
                onChange={handleInputChange}
                placeholder="Digite aqui"
                className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-[#792BF9] focus:ring-2 focus:ring-[#792BF9]/20"
              />
              <p className="mt-1 text-xs text-gray-500">
                A senha deve ser igual a criada acima.
              </p>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-[#792BF9] py-3 text-sm font-semibold text-white shadow-lg shadow-[#792BF9]/25 transition hover:bg-[#6420D6]"
            >
              Iniciar curso
            </button>

            <p className="text-center text-sm text-gray-600">
              Já tem uma conta?{" "}
              <Link
                href="/login"
                className="font-semibold text-[#792BF9] hover:underline"
              >
                Entrar
              </Link>
            </p>
          </form>
        </div>
      </section>

      <section className="relative hidden min-h-screen overflow-hidden bg-[#792BF9] lg:block">
        <Image
          src="/heroBanner.jpg"
          alt="Profissional ensinando em curso de beleza"
          fill
          priority
          className="object-cover"
          sizes="50vw"
        />

        <div className="absolute inset-0 bg-[#260A5C]/45" />

        <div className="relative z-10 flex h-full flex-col justify-end p-12 text-white xl:p-16">


        </div>
      </section>
    </main>
  );
}
