'use client'

import React from 'react'

interface Props {
  label: string
  placeholder: string
  type?: string
  required?: boolean
  icon?: React.ReactNode
}

export default function TextInput({ label, placeholder, type = 'text', required, icon }: Props) {
  return (
    <div>
      <label className="block text-sm font-medium text-black mb-1 text-left">{label}</label>

      <div className="relative">
        {icon}

        <input
          type={type}
          placeholder={placeholder}
          required={required}
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black"
        />
      </div>
    </div>
  )
}
