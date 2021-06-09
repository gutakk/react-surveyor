import React, { useState } from 'react'

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
    setRequestSuccess(true)
    setError('world')
  }

  return {
    requestSuccess: requestSuccess,
    error: error,
    handleSubmit: handleSubmit
  }
}

export default SubmitHandler
