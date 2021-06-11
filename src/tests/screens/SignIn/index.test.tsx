import React from 'react'

import { render } from '@testing-library/react'

import SignIn from 'screens/SignIn'

describe('Given SignIn page is mounted', () => {
  it('renders logo', () => {
    const { getByAltText } = render(<SignIn />)
    const logo = getByAltText('NIMBLE')

    expect(logo).toBeInTheDocument()
  })

  it('renders page title', () => {
    const { getByText } = render(<SignIn />)
    const pageTitle = getByText('Sign in to Nimble', { exact: true })

    expect(pageTitle).toBeInTheDocument()
  })

  it('renders page title', () => {
    const { getByText } = render(<SignIn />)
    const pageTitle = getByText('Sign in to Nimble', { exact: true })

    expect(pageTitle).toBeInTheDocument()
  })

  it('renders sign in form', () => {
    const element = render(<SignIn />)
    const signInForm = element.container.querySelector('#signInForm')

    expect(signInForm).toBeInTheDocument()
  })
})
