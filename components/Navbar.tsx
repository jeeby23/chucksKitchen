'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import BaseLayout from './layouts/BaseLayout'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '/my-orders', label: 'My Orders' },
    { href: '/account', label: 'Account' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <BaseLayout>
        <div className="flex items-center justify-between h-13 md:h-14">
          <Link
            href="/"
            className="text-2xl md:text-3xl font-bold italic text-[#FF7A18] tracking-tight"
            style={{ fontFamily: 'cursive' }}
          >
            Chuks Kitchen
          </Link>

          <div className="hidden md:flex items-center justify-around gap-8 lg:gap-12 ">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  pathname === link.href
                    ? 'text-orange-500 font-medium'
                    : 'text-gray-600 hover:text-orange-400 px-12'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <Link
            href="/signin"
            className="hidden md:inline-flex px-6 py-2.5 bg-[#FF7A18] hover:bg-[#eb9659] text-white font-medium text-sm rounded-lg transition shadow-sm"
          >
            Login
          </Link>

          <button
            className="md:hidden text-gray-700 focus:outline-none cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </BaseLayout>
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="max-w-screen-7xl mx-auto px-5 py-6 flex flex-col gap-5 cursor-pointer">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-800 hover:text-orange-600 font-medium text-lg transition-colors "
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            <Link
              href="/(auth)/signin"
              className="mt-3 inline-flex justify-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
