import React from 'react'

import FormButton from 'components/FormButton'

type SignInFormProps = {
  submitHandler: React.FormEventHandler
}

const SignInForm = ({ submitHandler }: SignInFormProps): JSX.Element => {
  return (
    <form id="signInForm" onSubmit={submitHandler}>
      <div className="form-input-group">
        <label className="form-input-group__label" htmlFor="email">
          Email
        </label>
        <input type="email" name="email" id="email" data-test-id="signInEmail" />
      </div>

      <div className="form-input-group">
        <label className="form-input-group__label" htmlFor="password">
          Password
        </label>
        <input type="password" name="password" id="password" data-test-id="signInPassword" />
      </div>
      <a className="form-input-group__forgot-password" href="/forgot-password" data-test-id="forgotPassword">
        Forgot?
      </a>

      <FormButton label="Sign in" />
    </form>
  )
}

export default SignInForm
