'use client'

import { Mail } from 'lucide-react'
import Link from 'next/link'
import PasswordInput from '@/components/auth/PasswordInput'
import SocialButtons from '@/components/auth/SocialButtons'
import TextInput from '@/components/auth/BaseInput'

export default function SignInPage() {
  return (
    <div className="w-full space-y-8">
      <div className="text-center">
        <h2
          className="font-serif text-3xl md:text-4xl italic text-orange-500"
          style={{ fontFamily: 'cursive' }}
        >
          Chuks Kitchen
        </h2>
        <p className="text-black font-medium text-xl">Login your Account</p>
      </div>

      <form className="space-y-4">
        <TextInput
          label="Email or phone number"
          type="email"
          placeholder="name@gmail.com"
          required
          icon={<Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-black" />}
        />

        <PasswordInput label="Password" placeholder="••••••••" />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center">
            <input
              type="checkbox"
              className="h-4 w-4 border-gray-300 rounded text-[#FF7A18] focus:ring-orange-500"
            />
            <span className="ml-2 text-gray-700">Remember me</span>
          </label>

          <Link href="/forgot-password" className="text-blue-400 hover:underline">
            Forgot password?
          </Link>
        </div>

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
        Don't have an account?{' '}
        <Link href="/signup" className="text-blue-400 font-medium hover:underline">
          Create an account
        </Link>
      </p>
    </div>
  )
}
