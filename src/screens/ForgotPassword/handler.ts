import React, { useState } from 'react'

import { AxiosResponse } from 'axios'

import AuthAdapter from 'adapters/auth'
import { allFieldsFilled } from 'helpers/formValidation'

type SubmitHandler = {
  requestSuccess: boolean
  error: string
  handleSubmit: (e: React.SyntheticEvent) => void
}

const SubmitHandler = (): SubmitHandler => {
  const [requestSuccess, setRequestSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      email: { value: string }
    }

    if (!allFieldsFilled([target.email.value])) {
      setError('Email is required')
      setRequestSuccess(false)
      return
    }

    await AuthAdapter.forgotPassword(target.email.value)
      .then(function (response: AxiosResponse) {
        if (response.status === 200) {
          setRequestSuccess(true)
          setError('')
        }
      })
      .catch(function (err) {
        if (err.response.status === 400) {
          setError('Invalid email')
        } else {
          setError('Something went wrong. Please try again')
        }
        setRequestSuccess(false)
      })
  }

  return {
    requestSuccess,
    error,
    handleSubmit
  }
}

export default SubmitHandler
