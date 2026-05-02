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
        {/* Círcle */}
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
    </AuthLayout>
  );
}
