import React from 'react'

import { render } from '@testing-library/react'

import authBackground from 'assets/images/auth-background.png'
import ForgotPassword from 'screens/ForgotPassword'

describe('given ForgetPassword page is mounted', () => {
  it('renders background', () => {
    const { getByTestId } = render(<ForgotPassword />)
    const background = getByTestId('backgroundImage')

    expect(background).toBeInTheDocument()
    expect(background).toHaveStyle(`background-image: url(${authBackground})`)
  })

  it('renders back button', () => {
    const { getByTestId } = render(<ForgotPassword />)
    const backButton = getByTestId('backButton')

    expect(backButton).toBeInTheDocument()
  })

  it('renders logo', () => {
    const { getByAltText } = render(<ForgotPassword />)
    const logo = getByAltText('Nimble')

    expect(logo).toBeInTheDocument()
  })

  it('renders page title', () => {
    const { getByText } = render(<ForgotPassword />)
    const pageTitle = getByText('Enter your email to receive instructions for resetting your password', {
      exact: true
    })

    expect(pageTitle).toBeInTheDocument()
  })

  it('renders forgot password form', () => {
    const { getByTestId } = render(<ForgotPassword />)
    const forgotPasswordForm = getByTestId('forgotPasswordForm')

    expect(forgotPasswordForm).toBeInTheDocument()
  })
})
