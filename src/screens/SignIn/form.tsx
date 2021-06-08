import React from 'react'

import FormButton from 'components/FormButton'

const SignInForm = (): JSX.Element => {
  return (
    <form>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" />
        <a href="/forgot-password">Forgot?</a>
      </div>

      <FormButton label="Sign in" />
    </form>
  )
}

export default SignInForm
