import React from 'react'
import { Redirect } from 'react-router-dom'

import authBackground from 'assets/images/auth-background.png'
import Alert, { alertIcon } from 'components/Alert'
import AuthHeader from 'components/AuthHeader'
import Background from 'components/Background'
import SignInForm from 'screens/SignIn/form'
import SubmitHandler from 'screens/SignIn/handler'

const SignIn = (): JSX.Element => {
  const { requestSuccess, error, handleSubmit } = SubmitHandler()

  if (requestSuccess) {
    return <Redirect to="/" />
  }

  return (
    <Background backgroundImage={authBackground} pageClassName="sign-in">
      <div className="container-auth">
        <AuthHeader label="Sign in to Nimble" />
        {error && <Alert title="Unable to sign in" detail={error} icon={alertIcon.error} />}
        <SignInForm submitHandler={handleSubmit} />
      </div>
    </Background>
  )
}

export default SignIn
