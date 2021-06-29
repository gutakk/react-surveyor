import React from 'react'

import { render } from '@testing-library/react'

import ForgotPasswordForm from 'screens/ForgotPassword/form'

describe('given ForgotPassword form is mounted', () => {
  it('renders email label', () => {
    const handleSubmit = (): null => {
      return null
    }
    const { getByLabelText } = render(<ForgotPasswordForm submitHandler={handleSubmit} />)
    const emailLabel = getByLabelText('Email')

    expect(emailLabel).toBeInTheDocument()
  })

  it('renders email input field', () => {
    const handleSubmit = (): null => {
      return null
    }
    const { getByTestId } = render(<ForgotPasswordForm submitHandler={handleSubmit} />)
    const emailInput = getByTestId('forgotPasswordEmail')

    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders submit button', () => {
    const handleSubmit = (): null => {
      return null
    }
    const { getByText } = render(<ForgotPasswordForm submitHandler={handleSubmit} />)
    const submitButton = getByText('Send Recovery Email', { exact: true })

    expect(submitButton).toBeInTheDocument()
  })
})
