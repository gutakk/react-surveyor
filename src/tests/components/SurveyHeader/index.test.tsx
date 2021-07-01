import React from 'react'

import { render } from '@testing-library/react'

import SurveyHeader from 'components/SurveyHeader'

describe('given SurveyHeader component is mounted', () => {
  it('renders header logo', () => {
    const { getByTestId } = render(<SurveyHeader />)
    const surveyHeaderLogo = getByTestId('surveyHeaderLogo')

    expect(surveyHeaderLogo).toBeInTheDocument()
  })

  it('renders user image', () => {
    const { getByTestId } = render(<SurveyHeader />)
    const surveyHeaderUserImage = getByTestId('surveyHeaderUserImage')

    expect(surveyHeaderUserImage).toBeInTheDocument()
  })
})
