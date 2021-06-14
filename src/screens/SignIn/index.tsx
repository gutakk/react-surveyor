import React from 'react'
import { Redirect } from 'react-router-dom'

import authBackground from 'assets/images/auth-background.png'
import Alert from 'components/Alert'
import AuthLogo from 'components/AuthLogo'
import Background from 'components/Background'
import SignInForm from 'screens/SignIn/form'
import SubmitHandler from 'screens/SignIn/handler'

const SignIn = (): JSX.Element => {
  const { requestSuccess, error, handleSubmit } = SubmitHandler()

  if (requestSuccess) {
    return <Redirect to="/" />
  }

  return (
    <Background backgroundImage={authBackground}>
      <div className="container-sign-in">
        <AuthLogo label="Sign in to Nimble" />
        {error && <Alert title="Unable to sign in" detail={error} />}
        <SignInForm submitHandler={handleSubmit} />
      </div>
    </Background>
  )
}

export default SignIn
