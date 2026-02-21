import React from 'react'
interface Props {
  children: React.ReactNode
}

export default function AuthRightPanel({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 px-8 py-6">
      <main className="flex flex-1 flex-col justify-center max-w-md mx-auto w-full py-8 md:py-12">
        {children}
      </main>
    </div>
  )
}
