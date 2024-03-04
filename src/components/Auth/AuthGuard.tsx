import { auth } from '@/remote/firebase'
import { onAuthStateChanged } from 'firebase/auth'
import { useState } from 'react'

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const [initialize, setInitialize] = useState(false)

  onAuthStateChanged(auth, (user) => {
    setInitialize(true)
  })

  if (initialize === false) {
    return null
  }

  return <>{children}</>
}
