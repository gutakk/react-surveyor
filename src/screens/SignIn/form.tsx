import React from 'react'

import FormButton from 'components/FormButton'

type SignInFormProps = {
  submitHandler: React.FormEventHandler
}

const SignInForm = ({ submitHandler }: SignInFormProps): JSX.Element => {
  return (
    <form id="signInForm" onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <a href="/forgot-password">Forgot?</a>
      </div>

      <FormButton label="Sign in" />
    </form>
  )
}

export default SignInForm
