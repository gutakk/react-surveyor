import React from 'react'
import { Redirect } from 'react-router-dom'

import SignInForm from 'screens/SignIn/form'
import SubmitHandler from 'screens/SignIn/handler'

const SignIn = (): JSX.Element => {
  const handler = SubmitHandler()

  if (handler.requestSuccess) {
    return <Redirect to="/" />
  }

  return (
    <div>
      <p>Logo</p>
      <p>Sign in to Nimble</p>

      {handler.error && <div>{handler.error}</div>}
      <SignInForm submitHandler={handler.handleSubmit} />
    </div>
  )
}

export default SignIn
