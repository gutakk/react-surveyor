import React from 'react'

import { render } from '@testing-library/react'

import SurveyList from 'screens/Home/surveyList'
import surveyListResponse from 'tests/fixtures/surveyListResponse.json'

describe('given surveyList page is mounted', () => {
  describe('given valid survey list', () => {
    it('renders the surveys', () => {
      const { container } = render(<SurveyList surveyList={surveyListResponse} />)
      const surveys = container.getElementsByClassName('survey-list-data')

      expect(surveys.length).toBe(2)
    })

    it('renders correct survey title', () => {
      const { getByText } = render(<SurveyList surveyList={surveyListResponse} />)
      const survey1 = getByText('title-1')
      const survey2 = getByText('title-2')

      expect(survey1).toBeInTheDocument()
      expect(survey2).toBeInTheDocument()
    })

    it('renders correct survey description', () => {
      const { getByText } = render(<SurveyList surveyList={surveyListResponse} />)
      const survey1 = getByText('description-1')
      const survey2 = getByText('description-2')

      expect(survey1).toBeInTheDocument()
      expect(survey2).toBeInTheDocument()
    })

    it('renders correct survey image', () => {
      const { getByAltText } = render(<SurveyList surveyList={surveyListResponse} />)
      const survey1 = getByAltText('title-1')
      const survey2 = getByAltText('title-2')

      expect(survey1).toBeInTheDocument()
      expect(survey2).toBeInTheDocument()
    })
  })

  describe('given empty survey list', () => {
    it('renders blank survey', () => {
      const { getByTestId } = render(<SurveyList surveyList={[]} />)
      const blankSurvey = getByTestId('blankSurvey')

      expect(blankSurvey).toBeInTheDocument()
    })
  })
})
