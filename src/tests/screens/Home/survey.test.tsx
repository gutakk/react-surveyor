import React from 'react'

import { render } from '@testing-library/react'

import Survey from 'screens/Home/survey'

describe('given survey page is mounted', () => {
  it('renders survey header', () => {
    const { getByTestId } = render(<Survey />)
    const surveyHeader = getByTestId('surveyHeader')

    expect(surveyHeader).toBeInTheDocument()
  })

  it('renders survey time', () => {
    const { getByTestId } = render(<Survey />)
    const surveyTime = getByTestId('surveyTime')

    expect(surveyTime).toBeInTheDocument()
  })

  it('renders blank survey', () => {
    const { getByTestId } = render(<Survey />)
    const blankSurvey = getByTestId('blankSurvey')

    expect(blankSurvey).toBeInTheDocument()
  })
})
