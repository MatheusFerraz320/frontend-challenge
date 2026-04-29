"use client";
import type { RegisterErrors, RegisterFormData } from "@/types/register";
import { validateRegister } from "@/utils/validateRegister";
import RegisterInput from "@/components/RegisterInput";
import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
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
      alert("cadastro realizado com sucesso");
    }
  }

  return (
    <main className="min-h-screen bg-white lg:grid lg:h-screen lg:grid-cols-2 lg:overflow-hidden">
      {/* LEFT */}
      <section className="flex min-h-screen flex-col justify-center px-6 py-10 sm:px-10 lg:px-16 xl:px-24">
        <Link href="/" className="mb-10 flex w-fit items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-md bg-[#ECE8FF]">
            <Image src="/evobLogo.png" alt="EVOB" width={34} height={24} />
          </span>

          <span className="text-lg font-bold tracking-wide text-gray-600">
            EVOB
          </span>
        </Link>

        <div className="flex w-full max-w-md flex-col lg:ml-16">
          <div className="mb-8">
            <h1 className="text-4xl font-semibold text-gray-950">
              Criar conta
            </h1>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Preencha seus dados para criar seu acesso e iniciar o curso.
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
                <p className="mt-1 text-sm text-red-500">
                  {errors.confirmEmail}
                </p>
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
        </div>
      </section>

      {/* RIGHT */}
      <section className="relative hidden min-h-screen overflow-hidden lg:block">
        <Image
          src="/registerPage.jpg"
          alt="Profissional ensinando em curso de beleza"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="60vw"
        />

        {/* OVERLAY*/}
        <div className="absolute inset-0 z-[1] bg-black/20" />
        <div className="absolute inset-0 z-[2] bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        
        
        <div className="pointer-events-none absolute left-0 right-0 top-0 z-10 h-[480px] overflow-hidden xl:h-[540px]">
          <div
            className="absolute inset-0 opacity-25"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255,255,255,0.45) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255,255,255,0.45) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/*CELLS */}
          <div className="absolute left-0 top-0 h-[80px] w-[80px] bg-black/20" />
          <div className="absolute left-[160px] top-0 h-[80px] w-[80px] bg-white/10" />
          <div className="absolute right-[80px] top-0 h-[80px] w-[80px] bg-black/25" />

          <div className="absolute left-[80px] top-[80px] h-[80px] w-[80px] bg-white/10" />
          <div className="absolute left-[160px] top-[80px] h-[80px] w-[80px] bg-black/25" />
          <div className="absolute right-[160px] top-[80px] h-[80px] w-[80px] bg-white/20" />
          <div className="absolute right-0 top-[80px] h-[80px] w-[80px] bg-black/25" />

          <div className="absolute left-0 top-[160px] h-[80px] w-[80px] bg-black/25" />
          <div className="absolute right-[80px] top-[160px] h-[80px] w-[80px] bg-white/15" />

          <div className="absolute left-[240px] top-[240px] h-[80px] w-[80px] bg-black/20" />
          <div className="absolute right-[240px] top-[240px] h-[80px] w-[80px] bg-white/10" />

          <div className="absolute left-[80px] top-[320px] h-[80px] w-[80px] bg-black/25" />
          <div className="absolute right-[160px] top-[320px] h-[80px] w-[80px] bg-black/20" />

          <div className="absolute left-[160px] top-[400px] h-[80px] w-[80px] bg-white/10" />
          <div className="absolute right-[80px] top-[400px] h-[80px] w-[80px] bg-white/20" />
        </div>

        {/* SPARKLE */}
        <div className="absolute bottom-[310px] left-[70px] z-20">
          <div className="relative w-fit">
            <svg className="h-20 w-20" viewBox="0 0 80 80">
              <path
                d="M0 40C25.4247 40 40 25.4247 40 0C40 25.4247 54.5753 40 80 40C54.5753 40 40 54.5753 40 80C40 54.5753 25.4247 40 0 40Z"
                fill="white"
              />
            </svg>

            <svg
              className="absolute -left-2 -top-2 h-4 w-4"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 8C5.08495 8 8 5.08495 8 0C8 5.08495 10.9151 8 16 8C10.9151 8 8 10.9151 8 16C8 10.9151 5.08495 8 0 8Z"
                fill="#FEC84B"
              />
            </svg>

            <svg
              className="absolute bottom-0 right-0 h-3 w-3"
              viewBox="0 0 16 16"
            >
              <path
                d="M0 8C5.08495 8 8 5.08495 8 0C8 5.08495 10.9151 8 16 8C10.9151 8 8 10.9151 8 16C8 10.9151 5.08495 8 0 8Z"
                fill="#FEC84B"
              />
            </svg>
          </div>
        </div>

      
        <div className="absolute inset-0 z-30 flex flex-col justify-end px-12 pb-20 text-white xl:px-16 xl:pb-24">
          <h2 className="mb-4 text-[34px] font-bold leading-[1.08] tracking-[-0.02em] xl:text-[42px]">
            Comece a sua
            <br />
            jornada na beleza
          </h2>

          <p className="mb-6 max-w-[360px] text-xs leading-5 text-white/85">
            Crie uma conta gratuitamente e acesse os maiores cursos do mercado
            com as maiores marcas.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-gray-400"
                >
                  <Image
                    src={`/avatar-${i}.jpg`}
                    alt={`User ${i}`}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400"
                  />
                ))}

                <span className="ml-1 text-xs font-semibold">5.0</span>
              </div>

              <span className="text-xs text-white/80">200+ reviews</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
