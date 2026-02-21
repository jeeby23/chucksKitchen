'use client'

import Link from 'next/link'
import { ArrowUp } from 'lucide-react'
import BaseLayout from './layouts/BaseLayout'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-[#543A26] text-white py-16 relative overflow-hidden">
      <BaseLayout>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="space-y-6">
            <h2 className="text-[#FF7A18] text-3xl italic" style={{ fontFamily: 'cursive' }}>
              Chuks Kitchen
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed max-w-xs">
              Bringing the authentic flavors of Nigerian home cooking to your table, with passion
              and care.
            </p>
            <p className="text-sm text-gray-400 pt-8 hidden lg:block">
              © 2020 Lift Media. All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="/" className="hover:text-[#FF7A18] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/explore" className="hover:text-[#FF7A18] transition">
                  Explore
                </Link>
              </li>
              <li>
                <Link href="/my-orders" className="hover:text-[#FF7A18] transition">
                  My Order
                </Link>
              </li>
              <li>
                <Link href="/account" className="hover:text-[#FF7A18] transition">
                  Account
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FF7A18] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li>+234 801 234 5678</li>
              <li>hello@chukskitchen.com</li>
              <li>123 Taste Blvd, Lagos, Nigeria</li>
            </ul>
          </div>

          <div className="space-y-6">
            <ul className="space-y-4 text-gray-300">
              <li>
                <Link href="#" className="hover:text-[#FF7A18] transition">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7A18] transition">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7A18] transition">
                  Linkedin
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#FF7A18] transition">
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 lg:hidden border-t border-white/10 pt-6 text-sm text-gray-400">
          © 2020 Lift Media. All rights reserved.
        </div>

        <button
          onClick={scrollToTop}
          className="absolute right-8 bottom-8 md:right-12 md:bottom-12 bg-[#0084FF] p-4 rounded-full shadow-lg hover:bg-blue-500 transition-all active:scale-90 group"
          aria-label="Scroll to top"
        >
          <ArrowUp
            className="w-6 h-6 text-white"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          />
        </button>
      </BaseLayout>
    </footer>
  )
}
