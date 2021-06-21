import React from 'react'
import { Redirect } from 'react-router-dom'

import SignInForm from 'screens/SignIn/form'
import SubmitHandler from 'screens/SignIn/handler'

const SignIn = (): JSX.Element => {
  const { requestSuccess, error, handleSubmit } = SubmitHandler()

  if (requestSuccess) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <img alt="NIMBLE" />
      <p>Sign in to Nimble</p>

      {error && <div>{error}</div>}
      <SignInForm submitHandler={handleSubmit} />
    </div>
  )
}

export default SignIn
