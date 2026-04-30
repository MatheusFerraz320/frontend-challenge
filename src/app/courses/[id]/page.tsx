import Navbar from "@/components/Navbar"
import Image from "next/image"
export default function CourseDetails () {
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

        <section className="px-15 pt-15 pb-12">
        <div className="flex flex-col gap-5">
            <h1 className="text-3xl font-bold">
            Titulo do curso
            </h1>
            <p className="text-sm text-color[#252525]">
                Descrição do curso
            </p>
        </div>
        </section>

        
        
        
        
        
        
         </>
    )
}


