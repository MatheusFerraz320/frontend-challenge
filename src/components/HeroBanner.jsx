import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden bg-[#792BF9]">

      {/* Desktop */}
      <div className="hidden lg:flex h-full">

        {/* Esquerdo */}
        <div className="w-1/2 flex flex-col justify-start pt-24 px-12 xl:px-20 gap-10">
          <h1 className="text-white text-5xl xl:text-6xl font-bold leading-tight">
            Aprenda a criar<br />
            uma plataforma<br />
            LMS do zero
          </h1>

          <button className="bg-black text-white 
          text-lg font-medium 
          px-12 py-4 w-fit ">
            Conheça as aulas
          </button>
        </div>

        {/* Direita */}
        <div className="w-1/2 relative overflow-hidden">
          <Image
            src="/heroBanner.jpg"
            alt="Estudante aprendendo"
            fill
            priority
            sizes="50vw"
            className="object-cover [clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]"
          />
        </div>

      </div>

      {/* Mobile */}
      <div className="lg:hidden relative h-full">

        <Image
          src="/heroBanner.jpg"
          alt="Estudante aprendendo"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_20%] scale-125"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 gap-6">
          <h1 className="text-white text-4xl font-bold leading-tight">
            Aprenda a criar uma<br />
            plataforma LMS do<br />
            zero
          </h1>

          <button className="bg-black text-white text-lg font-medium px-10 py-5 w-fit">
            Conheça as aulas
          </button>
        </div>

      </div>

    </section>
  );
}



