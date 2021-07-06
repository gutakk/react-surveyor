import React from 'react'

import authBackground from 'assets/images/auth-background.png'
import Alert, { alertIcon } from 'components/Alert'
import AuthHeader from 'components/AuthHeader'
import BackButton from 'components/BackButton'
import Background from 'components/Background'
import ForgotPasswordForm from 'screens/ForgotPassword/form'
import SubmitHandler from 'screens/ForgotPassword/handler'

const ForgotPassword = (): JSX.Element => {
  const { requestSuccess, error, handleSubmit } = SubmitHandler()

  return (
    <Background
      backgroundImage={authBackground}
      pageClassName="forgot-password"
      context="auth"
      dataTestID="forgotPassword"
    >
      <BackButton />
      <div className="container-auth">
        <AuthHeader label="Enter your email to receive instructions for resetting your password" />
        {requestSuccess && (
          <Alert
            title="Check your email"
            detail="We've email you instructions to reset your password"
            icon={alertIcon.bell}
          />
        )}
        {error && <Alert title="Unable to send recovery email" detail={error} icon={alertIcon.error} />}
        <ForgotPasswordForm submitHandler={handleSubmit} />
      </div>
    </Background>
  )
}

export default ForgotPassword
