import { useState, type FormEvent } from 'react'
import type { LoginFormValues } from '../types/auth.types'

export function useLoginForm() {
  const [values, setValues] = useState<LoginFormValues>({
    email: '',
    password: '',
    rememberMe: false,
  })

  function updateField(field: keyof LoginFormValues, value: string | boolean) {
    setValues((prev) => ({ ...prev, [field]: value }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log('Login submit:', values)
  }

  return {
    values,
    updateField,
    handleSubmit,
  }
}
