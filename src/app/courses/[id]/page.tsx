"use client"
import Navbar from "@/components/Navbar"
import Image from "next/image"
import { Share2, X, Copy, Heart, LogIn } from "lucide-react"
import ShareContentModal from "@/components/ShareContentModal"
import {useState} from "react"
import getUrl from "@/utils/getUrl"

export default function CourseDetails() {
    const [modalOpen, setModalOpen] = useState(true)
    const closeModal = () => setModalOpen(false)
    const url = getUrl()

    return (
        <>
            <Navbar />
            
            {/* Banner */}
            <section className="w-full">
                <div className="relative w-full h-[540px]">
                    <Image
                        src="/heroBanner.jpg"
                        alt="Banner"
                        fill
                        className="object-cover"
                    />
                </div>
            </section>
            {modalOpen && (
              <ShareContentModal onClose={closeModal}
              url={url} 
              />  
            )}

            {/* Course content */}
            <section className="px-15 pt-15 pb-12">
                <div className="flex items-start justify-between">
                    <div className="flex max-w-2xl flex-col gap-5">
                        <h1 className="text-3xl font-bold text-[#252525]">
                            VSCode para iniciantes
                        </h1>
                        <p className="text-sm leading-relaxed text-[#252525]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
                            <Heart className="h-4 w-4" />
                            Favoritar
                        </button>
                        <button className="flex items-center gap-2 rounded-md bg-[#792BF9] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#6420D6]">
                            <LogIn className="h-4 w-4" />
                            Iniciar curso
                        </button>
                    </div>
                </div>
            </section>

           
            <button className="fixed bottom-8 right-8 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg transition hover:bg-gray-50">
                <Share2 className="h-5 w-5 text-gray-600" />
            </button>
        </>
    )
}