import React from 'react'

import AuthInputField from 'components/AuthInputField'
import FormButton from 'components/FormButton'

type ForgotPasswordFormProps = {
  submitHandler: React.FormEventHandler
}

const ForgotPasswordForm = ({ submitHandler }: ForgotPasswordFormProps): JSX.Element => {
  return (
    <form id="forgotPasswordForm" onSubmit={submitHandler} data-test-id="forgotPasswordForm">
      <AuthInputField type="email" name="email" id="email" dataTestID="forgotPasswordEmail" label="Email" />
      <FormButton label="Send Recovery Email" />
    </form>
  )
}

export default ForgotPasswordForm
