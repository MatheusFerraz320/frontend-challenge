"use client"

import Navbar from "@/components/Navbar"
import Image from "next/image"
import { Share2, LogIn } from "lucide-react"
import ShareContentModal from "@/components/ShareContentModal"
import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import getUrl from "@/utils/getUrl"
import fetchCourseDetails from "@/services/fetchCourseDetails"
import LoadingAnimation from "@/components/LoadingAnimation"
import type { ApiCourse } from "@/types/course"
import CourseFavoriteSvg from "@/components/CourseFavoriteSvg"
import Footer from "@/components/Footer"
import Link from "next/link"

export default function CourseDetails() {
  const [modalOpen, setModalOpen] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [course, setCourse] = useState<ApiCourse | null>(null)
  const [isFavorite, setIsFavorite] = useState(false)

  const params = useParams()
  const id = params?.id ? Number(params.id) : null

  const url = getUrl()
  const courseActions = (
    <>
      <button
        onClick={() => setIsFavorite((current) => !current)}
        className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
      >
        <CourseFavoriteSvg
          isFavorite={isFavorite}
          inactiveColor="#4b5563"
        />
        Favoritar
      </button>

      <Link
        href="/register"
        className="flex items-center justify-center gap-2 rounded-md bg-[#792BF9] px-4 py-2 text-sm font-medium text-white hover:bg-[#6420D6]"
      >
        <LogIn className="h-4 w-4" />
        Iniciar curso
      </Link>
    </>
  )

  useEffect(() => {
    if (!id) return

    async function loadCourse(courseId: number) {
      try {
        setLoading(true)
        setError(null)

        const data = await fetchCourseDetails(courseId)

        if (!data) {
          throw new Error("Curso não encontrado")
        }

        setCourse(data)

      } catch (err) {
        console.error("Erro real:", err)
        setError("Não foi possível carregar o curso.")
      } finally {
        setLoading(false)
      }
    }

    loadCourse(id)
  }, [id])


  if (loading) return <LoadingAnimation message="Carregando curso..." />
  if (error) return <p className="p-6">{error}</p>
  if (!course) return <p className="p-6">Curso não encontrado</p>

  return (
    <>
      <Navbar
        searchValue={searchValue}
        onSearchChange={setSearchValue}
      />

      {/* Banner */}
      <section className="w-full">
        {course.banner && (
          <div className="relative w-full h-[540px]">
            <Image
              src={course.banner}
              alt={course.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </section>

      <div className="flex flex-col gap-3 px-6 py-6 md:hidden">
        {courseActions}
      </div>

      {/* Modal */}
      {modalOpen && (
        <ShareContentModal onClose={() => setModalOpen(false)} url={url} />
      )}

      {/* Content */}
      <section className="px-15 pt-15 pb-12">
        <div className="flex items-start justify-between">
          
          <div className="flex max-w-2xl flex-col gap-5">
            <h1 className="text-3xl font-bold text-[#252525]">
              {course.title}
            </h1>

            <p className="text-sm leading-relaxed text-[#252525]">
              {course.long_description || "Sem descrição disponível."}
            </p>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            {courseActions}
          </div>

        </div>
      </section>

      
      <button
        onClick={() => setModalOpen(true)}
        className="fixed bottom-[111px] right-[68px] flex h-12 w-12 
        items-center justify-center rounded-full bg-white 
        shadow-lg hover:bg-gray-50"
      >
        <Share2 className="h-5 w-5 text-gray-600" />
      </button>
      <Footer />
    </>
  )
}
