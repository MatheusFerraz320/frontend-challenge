'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Search, User, LogIn } from 'lucide-react';
import type { FormEvent } from 'react';
import { useState } from 'react';
import NavbarLogoTextSvg from './NavbarLogoTextSvg';

type NavbarProps = {
  searchValue: string;
  onSearchChange: (value: string) => void;
};

export default function Navbar({ searchValue, onSearchChange }: NavbarProps) {
  const [isOpen, setOpen] = useState(false);

  const toggleMobileMenu = () => setOpen((current) => !current);
  const handleSearchSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    document.getElementById("coursesList")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="relative mx-auto flex h-[75px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-[60px]">
      
      {/* Desktop - Search */}
      <form
        onSubmit={handleSearchSubmit}
        className="group hidden lg:flex items-center gap-2 transition-all hover:opacity-80"
      >
        <Search
          className="h-4 w-4 text-[#792BF9] transition-transform group-hover:scale-110"
          strokeWidth={1.5}
        />
        <input
          type="text"
          name="search"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="Busca"
          className="bg-transparent text-base font-semibold leading-[116%] text-black outline-none placeholder:text-black"
        />
      </form>

      {/* Mobile - left*/}
      <div className="flex items-center gap-3 lg:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col justify-center items-start gap-1 p-1"
          aria-label="Menu"
          aria-expanded={isOpen}
        >
          <span className="block h-0.5 w-5 bg-purple-300 rounded"></span>
          <span className="block h-0.5 w-5 bg-purple-300 rounded"></span>
          <span className="block h-0.5 w-5 bg-purple-300 rounded"></span>
        </button>

        <form
          onSubmit={handleSearchSubmit}
          className="group flex min-w-0 items-center gap-2 transition-all hover:opacity-80"
        >
          <Search
            className="h-4 w-4 shrink-0 text-[#792BF9] transition-transform group-hover:scale-110"
            strokeWidth={1.5}
          />
          <input
            type="text"
            name="search"
            value={searchValue}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Busca"
            className="w-16 bg-transparent text-base font-semibold leading-[116%] text-black outline-none placeholder:text-black sm:w-28"
          />
        </form>
      </div>

      {/* LOGO  middle */}
      <Link
        href="/"
        className="absolute left-1/2 top-[24px] -translate-x-1/2 flex items-center gap-1.5"
      >
        <div className="rounded-[4px] bg-[#ECE8FF] p-1">
          <Image
            src="/evobLogo.png"
            alt="Evob Logo"
            width={32}
            height={32}
            className="h-auto w-auto"
          />
        </div>

        <NavbarLogoTextSvg />
      </Link>

      {/* Desktop - right*/}
      <nav className="hidden lg:flex items-center gap-5">
        <Link
          href="/register"
          className="group flex items-center gap-2 transition-all hover:opacity-80"
        >
          <User className="h-5 w-5 text-[#792BF9]" strokeWidth={1.5} />

          <p className="font-semibold text-base leading-[116%] text-black">
            Cadastre-se
          </p>
        </Link>

        <Link
          href="/login"
          className="flex items-center gap-2 bg-[#792BF9] px-3 py-2 text-white transition-colors hover:bg-[#6920e0]"
        >
          <LogIn className="h-5 w-5 text-white" strokeWidth={2.5} />

          <span className="text-base font-bold leading-[116%]">
            Entrar
          </span>
        </Link>
      </nav>

      {/* Mobile - Login */}
      <Link href="/login" className="lg:hidden flex items-center">
        <LogIn className="h-5 w-5 text-[#792BF9]" strokeWidth={2.5} />
      </Link>

      {isOpen && (
        <nav className="absolute left-4 right-4 top-[75px] z-50 flex flex-col gap-3 rounded-xl border border-purple-100 bg-white p-4 shadow-lg lg:hidden">
          <Link
            href="/register"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-semibold text-black"
          >
            <User className="h-5 w-5 text-[#792BF9]" strokeWidth={1.5} />
            Cadastre-se
          </Link>

          <Link
            href="/login"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2 font-semibold text-black"
          >
            <LogIn className="h-5 w-5 text-[#792BF9]" strokeWidth={1.5} />
            Entrar
          </Link>
        </nav>
      )}
    </header>
  );
}
