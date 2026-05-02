'use client';

import Link from 'next/link';
import type { FormEvent } from 'react';
import { useState } from 'react';
import { User, LogIn } from 'lucide-react';
import AuthLogo from './AuthLogo';

type NavbarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export default function Navbar({ searchValue, onSearchChange }: NavbarProps) {
  const [isOpen, setOpen] = useState(false);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  const toggleMobileMenu = () => setOpen((c) => !c);

  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.getElementById("coursesList")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="relative mx-auto flex h-[75px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-[60px]">

      {/* DESKTOP SEARCH */}
      <form
        onSubmit={handleSearchSubmit}
        className="hidden lg:flex items-center gap-2"
        >
          {/*NEW SEARCH ICO */}
       <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path
            d="M19.6959 18.2168L14.7656 13.2662C16.0332 11.8113 16.7278 9.98069 16.7278 8.07499C16.7278 3.62251 12.9757 0 8.36391 0C3.75212 0 0 3.62251 0 8.07499C0 12.5275 3.75212 16.15 8.36391 16.15C10.0952 16.15 11.7451 15.6458 13.1557 14.6888L18.1235 19.677C18.3311 19.8852 18.6104 20 18.9097 20C19.193 20 19.4617 19.8957 19.6657 19.7061C20.0992 19.3034 20.113 18.6357 19.6959 18.2168ZM8.36391 2.10652C11.7727 2.10652 14.5459 4.78391 14.5459 8.07499C14.5459 11.3661 11.7727 14.0435 8.36391 14.0435C4.95507 14.0435 2.18189 11.3661 2.18189 8.07499C2.18189 4.78391 4.95507 2.10652 8.36391 2.10652Z"
            fill="#792BF9"
             />
        </svg>

        <input
          type="text"
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Busca"
          className="bg-transparent text-base font-semibold text-black outline-none placeholder:text-black"
        />
      </form>

      {/* MOBILE LEFT */}
      <div className="flex items-center gap-3 lg:hidden">

        {/* MENU */}
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col gap-1 p-1"
          aria-label="Menu"
        >
          <span className="h-0.5 w-5 bg-purple-300 rounded"></span>
          <span className="h-0.5 w-5 bg-purple-300 rounded"></span>
          <span className="h-0.5 w-5 bg-purple-300 rounded"></span>
        </button>

        {/* MOBILE SEARCH (SAFE VERSION) */}
        <form
          onSubmit={handleSearchSubmit}
          className="flex items-center gap-2"
        >
          {/* LUPA */}
          <button
            type="button"
            onClick={() => setMobileSearchOpen((prev) => !prev)}
            className="p-1"
            aria-label="Buscar"
          >
            <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
              <path
                d="M19.6959 18.2168L14.7656 13.2662C16.0332 11.8113 16.7278 9.98069 16.7278 8.07499C16.7278 3.62251 12.9757 0 8.36391 0C3.75212 0 0 3.62251 0 8.07499C0 12.5275 3.75212 16.15 8.36391 16.15C10.0952 16.15 11.7451 15.6458 13.1557 14.6888L18.1235 19.677C18.3311 19.8852 18.6104 20 18.9097 20C19.193 20 19.4617 19.8957 19.6657 19.7061C20.0992 19.3034 20.113 18.6357 19.6959 18.2168ZM8.36391 2.10652C11.7727 2.10652 14.5459 4.78391 14.5459 8.07499C14.5459 11.3661 11.7727 14.0435 8.36391 14.0435C4.95507 14.0435 2.18189 11.3661 2.18189 8.07499C2.18189 4.78391 4.95507 2.10652 8.36391 2.10652Z"
                fill="#792BF9"
              />
            </svg>
          </button>

          {/* NEW INPUT */}
          {mobileSearchOpen && (
            <input
              autoFocus
              type="text"
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Busca"
              className="w-24 bg-transparent text-base font-semibold text-black outline-none placeholder:text-black sm:w-28"
            />
          )}
        </form>
      </div>

      {/* LOGO */}
      <AuthLogo
        className="absolute left-1/2 top-[24px] -translate-x-1/2 flex items-center gap-1.5"
        iconClassName="rounded-[4px] bg-[#ECE8FF] p-1"
        imageWidth={32}
        imageHeight={32}
      />

      {/* DESKTOP RIGHT */}
      <nav className="hidden lg:flex items-center gap-5">
        <Link href="/register" className="flex items-center gap-2">
          <User className="h-5 w-5 text-[#792BF9]" />
          <span className="font-semibold">Cadastre-se</span>
        </Link>

        <Link
          href="/login"
          className="flex items-center gap-2 bg-[#792BF9] px-3 py-2 text-white"
        >
          <LogIn className="h-5 w-5" />
          <span className="font-bold">Entrar</span>
        </Link>
      </nav>

      
      <Link href="/login" className="lg:hidden flex items-center">
        <LogIn className="h-5 w-5 text-[#792BF9]" />
      </Link>

      {/* MOBILE MENU */}
      {isOpen && (
        <nav className="absolute left-4 right-4 top-[75px] z-50 flex flex-col gap-3 rounded-xl border bg-white p-4 shadow-lg lg:hidden">
          <Link href="/register" onClick={() => setOpen(false)}>
            Cadastre-se
          </Link>
          <Link href="/login" onClick={() => setOpen(false)}>
            Entrar
          </Link>
        </nav>
      )}
    </header>
  );
}
