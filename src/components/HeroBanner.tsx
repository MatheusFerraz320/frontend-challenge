import Image from 'next/image';

export default function HeroBanner() {
  return (
    <section className="relative w-full h-[420px] md:h-[500px] lg:h-[540px] overflow-hidden bg-[#792BF9]">

      <div className="hidden lg:flex h-full">

        {/* LEFT*/}
        <div className="w-[28%] flex flex-col justify-center px-12 xl:px-20 gap-8 z-10">
          <h1 className="text-white text-5xl xl:text-6xl font-bold leading-tight whitespace-nowrap">
            Aprenda a criar<br />
            uma plataforma<br />
            LMS do zero
          </h1>

          <button className="bg-black text-white text-lg font-medium px-12 py-4 w-fit">
            Conheça as aulas
          </button>
        </div>

        {/* RIGHT */}
        <div className="w-[75%] relative overflow-hidden">

          <Image
            src="/heroBanner.jpg"
            alt="Estudante aprendendo"
            fill
            priority
            sizes="60vw"
            className="object-cover "
          />

          <div className="absolute inset-0 bg-black/20" />

          {/* GEOMETRIC */}
          <div
            className="
              absolute inset-0 bg-[#792BF9]
              [clip-path:polygon(0_0,15%_0,3%_100%,0_100%)]
              transform-gpu
              scale-[1.01]
            "
          />

        </div>

      </div>

      {/* MOBILE */}
      <div className="lg:hidden relative h-full">

        <Image
          src="/heroBanner.jpg"
          alt="Estudante aprendendo"
          fill
          priority
          sizes="100vw"
          className="object-cover scale-125 object-[70%_center]"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 flex flex-col justify-center h-full px-6 gap-6">
          <h1 className="text-white text-4xl font-bold leading-tight">
            Aprenda a criar uma<br />
            plataforma LMS do<br />
            zero
          </h1>

          <button className="bg-black text-white text-lg font-medium px-10 py-4 w-fit">
            Conheça as aulas
          </button>
        </div>

      </div>

    </section>
  );
}