import React from 'react'

import authBackground from 'assets/images/auth-background.png'
import Alert from 'components/Alert'
import AuthLogo from 'components/AuthLogo'
import Background from 'components/Background'

const ForgotPassword = (): JSX.Element => {
  return (
    <Background backgroundImage={authBackground}>
      <div className="container-sign-in">
        <AuthLogo label="Enter your email to receive instructions for resetting your password." />
        <Alert title="Check your email" detail="test" />
      </div>
    </Background>
  )
}

export default ForgotPassword