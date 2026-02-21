import Image from 'next/image'
import BaseLayout from '@/components/layouts/BaseLayout'

export default function ExploreHero() {
  return (
    <section className="relative h-[50vh] sm:h-[60vh] md:h-[65vh] lg:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/exploreHero.webp"
          alt="Chuks Kitchen Nigerian home cooking feast – assorted dishes on wooden table"
          fill
          priority
          className="object-cover object-center brightness-75"
          sizes="100vw"
          quality={85}
        />

        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/40 to-transparent" />
      </div>

      <div className="relative z-10 right-10 md:right-[345px] h-full flex items-center   text-white ">
        <BaseLayout>
          <div className=" space-y-6 md:space-y-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight drop-shadow-2xl">
              Chuks Kitchen
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium  leading-relaxed drop-shadow-lg">
              Chuks Kitchen Nigerian Home Cooking 4.8 (1.2k)
            </p>
          </div>
        </BaseLayout>
      </div>
    </section>
  )
}
