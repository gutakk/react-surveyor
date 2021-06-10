import React, { useState, useContext } from 'react'

import AuthAdapter from 'adapters/auth'
import { AuthContext } from 'contexts/auth'

type SubmitHandler = {
  requestSuccess: boolean
  error: string
  handleSubmit: (e: React.SyntheticEvent) => void
}

const SubmitHandler = (): SubmitHandler => {
  const [requestSuccess, setRequestSuccess] = useState(false)
  const [error, setError] = useState('')
  const { dispatch } = useContext(AuthContext)

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault()

    const target = e.target as typeof e.target & {
      email: { value: string }
      password: { value: string }
    }

    await AuthAdapter.signIn(target.email.value, target.password.value)
      .then(function (response) {
        if (response.status === 200) {
          dispatch({
            type: 'AUTH',
            payload: response.data.data
          })
          setRequestSuccess(true)
        }
      })
      .catch(function (err) {
        if (err.response.status === 400) {
          setError('Invalid email or password')
        } else {
          setError('Something went wrong. Please try again')
        }
      })
  }

  return {
    requestSuccess: requestSuccess,
    error: error,
    handleSubmit: handleSubmit
  }
}

export default SubmitHandler
