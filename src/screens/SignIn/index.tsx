import React from 'react'

import SignInForm from 'screens/SignIn/form'

const SignIn = (): JSX.Element => {
  return (
    <div className="app">
      <p>Logo</p>
      <p>Sign in to Nimble</p>
      <SignInForm />
    </div>
  )
}

export default SignIn
