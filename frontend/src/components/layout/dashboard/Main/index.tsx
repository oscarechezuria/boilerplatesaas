import React from 'react'

export default function Main({ children } : { children: React.ReactNode }) {
  return (
    <main className="flex-1 p-6">
        {children}
    </main>
  )
}

{/*max-h-64 overflow-y-auto */}