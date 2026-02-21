'use client'
import { useState } from 'react'
import { Lock, Eye, EyeOff } from 'lucide-react'

interface Props {
  label: string
  placeholder: string
}

export default function PasswordInput({ label, placeholder }: Props) {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <div className="space-y-1">
      <label className="text-sm font-medium text-gray-700 text-left">{label}</label>
      <div className="relative">
        <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-black" />
        <input
          type={isVisible ? 'text' : 'password'}
          placeholder={placeholder}
          className="w-full rounded-lg border border-gray-300 py-3 pl-10 pr-10 outline-none transition focus:border-orange-500 focus:ring-1 focus:ring-orange-500 text-black"
        />
        <button
          type="button"
          onClick={() => setIsVisible(!isVisible)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
        >
          {isVisible ? (
            <EyeOff className="h-5 w-5 text-black" />
          ) : (
            <Eye className="h-5 w-5 text-black" />
          )}
        </button>
      </div>
    </div>
  )
}
