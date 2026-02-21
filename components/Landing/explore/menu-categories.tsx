'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import BaseLayout from '@/components/layouts/BaseLayout'
import Link from 'next/link'

const menuItems = [
  { title: 'Popular', isHighlighted: true, href: '/menu/popular' },
  { title: 'Jollof Rice & Entrees', isHighlighted: false, href: '/menu/jollof-entrees' },
  { title: 'Swallow & Soups', isHighlighted: false, href: '/menu/swallow-soups' },
  { title: 'Grills & Sides', isHighlighted: false, href: '/menu/grills-sides' },
  { title: 'Beverages', isHighlighted: false, href: '/menu/beverages' },
  { title: 'Desserts', isHighlighted: false, href: '/menu/desserts' },
]

export default function MenuDropdown() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className="bg-white py-12 md:py-8">
      <BaseLayout>
        <div className="w-full">
          <button
            type="button"
            onClick={() => {
              console.log('clicked, isOpen will be:', !isOpen)
              setIsOpen((prev) => !prev)
            }}
            className="w-full flex items-center justify-between px-6 py-4 bg-white border border-gray-300 rounded-lg text-left text-lg font-medium text-gray-900 hover:bg-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
          >
            Menu Categories
            <ChevronDown
              className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </button>

          <div
            className={`w-full bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden transition-all duration-300 ${
              isOpen ? 'max-h-[600px] mt-1 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="px-6 py-4 border-b border-gray-100">
              <span className="text-base font-bold text-gray-900">Menu Categories</span>
            </div>

            <ul>
              {menuItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center px-6 py-4 text-base transition-colors border-l-4 ${
                      item.isHighlighted
                        ? 'border-orange-500 bg-orange-50 text-gray-900 font-semibold'
                        : 'border-transparent text-gray-800 hover:bg-gray-50 hover:border-orange-300'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BaseLayout>
    </section>
  )
}
