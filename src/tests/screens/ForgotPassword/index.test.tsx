import React from 'react'

import { render, RenderResult } from '@testing-library/react'

import authBackground from 'assets/images/auth-background.png'
import ForgotPassword from 'screens/ForgotPassword'

describe('given ForgetPassword page is mounted', () => {
  let element: RenderResult
  beforeEach(() => {
    element = render(<ForgotPassword />)
  })

  it('renders background', () => {
    const background = element.getByTestId('backgroundImage')

    expect(background).toBeInTheDocument()
    expect(background).toHaveStyle(`background-image: url(${authBackground})`)
  })

  it('renders back button', () => {
    const backButton = element.getByTestId('backButton')

    expect(backButton).toBeInTheDocument()
  })

  it('renders logo', () => {
    const logo = element.getByAltText('Nimble')

    expect(logo).toBeInTheDocument()
  })

  it('renders page title', () => {
    const pageTitle = element.getByText('Enter your email to receive instructions for resetting your password', {
      exact: true
    })

    expect(pageTitle).toBeInTheDocument()
  })

  it('renders forgot password form', () => {
    const forgotPasswordForm = element.getByTestId('forgotPasswordForm')

    expect(forgotPasswordForm).toBeInTheDocument()
  })
})
