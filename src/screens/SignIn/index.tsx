import React from 'react'

import SignInForm from 'screens/SignIn/form'
import SubmitHandler from 'screens/SignIn/handler'

const SignIn = (): JSX.Element => {
  const handler = SubmitHandler()

  return (
    <div>
      <p>Logo</p>
      <p>Sign in to Nimble</p>
      <SignInForm submitHandler={handler.handleSubmit} />
    </div>
  )
}

export default SignIn
