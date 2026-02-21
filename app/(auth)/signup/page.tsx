'use client'

import { Mail, Phone, User } from 'lucide-react'
import Link from 'next/link'
import PasswordInput from '@/components/auth/PasswordInput'
import SocialButtons from '@/components/auth/SocialButtons'
import TextInput from '@/components/auth/BaseInput'

export default function SignUpPage() {
  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2
          className="font-serif text-3xl md:text-4xl italic text-orange-500"
          style={{ fontFamily: 'cursive' }}
        >
          Chuks Kitchen
        </h2>
        <p className=" text-black font-medium text-xl">Create Your Account</p>
      </div>

      <form className="space-y-6">
        <TextInput
          label="Email"
          type="email"
          placeholder="name@gmail.com"
          required
          icon={<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />}
        />
        <TextInput
          label="Phone Number"
          type="number"
          placeholder="08012*********"
          required
          icon={<Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />}
        />

        <PasswordInput label="Password" placeholder="••••••••" />

        <PasswordInput label="Confirm Password" placeholder="••••••••" />

        <label className="flex items-center text-sm">
          <input
            type="checkbox"
            className="h-4 w-4 border-gray-300 rounded text-orange-600 focus:ring-orange-500"
          />
          <span className="ml-2 text-gray-700">
            I agree to the <span className="text-blue-400">Terms</span> and
            <Link href="/(Landing)/home" className="ml-1 text-blue-400 hover:underline">
              <span className="text-blue-400">Privacy Policy</span>
            </Link>
          </span>
        </label>

        <button
          type="submit"
          className="w-full py-4 bg-[#FF7A18] text-white font-semibold text-lg rounded-xl hover:bg-orange-400 transition shadow-md cursor-pointer"
        >
          Continue
        </button>
      </form>

      <div className="relative my-8">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>

        <div className="relative flex justify-center text-sm">
          <span className="px-4 bg-gray-50 text-gray-500">Or continue with</span>
        </div>
      </div>

      <SocialButtons />

      <p className="text-center text-sm text-gray-600 pt-6">
        Already have an account?{' '}
        <Link href="/signin" className="text-blue-400 font-medium hover:underline">
          Sign in
        </Link>
      </p>
    </div>
  )
}
