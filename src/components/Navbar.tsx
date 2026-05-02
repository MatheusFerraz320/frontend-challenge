'use client';

import Link from 'next/link';
import { useState } from 'react';
import { User, LogIn, X } from 'lucide-react';
import AuthLogo from './AuthLogo';
import type { Course } from '@/types/course';
import { filterCourse } from '@/utils/filterCourse';

type NavbarProps = {
  courses?: Course[];
};

export default function Navbar({
  courses = [],
}: NavbarProps) {
  const [isOpen, setOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const normalizedSearch = searchValue.trim().toLowerCase();
  const filteredCourses = normalizedSearch
    ? courses.filter((course) => filterCourse(course, normalizedSearch))
    : courses;

  const toggleMobileMenu = () => setOpen((c) => !c);
  const openSearchModal = () => setSearchModalOpen(true);
  const closeSearchModal = () => setSearchModalOpen(false);

  return (
    <header className="relative mx-auto flex h-[75px] w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-[60px]">

      {/* DESKTOP SEARCH */}
      <button
        type="button"
        onClick={openSearchModal}
        className="hidden lg:flex items-center gap-2"
        aria-label="Buscar cursos"
      >
        <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
          <path
            d="M19.6959 18.2168L14.7656 13.2662C16.0332 11.8113 16.7278 9.98069 16.7278 8.07499C16.7278 3.62251 12.9757 0 8.36391 0C3.75212 0 0 3.62251 0 8.07499C0 12.5275 3.75212 16.15 8.36391 16.15C10.0952 16.15 11.7451 15.6458 13.1557 14.6888L18.1235 19.677C18.3311 19.8852 18.6104 20 18.9097 20C19.193 20 19.4617 19.8957 19.6657 19.7061C20.0992 19.3034 20.113 18.6357 19.6959 18.2168ZM8.36391 2.10652C11.7727 2.10652 14.5459 4.78391 14.5459 8.07499C14.5459 11.3661 11.7727 14.0435 8.36391 14.0435C4.95507 14.0435 2.18189 11.3661 2.18189 8.07499C2.18189 4.78391 4.95507 2.10652 8.36391 2.10652Z"
            fill="#792BF9"
          />
        </svg>
        <span className="text-base font-semibold text-black">Busca</span>
      </button>

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

        {/* MOBILE SEARCH  */}
        <button
          type="button"
          onClick={openSearchModal}
          className="p-1"
          aria-label="Buscar cursos"
        >
          <svg width="24" height="24" viewBox="0 0 20 20" fill="none">
            <path
              d="M19.6959 18.2168L14.7656 13.2662C16.0332 11.8113 16.7278 9.98069 16.7278 8.07499C16.7278 3.62251 12.9757 0 8.36391 0C3.75212 0 0 3.62251 0 8.07499C0 12.5275 3.75212 16.15 8.36391 16.15C10.0952 16.15 11.7451 15.6458 13.1557 14.6888L18.1235 19.677C18.3311 19.8852 18.6104 20 18.9097 20C19.193 20 19.4617 19.8957 19.6657 19.7061C20.0992 19.3034 20.113 18.6357 19.6959 18.2168ZM8.36391 2.10652C11.7727 2.10652 14.5459 4.78391 14.5459 8.07499C14.5459 11.3661 11.7727 14.0435 8.36391 14.0435C4.95507 14.0435 2.18189 11.3661 2.18189 8.07499C2.18189 4.78391 4.95507 2.10652 8.36391 2.10652Z"
              fill="#792BF9"
            />
          </svg>
        </button>
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

      {searchModalOpen && (
        <div className="fixed inset-0 z-[100] bg-black/40 px-4 py-8">
          <div className="mx-auto w-full max-w-xl rounded-lg bg-white p-5 shadow-xl">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-lg font-semibold text-gray-950">
                Buscar cursos
              </h2>

              <button
                type="button"
                onClick={closeSearchModal}
                className="flex h-9 w-9 items-center justify-center rounded-md hover:bg-gray-100"
                aria-label="Fechar busca"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>

            <input
              autoFocus
              type="text"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Digite o nome do curso"
              className="mb-4 w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-950 outline-none transition focus:border-[#792BF9] focus:ring-2 focus:ring-[#792BF9]/20"
            />

            <div className="max-h-[360px] overflow-y-auto">
              {filteredCourses.length === 0 ? (
                <p className="py-6 text-center text-sm text-gray-500">
                  Nenhum curso encontrado.
                </p>
              ) : (
                <div className="flex flex-col gap-2">
                  {filteredCourses.map((course) => (
                    <Link
                      key={course.id}
                      href={`/courses/${course.id}`}
                      onClick={closeSearchModal}
                      className="rounded-md border border-gray-200 p-3 transition hover:border-[#792BF9] hover:bg-[#792BF9]/5"
                    >
                      <h3 className="font-medium text-gray-950">
                        {course.name}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-sm text-gray-600">
                        {course.description}
                      </p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
