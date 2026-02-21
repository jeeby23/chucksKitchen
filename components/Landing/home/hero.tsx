import Image from 'next/image'
import Link from 'next/link'
import BaseLayout from '@/components/layouts/BaseLayout'

export default function HomePage() {
  return (
    <div className="relative min-h-auto  text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="Nigerian home cooking feast – jollof, plantain, grilled meat, soups, eba, etc."
          fill
          priority
          className="object-cover object-center brightness-90"
          sizes="100vw"
          quality={90}
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-1  py-16 md:py-24 lg:py-32  ">
          <BaseLayout>
            <div className="  md:max-w-4xl my-[200px]">
              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                The Heart of Nigerian Home Cooking
              </h1>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed py-7">
                Handcrafted with passion, delivered with care.
              </p>

              <div className="pt-6 md:pt-10">
                <Link
                  href="/explore"
                  className="inline-block px-10 py-4 md:px-12 md:py-5 bg-[#FF7A18] hover:bg-orange-400 text-white font-semibold text-lg md:text-xl rounded transition shadow-lg active:scale-95"
                >
                  Discover what's new
                </Link>
              </div>
            </div>
          </BaseLayout>
        </div>
      </div>
    </div>
  )
}
