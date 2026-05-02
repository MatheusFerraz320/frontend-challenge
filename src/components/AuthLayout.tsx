import { Star } from "lucide-react";
import AuthLogo from "@/components/AuthLogo";
import Image from "next/image";
import type { ReactNode } from "react";

type AuthLayoutProps = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <main className="min-h-screen bg-white lg:grid lg:grid-cols-2">
      <section className="flex min-h-screen flex-col justify-center px-6 py-8 sm:px-10 lg:px-16 xl:px-24">
        <AuthLogo />

        <div className="auth-fade flex w-full max-w-md flex-1 flex-col justify-center lg:ml-16">
          {children}
        </div>

        <div className="mt-10 hidden justify-between lg:flex">
          <p className="text-sm text-[#535862]">© EVOB 2025</p>

          <div className="flex items-center gap-2 text-sm text-[#535862]">
            <svg
              width="18"
              height="18"
              viewBox="0 0 15 12"
              fill="none"
              className="text-[#535862]"
            >
              <path
                d="M0.666748 2.66663L6.11003 6.47692C6.55081 6.78547 6.7712 6.93974 7.01092 6.9995C7.22268 7.05228 7.44415 7.05228 7.65591 6.9995C7.89563 6.93974 8.11602 6.78547 8.5568 6.47692L14.0001 2.66663M3.86675 11.3333H10.8001C11.9202 11.3333 12.4802 11.3333 12.9081 11.1153C13.2844 10.9236 13.5903 10.6176 13.7821 10.2413C14.0001 9.81345 14.0001 9.2534 14.0001 8.13329V3.86663C14.0001 2.74652 14.0001 2.18647 13.7821 1.75865C13.5903 1.38232 13.2844 1.07636 12.9081 0.884613C12.4802 0.666626 11.9202 0.666626 10.8001 0.666626H3.86675C2.74664 0.666626 2.18659 0.666626 1.75877 0.884613C1.38244 1.07636 1.07648 1.38232 0.884735 1.75865C0.666748 2.18647 0.666748 2.74652 0.666748 3.86663V8.13329C0.666748 9.2534 0.666748 9.81345 0.884735 10.2413C1.07648 10.6176 1.38244 10.9236 1.75877 11.1153C2.18659 11.3333 2.74664 11.3333 3.86675 11.3333Z"
                stroke="currentColor"
                strokeWidth="1.33"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>help@evob.com</span>
          </div>
        </div>
      </section>

      <section className="relative hidden min-h-screen overflow-hidden lg:block">
        <Image
          src="/registerPage.jpg"
          alt="Profissional ensinando em curso de beleza"
          fill
          priority
          className="object-cover object-[center_40%]"
          sizes="60vw"
        />

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
          <h2 className="mb-4 text-[34px] font-bold leading-[1.08] xl:text-[42px]">
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
              {[1, 2, 3, 4, 5].map((avatar) => (
                <div
                  key={avatar}
                  className="h-8 w-8 overflow-hidden rounded-full border-2 border-white bg-gray-400"
                >
                  <Image
                    src={`/avatar/avatar${avatar}.png`}
                    alt={`User ${avatar}`}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>

            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
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
