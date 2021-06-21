import React from 'react'

import AuthInputField from 'components/AuthInputField'
import FormButton from 'components/FormButton'

type SignInFormProps = {
  submitHandler: React.FormEventHandler
}

const SignInForm = ({ submitHandler }: SignInFormProps): JSX.Element => {
  return (
    <form id="signInForm" data-test-id="signInForm" onSubmit={submitHandler}>
      <AuthInputField type="email" name="email" id="email" dataTestID="signInEmail" label="Email" />
      <AuthInputField type="password" name="password" id="password" dataTestID="signInPassword" label="Password" />
      <a className="link-forgot-password" href="/forgot-password" data-test-id="forgotPassword">
        Forgot?
      </a>

      <FormButton label="Sign in" />
    </form>
  )
}

export default SignInForm
