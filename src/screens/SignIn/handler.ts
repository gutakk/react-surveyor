import React, { useState } from 'react'

import AuthAdapter from 'adapters/auth'

type SubmitHandler = {
  requestSuccess: boolean
  error: string
  handleSubmit: (e: React.SyntheticEvent) => void
}

const SubmitHandler = (): SubmitHandler => {
  const [requestSuccess, setRequestSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }

    console.log(AuthAdapter.signIn(target.email.value, target.password.value))

    setRequestSuccess(false)
    setError('Login Unsuccessfully')
  }

  return {
    requestSuccess: requestSuccess,
    error: error,
    handleSubmit: handleSubmit
  }
}

export default SubmitHandler
