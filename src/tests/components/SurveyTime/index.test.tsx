import React from 'react'

import { render } from '@testing-library/react'

import SurveyTime from 'components/SurveyTime'

describe('given SurveyTime component is mounted', () => {
  it('renders date', () => {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', month: 'long', day: 'numeric' }
    const today: string = new Date().toLocaleString('en-EN', options)

    const { getByText } = render(<SurveyTime />)
    const surveyHeaderLogo = getByText(today)

    expect(surveyHeaderLogo).toBeInTheDocument()
  })

  it('renders day', () => {
    const { getByText } = render(<SurveyTime />)
    const surveyHeaderUserImage = getByText('Today')

    expect(surveyHeaderUserImage).toBeInTheDocument()
  })
})
