'use client'

import { signIn, useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { data: session, status } = useSession()

  if (status === 'loading') {
    return <p>Loading...</p>
  }

  if (session) {
    redirect('/dashboard')
  }

  const handleLogin = async e => {
    e.preventDefault()
    signIn('credentials', {
      email,
      password,
      callbackUrl: `${window.location.origin}/dashboard`,
    })
  }

  const handleEmail = e => {
    setEmail(e.target.value)
  }

  const handlePassword = e => {
    setPassword(e.target.value)
  }

  return (
    <main>
      <h1>Login Page</h1>
      <form action='post'>
        <input type='email' placeholder='Email' onChange={handleEmail} />
        <input type='password' placeholder='Password' onChange={handlePassword} />
        <button type='submit' onClick={handleLogin}>
          Login
        </button>
      </form>
    </main>
  )
}
