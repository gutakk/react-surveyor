import React from 'react'

import { render } from '@testing-library/react'

import BlankSurvey from 'screens/Home/blankSurvey'

describe('given BlankSurvey page is mounted', () => {
  it('renders sunglasses emo', () => {
    const { getByAltText } = render(<BlankSurvey />)
    const sunglassesEmo = getByAltText('Sunglasses')

    expect(sunglassesEmo).toBeInTheDocument()
  })

  it('renders completed all survey message', () => {
    const { getByText } = render(<BlankSurvey />)
    const message = getByText('You’ve completed all the survey.')

    expect(message).toBeInTheDocument()
  })

  it('renders take a moment message', () => {
    const { getByText } = render(<BlankSurvey />)
    const message = getByText('Take a moment.')

    expect(message).toBeInTheDocument()
  })
})
