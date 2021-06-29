import React from 'react'

import { render } from '@testing-library/react'

import Home from 'screens/Home'

describe('given Home page is mounted', () => {
  it('renders lazy loader', () => {
    const { getByTestId } = render(<Home />)
    const lazyLoader = getByTestId('lazyLoader')

    expect(lazyLoader).toBeInTheDocument()
  })
})
