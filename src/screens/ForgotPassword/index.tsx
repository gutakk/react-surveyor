import React from 'react'

import authBackground from 'assets/images/auth-background.png'
import Alert from 'components/Alert'
import AuthLogo from 'components/AuthLogo'
import BackButton from 'components/BackButton'
import Background from 'components/Background'
import ForgotPasswordForm from 'screens/ForgotPassword/form'
import SubmitHandler from 'screens/ForgotPassword/handler'

const ForgotPassword = (): JSX.Element => {
  const { requestSuccess, error, handleSubmit } = SubmitHandler()

  return (
    <Background backgroundImage={authBackground}>
      <BackButton />
      {/* TODO: DRY the container styling with Sign in page */}
      <div className="container-forgot-password">
        <AuthLogo label="Enter your email to receive instructions for resetting your password." />
        {requestSuccess && (
          <Alert title="Check your email" detail="We've email you instructions to reset your password." />
        )}
        {error && <Alert title="Unable to send recovery email" detail={error} />}
        <ForgotPasswordForm submitHandler={handleSubmit} />
      </div>
    </Background>
  )
}

export default ForgotPassword
