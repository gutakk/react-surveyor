import React from 'react'

import FormButton from 'components/FormButton'

type SignInFormProps = {
  submitHandler: React.FormEventHandler
}

const SignInForm = ({ submitHandler }: SignInFormProps): JSX.Element => {
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" required />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />
        <a href="/forgot-password">Forgot?</a>
      </div>

      <FormButton label="Sign in" />
    </form>
  )
}

export default SignInForm
