import React from 'react'

import { render } from '@testing-library/react'

import SurveyList from 'screens/Home/surveyList'

describe('given SurveyList page is mounted', () => {
  it('renders survey header', () => {
    const { getByTestId } = render(<SurveyList />)
    const surveyHeader = getByTestId('surveyHeader')

    expect(surveyHeader).toBeInTheDocument()
  })

  it('renders survey time', () => {
    const { getByTestId } = render(<SurveyList />)
    const surveyTime = getByTestId('surveyTime')

    expect(surveyTime).toBeInTheDocument()
  })

  it('renders blank survey', () => {
    const { getByTestId } = render(<SurveyList />)
    const blankSurvey = getByTestId('blankSurvey')

    expect(blankSurvey).toBeInTheDocument()
  })
})
