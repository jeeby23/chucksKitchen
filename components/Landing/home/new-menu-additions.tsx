import Image from 'next/image'
import Link from 'next/link'
import BaseLayout from '@/components/layouts/BaseLayout'

export default function NewMenuAdditions() {
  return (
    <section className="relative bg-linear-to-b from-orange-50/30 to-white py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/beforeFooter.webp"
          alt="New menu dish introduction – Nigerian cuisine special"
          fill
          priority
          className="object-cover object-center brightness-90"
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10">
        <BaseLayout>
          <div className="  space-y-6 md:space-y-8 lg:space-y-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-white leading-tight drop-shadow-lg">
              Introducing Our New Menu Additions!
            </h2>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95  leading-relaxed drop-shadow-md max-w-2xl font-semibold">
              Explore exciting new dishes, crafted with the freshest ingredients and authentic
              Nigerian flavors.
              <span className="font-semibold">Limited time offer!</span>
            </p>

            <div>
              <Link
                href="#"
                className="inline-block px-7 py-4 md:px-5 md:py-5 bg-[#FF7A18] hover:bg-orange-400 text-white font-semibold text-lg md:text-xl rounded transition shadow-xl active:scale-95"
              >
                Discover what's new
              </Link>
            </div>
          </div>
        </BaseLayout>
      </div>
    </section>
  )
}
