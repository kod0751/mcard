import Form from '@/components/Signin/Form'
import { FormValues } from '@/models/signin'
import { useCallback } from 'react'

export default function SigninPage() {
  const handleSubmit = useCallback((formValues: FormValues) => {
    console.log('온전한값', formValues)
  }, [])

  return (
    <div>
      <Form onSubmit={handleSubmit} />
    </div>
  )
}
