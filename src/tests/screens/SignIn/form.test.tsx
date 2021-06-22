import React from 'react'

import { render } from '@testing-library/react'

import SignInForm from 'screens/SignIn/form'

describe('Given SignIn form is mounted', () => {
  const handleSubmit = () => {
    return null
  }

  it('renders correct email and password label', () => {
    const { getByLabelText } = render(<SignInForm submitHandler={handleSubmit} />)
    const emailLabel = getByLabelText('Email')
    const passwordLabel = getByLabelText('Password')

    expect(emailLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
  })

  it('renders correct email input field', () => {
    const { getByTestId } = render(<SignInForm submitHandler={handleSubmit} />)
    const emailInput = getByTestId('signInEmail')

    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
  })

  it('renders correct password input field', () => {
    const { getByTestId } = render(<SignInForm submitHandler={handleSubmit} />)
    const passwordInput = getByTestId('signInPassword')

    expect(passwordInput).toBeInTheDocument()
    expect(passwordInput).toHaveAttribute('type', 'password')
  })

  it('renders forgot password link', () => {
    const { getByText } = render(<SignInForm submitHandler={handleSubmit} />)
    const forgotPasswordLink = getByText('Forgot?', { exact: true })

    expect(forgotPasswordLink).toBeInTheDocument()
  })

  it('renders submit button', () => {
    const { getByText } = render(<SignInForm submitHandler={handleSubmit} />)
    const submitButton = getByText('Sign in', { exact: true })

    expect(submitButton).toBeInTheDocument()
  })
})
