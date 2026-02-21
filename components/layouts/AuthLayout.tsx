import Image from 'next/image'
import React from 'react'
import AuthRightPanel from './AuthRightPanel'
import Footer from '@/components/Footer'

interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <section>

    <div className="min-h-auto grid md:grid-cols-2">
      <div className="relative hidden md:block">
        <Image src="/images/auth.png" alt="Food" fill priority className="object-cover" />

        <div className="absolute inset-0 bg-[rgba(255,122,24,0.7)] z-10" />

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center min-h-auto text-center px-4">
          <span className="">
            <h2 className="text-white text-4xl font-bold tracking-wide">Chuks Kitchen</h2>
            <p className="text-white text-center px-4 max-w-72.5">
              Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to
              order your favorites today!
            </p>
          </span>
        </div>
      </div>

      <AuthRightPanel>
        {children}
        </AuthRightPanel>
    </div>
        <Footer/>
    </section>
  )
}
