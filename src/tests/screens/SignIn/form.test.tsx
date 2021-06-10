import React from 'react'

import { getByText, render } from '@testing-library/react'

import SignInForm from 'screens/SignIn/form'

describe('Given SignIn form is mounted', () => {
  it('renders correct email and password label', () => {
    const { getByLabelText } = render(<SignInForm />)
    const emailLabel = getByLabelText('Email')
    const passwordLabel = getByLabelText('Password')

    expect(emailLabel).toBeInTheDocument()
    expect(passwordLabel).toBeInTheDocument()
  })

  it('renders correct email input field', () => {
    const element = render(<SignInForm />)
    const emailInput = element.container.querySelector('#email')

    expect(emailInput).toBeInTheDocument()
    expect(emailInput).toHaveAttribute('type', 'email')
    expect(emailInput).toHaveAttribute('required')
  })

  it('renders correct password input field', () => {
    const element = render(<SignInForm />)
    const passwordInput = element.container.querySelector('#password')

    expect(passwordInput).toBeInTheDocument()
    expect(passwordInput).toHaveAttribute('type', 'password')
    expect(passwordInput).toHaveAttribute('required')
  })

  it('renders submit button', () => {
    const { getByText } = render(<SignInForm />)
    const submitButton = getByText('Sign in', {exact: true})

    expect(submitButton).toBeInTheDocument()
  })
})
