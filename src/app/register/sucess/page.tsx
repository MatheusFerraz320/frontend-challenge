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
          ✓
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
