import Image from 'next/image'
import Link from 'next/link'
import { ForkKnife } from 'lucide-react'
import Footer from '@/components/Footer'

export default function WelcomePage() {
  return (
    <section>
      <div className="min-h-screen bg-white flex flex-col md:grid md:grid-cols-2">
        <div className="hidden md:block relative">
          <Image
            src="/images/auth.png"
            alt="Family eating Nigerian food"
            fill
            priority
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div className="relative md:hidden w-full h-[40vh]">
            <Image
              src="/images/welcomeMobile.webp"
              alt="Nigerian food"
              fill
              priority
              className="object-cover"
            />
          </div>

          <header className="flex items-center justify-between px-6 pt-6 md:px-12-_">
            <h2
              className="font-serif text-3xl md:text-4xl italic text-orange-500"
              style={{ fontFamily: 'cursive' }}
            >
              Chuks Kitchen
            </h2>

            <Link
              href="/signin"
              className="px-5 py-2 border border-[] text-blue-600 rounded-xl hover:bg-blue-50 transition text-sm font-medium cursor-pointer"
            >
              Sign In
            </Link>
          </header>

          <main className="px-6 md:px-12 py-10 flex flex-col gap-8  justify-center md:max-w-[700px] mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 ">Your Authentic Taste of Nigeria</h2>

            <p className="text-gray-700 text-base text-[16px]">
              Experience homemade flavors delivered fresh to your desk or home. We bring the rich
              culinary heritage of Nigeria right to your doorstep.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black ">
              {['Freshly Prepared', 'Support Local Business', 'Fast & Reliable Delivery'].map(
                (item) => (
                  <div
                    key={item}
                    className="flex items-center  gap-3   px-4 py-3  text-sm font-medium bg-[#F3F4F6] md: bg-none [400px] md:w-auto rounded-xl  md:bg-none md:border-none md:p-0 md:w-auto"
                  >
                    <span className="text-[#FF7A18] bg-[#FFE1C4] rounded-xl border border-orange-200 p-3 ">
                      <ForkKnife className="h-5 w-5 " />
                    </span>
                    {item}
                  </div>
                ),
              )}
            </div>

            <div className="flex flex-col gap-4 pt-4 w-full">
              <Link
                href="/order"
                className="py-4 bg-[#FF7A18] hover:bg-[#FF7A18] text-white font-semibold rounded-xl text-center shadow-md"
              >
                Start Your Order
              </Link>

              <Link
                href="/about"
                className="py-4 border-2 border-[#1E88E5] text-[#1E88E5] font-semibold rounded-xl text-center hover:bg-blue-50"
              >
                Learn More About Us
              </Link>
            </div>
          </main>

          <footer className="text-center text-sm text-gray-500 py-8">
            © 2024 Chuks Kitchen.
            <Link href="#" className="ml-2 text-blue-600">
              Privacy Policy
            </Link>
            <Link href="#" className="ml-2 text-blue-600">
              Terms of Service
            </Link>
          </footer>
        </div>
      </div>
      <Footer />
    </section>
  )
}
