'use client'

import MenuCard from '@/components/ui/menu-card'
import BaseLayout from '@/components/layouts/BaseLayout'

const categories = [
  {
    title: 'Jollof Delights',
    image: '/images/Property.webp',
    href: '/category/jollof',
  },
  {
    title: 'Swallow & Soups',
    image: '/images/Property2.webp',
    href: '/category/swallow',
  },
  {
    title: 'Grills & BBQ',
    image: '/images/Property3.webp',
    href: '/category/grills',
  },
  {
    title: 'Sweet Treats',
    image: '/images/Property4.webp',
    href: '/category/sweets',
  },
  {
    title: 'Swallow & Soups',
    image: '/images/Property2.webp',
    href: '/category/swallow',
  },
  {
    title: 'Grills & BBQ',
    image: '/images/Property3.webp',
    href: '/category/grills',
  },
]

export default function HomePage() {
  return (
    <>
      <div className="h-12 md:h-20" />
      <section className="bg-white pb-16 md:pb-24">
        <BaseLayout>
          <div className="relative -mt-18 md:-mt-30 mb-12 md:mb-16 max-w-3xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="What are you craving for today?"
                className="w-full pl-14 pr-6 py-4 md:py-5 bg-white border border-gray-200 rounded text-base md:text-lg placeholder:text-gray-500 shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
              />
              <div className="absolute left-5 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="text-center mb-10 md:mb-14">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
              Popular Categories
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 text-center">
            {categories.map((item) => (
              <MenuCard key={item.href} title={item.title} image={item.image} href={item.href} />
            ))}
          </div>
        </BaseLayout>
      </section>
    </>
  )
}
