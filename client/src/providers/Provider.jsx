'use client'
import { SessionProvider, useSession } from 'next-auth/react'

export default function Provider({ children }) {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  )
}