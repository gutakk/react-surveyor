import React from 'react'

import { render } from '@testing-library/react'

import Home from 'screens/Home'

describe('given Home page is mounted', () => {
  it('renders survey list', () => {
    const { getByTestId } = render(<Home />)
    const surveyList = getByTestId('surveyList')

    expect(surveyList).toBeInTheDocument()
  })
})
