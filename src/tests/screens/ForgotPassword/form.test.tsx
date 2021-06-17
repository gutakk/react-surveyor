import React from 'react'

import { render, RenderResult } from '@testing-library/react'

import ForgotPasswordForm from 'screens/ForgotPassword/form'

describe('given ForgotPassword form is mounted', () => {
  const handleSubmit = (): null => {
    return null
  }
  let element: RenderResult

  beforeEach(() => {
    element = render(<ForgotPasswordForm submitHandler={handleSubmit} />)
  })

  it('renders email label', () => {
    const emailLabel = element.getByLabelText('Email')

    expect(emailLabel).toBeInTheDocument()
  })

  it('renders email input field', () => {
    const emailInput = element.getByTestId('forgotPasswordEmail')

    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders submit button', () => {
    const submitButton = element.getByText('Send Recovery Email', { exact: true })

    expect(submitButton).toBeInTheDocument()
  })
})
