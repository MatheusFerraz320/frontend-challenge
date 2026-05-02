"use client";

import AuthLayout from "@/components/AuthLayout";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function RegisterSuccessPage() {
  const router = useRouter();

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      router.push("/");
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, [router]);

  return (
    <AuthLayout>
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-xl text-white">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
        {/* Círculo */}
          <path
            d="M15.75 30.75C24 30.75 30.75 24 30.75 15.75C30.75 7.5 24 0.75 15.75 0.75C7.5 0.75 0.75 7.5 0.75 15.75C0.75 24 7.5 30.75 15.75 30.75Z"
            stroke="white"
            strokeWidth="1.5"
          />

          {/* Check */}
          <path
            d="M10 16L14 20L22 10"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>


        </div>

        <h1 className="text-2xl font-semibold text-gray-900">
          Conta criada com sucesso!
        </h1>

        <p className="mt-3 max-w-xs text-sm text-gray-500">
          Clique no botão abaixo ou você será redirecionado em 5 segundos.
        </p>

        <Link
          href="/"
          className="mt-6 w-full max-w-xs rounded-md border py-2 text-sm transition hover:bg-gray-100"
        >
          Ir para o catálogo
        </Link>
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
    </AuthLayout>
  );
}
